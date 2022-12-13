import React, { useEffect, useRef } from 'react';
 
const GMap = (props) => {
  const googleMapRef = useRef(null);
  let googleMap = null;
 
  useEffect(() => {
    googleMap = initGoogleMap();
    createMarker();
  }, []);
 
 
  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 7.53644, lng: 134.58159 },
      zoom: 12
    });
  }
 
  // create marker on google map
  const createMarker = () => new window.google.maps.Marker({
    position: { lat: props.lat, lng: props.lng },
    map: googleMap
  });
 
  return <div
    ref={googleMapRef}
    className="google-maps"
  />
}
 
export default GMap;