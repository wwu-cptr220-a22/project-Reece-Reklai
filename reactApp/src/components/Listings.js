import React, { useState, useEffect } from 'react';
import GMap from './GMap'
import WritePost from './WritePost'

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
    <>
      <div id="body-container">
        <main id="maincontent">
          <div className="flex flex-list">
            <h2>Buy</h2>
            <section className="post flex-item">
              <h3>Price: 495,000.00</h3>
              <a href="https://remax-palau.com/homes/listing_details/PLW-1568465245">
                001N06 Ngeruos Ngerusar, Babeldaob 96940
              </a>
              <div className="image-panel">
                <img
                  className="listing-photo"
                  alt="House"
                  src="https://remax-palau.com/uploads/listings/1602145527_Entry.JPG"
                ></img>
                <div className='map'>
                  {!loadMap ? <div>Loading...</div> : <GMap />}
                </div>
              </div>
              <ul>
                  <li>
                    <em>Property Type:</em> Single Fmly For Sale
                  </li>
                  <li>
                    <em># of Bedrooms:</em> 4
                  </li>
                  <li>
                    <em># of Bathrooms:</em> 3
                  </li>
                  <li>
                    <em>Square Footage:</em> 2600 SqFt
                  </li>
                  <li>
                    <em>Description:</em> Also available to rent
                  </li>
                </ul>
              <WritePost></WritePost>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Listings;