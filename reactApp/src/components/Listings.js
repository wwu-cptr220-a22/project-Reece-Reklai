// import React, { useEffect, useState } from 'react' // import React Component
// import WritePost from './WritePost'

const Listings = (props) => {

  const list = props.currentListings()
  return (
    <>
      <div id='body-container'>
        <main id='maincontent'>
          <div className='flex flex-list'>
            <h2>Buy</h2>
            {list}
          </div>
        </main>
      </div>
    </>
  )
}

export default Listings
