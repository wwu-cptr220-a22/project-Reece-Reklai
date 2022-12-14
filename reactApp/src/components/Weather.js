let weather = ''

function FetchForest (props) {
  const weatherPage = 'https://forecast.weather.gov/product.php?site=GUM&issuedby=PQ&product=RWR&format=CI&version=1&glossary=0'
  const promise = fetch(weatherPage)
    .then(response => {
      return response.text()
    }).then(renderSearchResults)
    .catch((error) => { console.log(error) })

  function renderSearchResults (results) {
    return parseForecast(results)
  }

  function parseForecast (weatherPage) {
    const startRX = /pre class="glossaryProduct"/
    const kororRX = /KOROR AP/
    const kororEndRX = /KOROR WSO/
    let startIndex = weatherPage.match(startRX).index

    // arbitrary cutoff to contain all relivant data
    const workingData = weatherPage.substring(startIndex, startIndex + 1300)
    startIndex = workingData.match(kororRX).index
    const endIndex = workingData.match(kororEndRX).index
    return workingData.substring(startIndex, endIndex)
  }
  promise.then((value) => {weather = value})
  return weather
}

FetchForest()

export default FetchForest
