// Initialize and add the map (Buy Page)
function initMap() {
  // The location of Palau
  const palau = { lat: 7.53644, lng: 134.58159 };
  let position // declared for each map based on hidden div for lat and lng
  let latRX = /(?<=lat: )\d*\.\d*/
  let lngRX = /(?<=lng: )\d*\.\d*/

  // The map, centered at Palau
  const locations = document.querySelectorAll('.google-maps')

  locations.forEach(element => {
    let positionData = element.children.item(0).textContent
    const newLat = Number(positionData.match(latRX))
    const newLng = Number(positionData.match(lngRX))

    // console.log(newLat, newLng)

    position = { lat: newLat, lng: newLng }

    const map = new google.maps.Map(element, {
      zoom: 11,
      center: position,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: position,
      map: map,
    });
  });

  // const map = new google.maps.Map(document.getElementById("google-map"), {
  //   zoom: 10,
  //   center: palau,
  // });
  // The marker, positioned at Uluru
  // const marker = new google.maps.Marker({
  //   position: palau,
  //   map: map,
  // });
}
window.initMap = initMap;
