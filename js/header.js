
//header navbar
class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header class="main-navbar" aria-label="navigation links">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1"><img id="favicon" src="../img/icons/palauicon.jpg" alt="palau-house"> Palau
          Real Estate</span>

        <div class="navbar-collapse justify-content-end" id="navbarsupportedcontent">
        <input type="text" placeholder="Search..">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" aria-current="about link">
              <a class="nav-link active" id="about-link" href="about.html">About</a>
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
            <li id="user-login" class="nav-item" aria-current="login">
              <a class="nav-link active" role="button" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`
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
