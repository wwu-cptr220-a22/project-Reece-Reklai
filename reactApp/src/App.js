import React, { Component } from 'react' // import React Component
import './css/stylesheet.css'
import './css/navbar.css'
import './css/flex-style.css'
import './css/listing-style.css'
import './css/about-style.css'
// import _ from 'lodash'
import Home from './components/Home'
import Listings from './components/Listings'
import About from './components/About'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Header, Footer } from './components/GeneralDetails'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home className="home-page"/>} />
          <Route path='/listings' element={<Listings />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Footer />
      </div>
    )
  }
}

export default App
