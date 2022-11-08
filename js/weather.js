const weatherPage = 'https://forecast.weather.gov/product.php?site=GUM&issuedby=PQ&product=RWR&format=CI&version=1&glossary=0'

function fetchForecast () {
  const promise = fetch(weatherPage)
    .then(response => {
      return response.text()
    }).then(renderSearchResults)
    .catch((error) => { renderError(error) })
  return promise
}

function renderError (error) {
  console.log(error)
}

function renderSearchResults (results) {
  const weather = document.querySelectorAll('.weather') // weather div
  weather.forEach(element => {
    // get forecast from HTML page from weather report
    const header = document.createElement('p')
    const forecastParagraph = document.createElement('p')
    header.textContent = 'CITY\tSKY/WX\tTMP\tDP\tRH\tWIND\tPRESSURE\tREMARKS'
    console.log(header)
    const forecast = parseForecast(results)
    forecastParagraph.textContent = forecast
    element.appendChild(header)
    element.appendChild(forecastParagraph)
  })
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
  console.log(startIndex, endIndex)
  console.log(workingData.substring(startIndex, endIndex))
  return workingData.substring(startIndex, endIndex)
}

fetchForecast()
