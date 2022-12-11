import React, { Component } from 'react' // import React Component

class Home extends Component {
  constructor (props) {
    super(props)
    this.weatherTitle = 'CITY\tSKY/WX\tTMP\tDP\tRH\tWIND\tPRESSURE\tREMARKS'
    this.state = {
      weather: ''
    }
  }

  fetchForecast () {
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
    promise.then(value => { this.setState({ weather: value }) })
    return this.state.weather
  }

  render () {
    return (
      <>
        <main id='carousel' aria-label='carousel'>
          <div
            id='carousel-example-dark'
            className='carousel carousel-dark slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active' data-bs-interval='5000'>
                <img
                  src='../img/palau-background/resort.jpg'
                  className='d-block w-100'
                  alt='...'
                />
                <div className='carousel-caption d-md-block'>
                  <div className='weather-status'>
                    <h1>Palau Weather Status</h1>
                    <div className='weather'>{this.weatherTitle} <br />{this.fetchForecast()}</div>
                    <p>
                      Data from{' '}
                      <a href='https://forecast.weather.gov/product.php?site=GUM&issuedby=PQ&product=RWR&format=CI&version=1&glossary=0'>
                        forecast.weather.gov
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='carousel-item' data-bs-interval='5000'>
                <img
                  src='../img/palau-background/palau-beach.jpg'
                  className='d-block w-100'
                  alt='...'
                />
                <div className='carousel-caption d-block'>
                  <div className='weather-status'>
                    <h1>Palau Weather Status</h1>
                    <div className='weather'>{this.weatherTitle} <br /> {this.fetchForecast()}</div>
                    <p>
                      Data from{' '}
                      <a href='https://forecast.weather.gov/product.php?site=GUM&issuedby=PQ&product=RWR&format=CI&version=1&glossary=0'>
                        forecast.weather.gov
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='carousel-item' data-bs-interval='5000'>
                <img
                  src='../img/palau-background/ocean.jpg'
                  className='d-block w-100'
                  alt='...'
                />
                <div className='carousel-caption d-md-block'>
                  <div className='weather-status'>
                    <h1>Palau Weather Status</h1>
                    <div className='weather'>{this.weatherTitle} <br />{this.fetchForecast()}</div>
                    <p>
                      Data from{' '}
                      <a href='https://forecast.weather.gov/product.php?site=GUM&issuedby=PQ&product=RWR&format=CI&version=1&glossary=0'>
                        forecast.weather.gov
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Home
