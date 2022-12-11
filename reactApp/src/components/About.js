import React, { Component } from 'react' // import React Component
import { ContactUs } from './ContactForm'

class About extends Component {
  render () {
    return (
      <div id='about'>
        <div id='maincontent-dark' className='flex flex-main'>
          <div className='flex-about'>
            <div className='palau-problem'>
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
            <div className='project-purpose'>
              <h2>Why Real Estate Palau?</h2>
              <p>
                Palau real estate web application's purpose is to allow Palauans to
                start selling their land locally and internationally: ignite the growth
                of the real estate market and create another source of cash flow in
                Palau
              </p>
            </div>
          </div>
          <div className='flex-about'>
            <div className='help-form'>
              <h3 className='about-form-title'>Question and Help</h3>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
