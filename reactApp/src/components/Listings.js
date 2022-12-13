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


  // post = { image: ul_image, address: ul_address, price: ul_price, lat: ul_latitude, lng: ul_longitude, details: ul_details }
  function setUpPost(post) {
    return (
      <section className="post flex-item">
        <h3>Price: {post.price}</h3>
        <div className="image-panel">
          <img
            className="listing-photo"
            alt={post.address}
            src={post.image}
          ></img>
          <div className='map'>
            {!loadMap ? <div>Loading...</div> : <GMap lat={post.lat} lng={post.lng}/>}
          </div>
        </div>
        {post.details}
      </section>
    )
  }

  return (
    <>
      <div id="body-container">
        <main id="maincontent">
          <div className="flex flex-list">
            <h2>Buy</h2>
            {setUpPost(props.currentListings[0])}
            <button onClick={() => props.handleAction()}></button>
            {token != null ? props.post() : <></>}
          </div>
        </main>
      </div>
    </>
  );
}

export default Listings;