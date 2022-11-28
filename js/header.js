// header navbar
class Header extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- Header -->
  <div class="topnav" id="myTopnav">
    <span class="navbar-brand"><img id="favicon" src="../img/icons/palauicon.jpg" alt="palau-house"> Palau
      Real Estate</span>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
    <a class="nav-link active" id="user-login" role="button" href="#">Login</a>
    <a class="nav-link" href="buy.html">Sell</a>
    <a class="nav-link" href="buy.html#rent">Lease</a>
    <a class="nav-link" href="about.html">About</a>
    <a class="nav-link" href="buy.html">Buy</a>
    <a class="nav-link" href="index.html">Home</a>
    <form class="search-container" aria-label="Search bar"action="https://www.google.com/search">
      <input type="text" name="q" placeholder="Search.." name="search">
      <button id="search-button" type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
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
  <script src="../js/header.js" type="text/javascript" defer></script>
  <script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
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
    <p>Data from https://www.google.com/maps</p>
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
