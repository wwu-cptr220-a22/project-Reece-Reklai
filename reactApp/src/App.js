import React, { Component } from 'react' // import React Component
import './style.css'
// import _ from 'lodash'
import Home from './components/Home'
import Listings from './components/Listings'
import About from './components/About'
import { Route, Routes, Navigate } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listings' element={<Listings />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    )
  }
}

export default App
