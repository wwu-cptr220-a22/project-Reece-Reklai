// Initialize and add the map (Buy Page)
function initMap() {
  // The location of Palau
  // const palau = { lat: 7.53644, lng: 134.58159 }
  let position // declared for each map based on hidden div for lat and lng
  const latRX = /(?<=lat: )\d*\.\d*/
  const lngRX = /(?<=lng: )\d*\.\d*/

  // The map, centered at Palau
  const locations = document.querySelectorAll('.google-maps')

  locations.forEach(element => {
    const positionData = element.children.item(0).textContent
    const newLat = Number(positionData.match(latRX))
    const newLng = Number(positionData.match(lngRX))

    // console.log(newLat, newLng)

    position = { lat: newLat, lng: newLng }

    const map = new google.maps.Map(element, {
      zoom: 11,
      center: position
    })
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position,
      map
    })
  })
}
window.initMap = initMap
