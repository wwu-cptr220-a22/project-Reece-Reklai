import React, { Component } from 'react' // import React Component
import './style.css'
import _ from 'lodash'
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Home></Home>
      </div>
    )
  }
}

export default App
