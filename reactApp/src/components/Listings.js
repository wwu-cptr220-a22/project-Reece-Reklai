import React, { useState, useEffect } from 'react';
import GMap from './GMap'
// import WritePost from './WritePost'

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

const Listings = (props) => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  var token = sessionStorage.getItem('Auth Token')
  var test = props.currentListings()
  return (
    <>
      <div id="body-container">
        <main id="maincontent">
          <div className="flex flex-list">
            <h2>Buy</h2>
            {test}
            {token != null ? props.post() : <></>}
          </div>
        </main>
      </div>
    </>
  );
}

export default Listings;