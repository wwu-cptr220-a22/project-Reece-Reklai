import React, { Component } from 'react' // import React Component
import { NavLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export class Header extends Component {
  render() {
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
              <li className='nav-link'><NavLink to='/login' className={(navData) => navData.isActive ? 'active-link' : ''}>Login</NavLink></li>
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
  render() {
    return (
      <footer className='copyright'>
        <p>© Copyright 2022 Palau Real Estate</p>
        {/* <p id="googleAttribution">Data from https://www.google.com/maps</p> */}
      </footer>
    )
  }
}

export class LoginPopup extends Component {
  constructor(props) {
    super(props)
    this.state = { rememberUser: true }
  }

  handleClose = () => {
    this.setState({ redirectTo: '/' })
  }

  handleRememberChange = () => {
    this.setState({ rememberUser: !this.state.rememberUser })
  }

  render() {
    return (
      <div>
        <section className='login' aria-label='login box'>
          <div id='index-login-container' className='modal' onClick={this.handleClose}>
            <form className='login-content animate' action='/action_page.php' method='post'>
              <div className='index-form-content'>
                <label htmlFor='username'><b>Username</b></label>
                <input id='index-username' type='text' placeholder='Enter Username' name='username' required />
                <label htmlFor='password'><b>Password</b></label>
                <input id='index-password' type='password' placeholder='Enter Password' name='password' required />
                <button type='submit'>Login</button>
                <label>
                  <input type='checkbox' checked={this.state.rememberUser ? 'checked' : ''} name='remember' onChange={this.handleRememberChange} /> Remember me
                </label>
              </div>
              <div id='cancel-bar' className='index-form-content'>
                <button
                  type='button' onClick={this.handleClose}
                  className='cancelbtn'
                >Cancel
                </button>
                <span className='recovery'> <a href='/#'>Sign Up</a> | Forgot <a href='/#'>password?</a></span>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
}
