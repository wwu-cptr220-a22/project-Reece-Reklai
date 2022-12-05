import React, { Component } from "react"; // import React Component
import "../css/stylesheet.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.weatherPage =
      "https://forecast.weather.gov/product.php?site=GUM&issuedby=PQ&product=RWR&format=CI&version=1&glossary=0";
    this.weatherTitle = "CITY\tSKY/WX\tTMP\tDP\tRH\tWIND\tPRESSURE\tREMARKS";
  }

  fetchForecast() {
    const promise = fetch(this.weatherPage)
      .then((response) => {
        return response.text();
      })
      .then(this.renderForecast)
      .catch((error) => {
        console.log(error);
      });
    return promise;
  }

  renderForecast(results) {
    let forecast = this.parseForecast(results);
    let startRX = /pre class="glossaryProduct"/;
    let kororRX = /KOROR AP/;
    let kororEndRX = /KOROR WSO/;
    let startIndex = forecast.match(startRX).index;
    let workingData = forecast.substring(startIndex, startIndex + 1300);
    startIndex = workingData.match(kororRX).index;
    let endIndex = workingData.match(kororEndRX).index;
    return workingData.substring(startIndex, endIndex);
  }

  render() {
    return (
      <div>
        <main id="carousel" aria-label="carousel">
          <div
            id="carousel-example-dark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img
                  src="../img/palau-background/resort.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-md-block">
                  <div className="weather-status">
                    <h1>Palau Weather Status</h1>
                    <div className="weather">{this.weatherTitle} <br/> {'reece'}</div>
                    <p>
                      Data from{" "}
                      <a href="https://forecast.weather.gov/product.php?site=GUM&issuedby=PQ&product=RWR&format=CI&version=1&glossary=0">
                        forecast.weather.gov
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="../img/palau-background/palau-beach.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-block">
                  <div className="weather-status">
                    <h1>Palau Weather Status</h1>
                    <div className="weather">{this.weatherTitle}</div>
                    <p>
                      Data from{" "}
                      <a href="https://forecast.weather.gov/product.php?site=GUM&issuedby=PQ&product=RWR&format=CI&version=1&glossary=0">
                        forecast.weather.gov
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="../img/palau-background/ocean.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-md-block">
                  <div className="weather-status">
                    <h1>Palau Weather Status</h1>
                    <div className="weather">{this.weatherTitle}</div>
                    <p>
                      Data from{" "}
                      <a href="https://forecast.weather.gov/product.php?site=GUM&issuedby=PQ&product=RWR&format=CI&version=1&glossary=0">
                        forecast.weather.gov
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
