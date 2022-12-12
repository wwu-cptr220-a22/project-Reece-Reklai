import React, { useState, useEffect } from 'react';
import GMap from './GMap'
 
// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyCIvBhGsNo2E_QcMZgnuZw4wZ-eh0fVDcY';
 
// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCIvBhGsNo2E_QcMZgnuZw4wZ-eh0fVDcY`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}
 
const Listings = () => {
  const [loadMap, setLoadMap] = useState(false);
 
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);
 
  return (
    <div className="App">
      <a href="https://www.cluemediator.com">Clue Mediator</a><br /><br />
      {!loadMap ? <div>Loading...</div> : <GMap />}
    </div>
  );
}
 
export default Listings;