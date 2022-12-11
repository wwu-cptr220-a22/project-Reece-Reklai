import React, { Component } from 'react' // import React Component
import { NavLink } from 'react-router-dom'

export class LoginPopup extends Component {
    constructor (props) {
      super(props)
      this.state = { id: 1, buttonText: "Login" }
    }
    handleSignIn = () => {this.props.handleAction(this.state.id)}
    handleRegister = () => {this.setState({ id: 2, buttonText: "Register" })}
  
    render () {
      return (
        <div className='login-content animate'>
          <div className='index-form-content'>
            <label htmlFor='username'><b>Username</b></label>
            <input onChange={(e) => this.props.setEmail(e.target.value)} id='index-username' type='text' placeholder='Enter Username' name='username' required />
            <label htmlFor='password'><b>Password</b></label>
            <input onChange={(e) => this.props.setPassword(e.target.value)} id='index-password' type='password' placeholder='Enter Password' name='password' required />
            <button type='submit' onClick={this.handleSignIn}>{this.state.buttonText}</button>
          </div>
          <div id='cancel-bar' className='index-form-content'>
            <NavLink to='/'>
              <button
                type='button'
                className='cancelbtn'
              >Cancel
              </button>
            </NavLink>
            <button id='sign-up-link' onClick={this.handleRegister}>Sign Up</button>
          </div>
        </div>
      )
    }
  }
  
  export default LoginPopup