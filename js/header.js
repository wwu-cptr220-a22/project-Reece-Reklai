//header navbar
class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <script src="../js/index.js" type="text/javascript" defer></script>

    <header class="main-navbar" aria-label="navigation links">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1"><img id="favicon" src="../img/icons/palauicon.jpg" alt="palau-house"> Palau
          Real Estate</span>
        <div class="navbar-collapse justify-content-end" id="navbarsupportedcontent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" id="search-bar" > 
              <input type="text" placeholder="Search.."> 
            </li>
            <li class="nav-item" id="home-link" aria-current="home link">
              <a class="nav-link active" href="index.html">Home</a>
            </li>
            <li class="nav-item" id="about-link" aria-current="about link">
              <a class="nav-link active" href="about.html">About</a>
            </li>
            <li class="nav-item" id="buy-link" aria-current="buy link">
              <a class="nav-link active" href="buy.html">Buy</a>
            </li>
            <li class="nav-item" id="lease-link" aria-current="lease link">
              <a class="nav-link" href="#">Lease</a>
            </li>
            <li class="nav-item" id="sell-link" aria-current="sell link">
              <a class="nav-link" href="#">Sell</a>
            </li>
            <li class="nav-item" id="user-login" aria-current="login">
              <a class="nav-link active" role="button" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Login Button -->
    <section class="login" aria-label="login box">
      <div id="index-login-container" class="modal">
        <form class="login-content animate" action="/action_page.php" method="post">
          <div class="index-form-content">
            <label for="username"><b>Username</b></label>
            <input id="index-username" type="text" placeholder="Enter Username" name="username" required>
            <label for="password"><b>Password</b></label>
            <input id="index-password" type="password" placeholder="Enter Password" name="password" required>
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
          </div>
          <div class="index-form-content" style="background-color:#c5c5c54d">
            <button type="button" onclick="document.getElementById('index-login-container').style.display='none'"
              class="cancelbtn">Cancel</button>
            <span class="recovery"> <a href="#">Sign Up</a> | Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
    </section>`
  }
}
customElements.define('my-header', Header)

//Footer info
class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = ` <footer id="buy-footer">
    <h5> © Copyright 2022</h5>
    <h5>Email: reece. reklai@wallawalla.edu</h5>
  </footer>`
  }
}
customElements.define('my-footer', Footer)

// Get the modal (Index Page)
const login = document.getElementById('index-login-container')

// When the user clicks anywhere outside of the login, close it
window.onclick = function (event) {
  if (event.target === login) {
    login.style.display = 'none'
  }
}

// Click on the login navigation will open the login form
const userLogin = document.getElementById('user-login')
userLogin.addEventListener('click', function () {
  const button = document.getElementById('index-login-container')
  button.style.display = 'block'
  button.style.width = 'auto'
})