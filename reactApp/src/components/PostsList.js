import React, { useEffect, useState } from 'react' // import React Component

function PostsList (price, address, image, details, lat, lng) {
  // if time https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/
  // post = { image: ul_image, address: ul_address, price: ul_price, lat: ul_latitude, lng: ul_longitude, details: ul_details }

  return (
    <section className='post flex-item'>
      <h3>Price: {price}</h3>
      <div>{address}</div>
      {details}
      <div className='image-panel'>
        <img
          className='listing-photo'
          alt={address}
          src={image}
        />
        {/* <div className='map'>
                    {!loadMap ? <div>Loading...</div> : <GMap lat={lat} lng={lng}/>}
                </div> */}
      </div>
    </section>
  )
}

export default PostsList
