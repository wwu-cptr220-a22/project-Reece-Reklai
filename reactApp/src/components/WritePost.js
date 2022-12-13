import React, { Component } from 'react' // import React Component
// import {database} from 'firebase'

class CreatePost extends Component {
    token = sessionStorage.getItem('Auth Token')
    handlePost = (e) => {
        e.preventDefault();
        this.props.handleAction()
    }
    // if time https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/
    render() {
        return (
            <div id='maincontent-dark'>
                <div className='flex-about'>
                    <form className='post-form' onSubmit={this.handlePost}>
                        <div className='flex-item'>
                            <label className='label-text' htmlFor='picture'><b>Picture</b></label>
                            <input className='text-input' placeholder='www.picture.com' name='picture' type='text' onChange={(e) => this.props.setImage(e.target.value)} />
                            <label className='label-text' htmlFor='price'><b>Price</b></label>
                            <input className='text-input' placeholder='$0.00' name='price' required onChange={(e) => this.props.setPrice(e.target.value)} />
                            <label className='label-text' htmlFor='address'><b>Address</b></label>
                            <input className='text-input' placeholder='address' name='address' required onChange={(e) => this.props.setAddress(e.target.value)} />
                            <label className='label-text' htmlFor='latitude'><b>Latitude</b></label>
                            <input className='text-input' placeholder='7.53644' name='latitude' required onChange={(e) => this.props.setLatitude(e.target.value)} />
                            <label className='label-text' htmlFor='longitude'><b>Longitude</b></label>
                            <input className='text-input' placeholder='134.58159' name='longitude' required onChange={(e) => this.props.setLongitude(e.target.value)} />
                            <label className='label-text' htmlFor='details'><b>Listing details</b></label>
                            <textarea id='details-input' name='details' rows='10' cols='30' onChange={(e) => this.props.setDetails(e.target.value)} />
                            <button id='post-button' type='submit'>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePost
