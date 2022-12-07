import React, { Component } from "react"; // import React Component
import "../css/stylesheet.css";
import { NavLink } from "react-router-dom";

export class Header extends Component {
    handleClick = () => {
        //TODO
        this.props.iconClick();
    }
    render() {

        return (
            <div>
                <div className="topnav" id="myTopnav">
                    <span className="navbar-brand"><img id="favicon" src="../img/icons/palauicon.jpg" alt="palau-house" /> Palau
                        Real Estate</span>
                    <button className="icon" onClick={this.handleClick} />
                    <i className="fa fa-bars"></i>
                    <nav id='about-links'>
                        <ul>
                            <li className="nav-link"><NavLink to='/login' className={(navData) => navData.isActive ? 'active-link' : ''}>Login</NavLink></li>
                            <li className="nav-link"><NavLink to='/' className={(navData) => navData.isActive ? 'active-link' : ''}>Home</NavLink></li>
                            <li className="nav-link"><NavLink to='/about' className={(navData) => navData.isActive ? 'active-link' : ''}>About</NavLink></li>
                            <li className="nav-link"><NavLink to='/listings' className={(navData) => navData.isActive ? 'active-link' : ''}>Buy/Rent</NavLink></li>
                        </ul>
                    </nav>
                    <form className="search-container" aria-label="Search bar" action="https://www.google.com/search">
                        <input type="text" placeholder="Search.." name="search" />
                        <button id="search-button" type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                {/* <LoginPopup/> */}
            </div>
        );
    }
}

export class Footer extends Component {
    render() {
        return (
            <footer className="copyright">
                <p>© Copyright 2022 Palau Real Estate</p>
            </footer>
        );
    }
}

export class LoginPopup extends Component {
    render() {
        return (
            <div>
                <section className="login" aria-label="login box">
                    <div id="index-login-container" className="modal">
                        <form className="login-content animate" action="/action_page.php" method="post">
                            <div className="index-form-content">
                                <label htmlFor="username"><b>Username</b></label>
                                <input id="index-username" type="text" placeholder="Enter Username" name="username" required />
                                <label htmlFor="password"><b>Password</b></label>
                                <input id="index-password" type="password" placeholder="Enter Password" name="password" required />
                                <button type="submit">Login</button>
                                <label>
                                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                                </label>
                            </div>
                            {/* <div className="index-form-content" style="background-color:#c5c5c54d">
                                <button type="button" onclick="document.getElementById('index-login-container').style.display='none'"
                                    className="cancelbtn">Cancel</button>
                                <span className="recovery"> <a href="#">Sign Up</a> | Forgot <a href="#">password?</a></span>
                            </div> */}
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}