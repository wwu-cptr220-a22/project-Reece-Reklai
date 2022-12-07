import React, { Component } from "react"; // import React Component
import { Email } from "https://smtpjs.com/v3/smtp.js";
import "../css/stylesheet.css";
import "../css/about-style.css";

// https://reactgo.com/react-get-input-value/

class About extends Component {
  constructor(props) {
    super(props);
    // this.mailService = "https://smtpjs.com/v3/smtp.js";
    this.state = { name: "", email: "", message: "", submitMessage: "Submit" }
  }

  handleName = event => {
    this.setState({ name: event.target.value });
  }
  handleEmail = event => {
    this.setState({ email: event.target.value });
  }
  handleMessage = event => {
    this.setState({ message: event.target.value });
  }

  HandleSubmit = () => {
    // tutorial found on https://www.youtube.com/watch?v=MV-Aqkjju64&t
    Email.send({
      SecureToken: '5b52722e-1196-4b73-9b5d-86718fac6991', // gitleaks:allow
      To: 'PalauRealEstateWWU@gmail.com',
      From: 'PalauRealEstateWWU@gmail.com',
      Subject: 'Email Submission (' + this.state.name + ')',
      Body: 'Name: ' + this.state.name + '<br>Email: ' + this.state.email + '<br>' + this.state.message
    })
      .then(message => {
        console.log('send status: ' + message)
        // adding event to let user know their form was submitted
        this.setState({ name: "", email: "", message: "", submitMessage: "Message Sent!" });
        setTimeout(() => { this.setState({submitMessage:"Submit"}) }, 5000)
      })
      .catch(er => {
        console.log(er)
      });

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
                <input type="text" id="name" onChange={this.handleName} value={this.state.name} />
                <br />
                <label class="about-email" for="email">Email</label>
                <input type="email" id="email" onChange={this.handleEmail} value={this.state.email} />
                <br />
                <label class="about-message" for="message-box">Message</label>
                <br />
                <textarea name="name" id="message-box" rows="10" cols="30" onChange={this.handleMessage} value={this.state.message}></textarea>
                <br />
                <input type="submit" id="submit-button" name="final-message" value={this.state.submitMessage} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
