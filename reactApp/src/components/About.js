import React, { Component } from "react"; // import React Component
import "../css/stylesheet.css";
import "../css/about-style.css";

class About extends Component {
  HandleSubmit = () => {

  }
  render() {
    return (
      <div id="About">
        <div class="flex flex-main">
          <div class="flex-about">
            <div class="palau-problem">
              <h1>Palau's Real Estate Problem</h1>
              <p>
                In Palau, many people own a plot of land. In most cases, it is
                currently undeveloped. Furthermore, Palau has a unique law that
                prevents foreigners from owning land. This means that Palauans can
                only buy and sell land to one another. In order to include foreigners,
                Palauans can lease their land for 99 years to them. To make matters
                worse, there will be a huge population increase in a few years because
                USA is in the process of establishing a base in one of Palau's states.
                Currently, there is no system in place that facilitates transaction
                between Palauans as well as foreigners. This website answers these
                problems. Welcome to Palau Real Estate! Here, the website allows the
                click of a button where both problems are taken into account and
                handled for you!
              </p>
            </div>
            <div class="project-purpose">
              <h2>Why Real Estate Palau?</h2>
              <p>
                Palau real estate web application's purpose is to allow Palauans to
                start selling their land locally and internationally: ignite the growth
                of the real estate market and create another source of cash flow in
                Palau
              </p>
            </div>
          </div>
          <div class="flex-about">
            <div class="help-form">
              <h3 class="about-form-title">Question and Help</h3>
              <form id="contact-form" onSubmit={this.HandleSubmit}>
                <label class="about-name" for="name">Name</label>
                <input type="text" id="name" value="" />
                <br />
                <label class="about-email" for="email">Email</label>
                <input type="email" id="email" value="" />
                <br />
                <label class="about-message" for="message-box">Message</label>
                <br />
                <textarea name="name" id="message-box" rows="10" cols="30"></textarea>
                <br />
                <input type="submit" id="submit-button" name="final-message" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
