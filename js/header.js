// header navbar
class Header extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <header class="main-navbar" aria-label="navigation links">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1"><img id="favicon" src="../img/icons/palauicon.jpg" alt="palau-house"> Palau
            Real Estate</span>
            <div class="navbar-collapse justify-content-end" id="navbarsupportedcontent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" id="search-bar"> 
                  <form class="example" action="action_page.php">
                    <input type="text" placeholder="Search.." name="search">
                  </form>
                </li>
                <li>
                  <form class="example" action="action_page.php">
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </form>
                </li>
                <li class="nav-item" id="home-link">
                  <a class="nav-link active" href="index.html">Home</a>
                </li>
                <li class="nav-item" id="about-link">
                  <a class="nav-link active" href="about.html">About</a>
                </li>
                <li class="nav-item" id="buy-link">
                  <a class="nav-link active" href="buy.html">Buy</a>
                </li>
                <li class="nav-item" id="lease-link">
                  <a class="nav-link active" href="buy.html#rent">Lease</a>
                </li>
                <li class="nav-item" id="sell-link">
                  <a class="nav-link" href="#">Sell</a>
                </li>
                <li class="nav-item" id="user-login">
                  <a class="nav-link active" role="button" href="#">Login</a>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </header>
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
    </section>
    <script src="../js/index.js" type="text/javascript" defer></script>
    `
  }
}
customElements.define('my-header', Header)

// Footer info
class Footer extends HTMLElement {
  connectedCallback () {
    this.innerHTML = ` <footer id="buy-footer">
    <h4> © Copyright 2022</h4>
    <h4>Palau Real Estate </h4>
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
