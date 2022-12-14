import React from 'react' // import React Component
// import GMap from './GMap'

function PostsList(price, address, image, details) {
    // if time https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/
    // post = { image: ul_image, address: ul_address, price: ul_price, lat: ul_latitude, lng: ul_longitude, details: ul_details }
    return (
        <section className="post flex-item">
            <h3>Price: {price}</h3>
            <div>{address}</div>
            <div className="image-panel">
                <img
                    className="listing-photo"
                    alt={address}
                    src={image}
                ></img>
                {/* <div className='map'>
                        <GMap lat={post.lat} lng={post.lng} />
                    </div> */}
            </div>
            {details}
        </section>
    )
}

export default PostsList
