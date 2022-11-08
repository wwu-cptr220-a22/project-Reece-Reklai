// Initialize and add the map (Buy Page)
function initMap () {
  // The location of Palau
  const palau = { lat: 7.53644, lng: 134.58159 }
  let position // declared for each map based on hidden div for lat and lng
  const latRX = /lat:\s[\d]*\.[\d]*/ // tests don't like positive lookbehind
  const lngRX = /lng:\s[\d]*\.[\d]*/

  // The map, centered at Palau
  const locations = document.querySelectorAll('.google-maps')

  locations.forEach(element => {
    const positionData = element.children.item(0).textContent

    let newLat = Number(positionData.match(latRX)[0].substring(4))
    let newLng = Number(positionData.match(lngRX)[0].substring(4))
    if (newLat === null) {
      newLat = palau.lat
    }
    if (newLng === null) {
      newLng = palau.lng
    }
    // console.log(newLat, newLng)

    position = { lat: newLat, lng: newLng }

    // new map zoomed in a little over Palau

    // eslint-disable-next-line no-undef
    const map = new google.maps.Map(element, {
      zoom: 11,
      center: position
    })
    // The marker, (default) positioned at Uluru
    // eslint-disable-next-line no-undef
    new google.maps.Marker({
      position,
      map
    })
  })
}
window.initMap = initMap
