import React, { Component } from 'react' // import React Component
import './style.css'
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { pets: props.pets }
  }
}

export default App
