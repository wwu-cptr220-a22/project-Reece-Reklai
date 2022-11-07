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

// Initialize and add the map (Buy Page)
function initMap() {
  // The location of Palau
  const palau = { lat: 7.53644, lng: 134.58159 };
  // The map, centered at Palau
  const map = new google.maps.Map(document.getElementById("google-map"), {
    zoom: 10,
    center: palau,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: palau,
    map: map,
  });
}

window.initMap = initMap;