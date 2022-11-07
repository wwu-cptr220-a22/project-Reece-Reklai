// Get the modal
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

