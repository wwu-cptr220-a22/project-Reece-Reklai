const weatherPage = 'https://forecast.weather.gov/product.php?site=GUM&issuedby=PQ&product=RWR&format=CI&version=1&glossary=0'

function fetchForecast() {
    const promise = fetch(weatherPage)
        .then(response => {
            return response.text()
        }).then(renderSearchResults)
        .catch((error) => { renderError(error) })
    return promise
}

function renderError(error) {
    console.log(error)
}

function renderSearchResults(results) {
    // get forecast from HTML page from weather report
    const header = document.createElement('p')
    const forecastParagraph = document.createElement('p')
    header.textContent = 'CITY           SKY/WX    TMP DP  RH WIND       PRES   REMARKS'
    console.log(header)
    const forecast = parseForecast(results)
    const weather = document.querySelector('#weather') // weather div
    forecastParagraph.textContent = forecast
    weather.appendChild(header)
    weather.appendChild(forecastParagraph)
}

function parseForecast(weatherPage){
    const startRX = /pre class="glossaryProduct"/
    const kororRX = /KOROR AP/
    const kororEndRX = /KOROR WSO/
    let startIndex = weatherPage.match(startRX).index
    let endIndex
    // arbitrary cutoff to contain all relivant data
    const workingData = weatherPage.substring(startIndex, startIndex + 1300) 

    startIndex = workingData.match(kororRX).index
    endIndex = workingData.match(kororEndRX).index
    console.log(startIndex, endIndex)
    console.log(workingData.substring(startIndex, endIndex))
    return workingData.substring(startIndex, endIndex)
}

fetchForecast()