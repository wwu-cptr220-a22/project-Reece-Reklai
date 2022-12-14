import React, { Component } from 'react' // import React Component
import { NavLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export class Header extends Component {
  handleLogout = () => {
    sessionStorage.removeItem('Auth Token')
    window.location.reload()
  }

  token = sessionStorage.getItem('Auth Token')
  render () {
    return (
      <div>
        <div className='topnav' id='myTopnav'>
          <NavLink to='/'>
            <span className='navbar-brand'><img id='favicon' src='../img/icons/palauicon.jpg' alt='palau-house' /> Palau
              Real Estate
            </span>
          </NavLink>
          <nav id='about-links'>
            <ul>
              {this.token != null ? <li className='nav-link' onClick={this.handleLogout}>Log out</li> : <li className='nav-link'><NavLink to='/login' className={(navData) => navData.isActive ? 'active-link' : ''}>Login/Register</NavLink></li>}
              {this.token != null ? <li className='nav-link'><NavLink to='/post' className={(navData) => navData.isActive ? 'active-link' : ''}>Create Post</NavLink></li> : <></>}
              <li className='nav-link'><NavLink to='/about' className={(navData) => navData.isActive ? 'active-link' : ''}>About</NavLink></li>
              <li className='nav-link'><NavLink to='/listings' className={(navData) => navData.isActive ? 'active-link' : ''}>Buy/Rent</NavLink></li>
            </ul>
          </nav>
          <form className='search-container' aria-label='Search bar' action='https://www.google.com/search'>
            <input type='text' placeholder='Search..' name='search' />
            <button id='search-button' type='submit'>
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export class Footer extends Component {
  render () {
    return (
      <footer className='copyright'>
        <p>© Copyright 2022 Palau Real Estate</p>
        {/* <p id="googleAttribution">Data from https://www.google.com/maps</p> */}
      </footer>
    )
  }
}
