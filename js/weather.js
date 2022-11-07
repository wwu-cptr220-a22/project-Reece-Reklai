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
    const forecast = parseForecast(results)

    console.log(results)

    const weather = document.querySelector('#weather') // weather div

}

{/* <pre class="glossaryProduct">000
ASPQ40 PGUM 071910
RWRPQ
WEATHER ROUNDUP FOR THE MARIANAS AND MICRONESIA
NATIONAL WEATHER SERVICE TIYAN GU
500 AM CHST TUE NOV 08 2022

GUZ001&gt;004-072000-
MARIANA ISLANDS-

CITY           SKY/WX    TMP DP  RH WIND       PRES   REMARKS
GUAM AIRPORT   CLEAR     81  77  89 E6        29.85R
ANDERSEN AFB   PTCLDY    79  75  89 E12       29.86R
ROTA AIRPORT   NOT AVBL
TINIAN AP      NOT AVBL
SAIPAN AP      PTCLDY    81  79  94 NE7       29.86S

$$

PMZ161-072000-
REPUBLIC OF PALAU-

CITY           SKY/WX    TMP DP  RH WIND       PRES   REMARKS
KOROR AP       NOT AVBL
KOROR WSO      NOT AVBL

$$

PMZ171&gt;174-072000-
FEDERATED STATES OF MICRONESIA-

CITY           SKY/WX    TMP DP  RH WIND       PRES   REMARKS
YAP AIRPORT    MOCLDY    81  79  94 CALM      29.78S
CHUUK AP       CLOUDY    79  75  89 VRB3      29.79R
POHNPEI AP     NOT AVBL
POHNPEI WSO    CLOUDY    75  75 100 CALM      29.84R
KOSRAE AP      NOT AVBL

$$

PMZ181-072000-
REPUBLIC OF THE MARSHALL ISLANDS-

CITY           SKY/WX    TMP DP  RH WIND       PRES   REMARKS
KWAJALEIN AP   CLEAR     82  75  78 E15       29.82R
MAJURO AP      NOT AVBL
MAJURO WSO     PTCLDY    82  75  78 E6        29.79R

$$



</pre> */}

function parseForecast(weatherPage){
    const pattern = /(?<=<pre class="glossaryProduct">)\d*\.\d*/
    const WeatherDetails = weatherPage.match(pattern)
    console.log(WeatherDetails)
}

fetchForecast()