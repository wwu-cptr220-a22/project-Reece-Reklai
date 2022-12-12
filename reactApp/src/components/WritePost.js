import React, { Component } from 'react' // import React Component

class CreatePost extends Component {
    token = sessionStorage.getItem('Auth Token')
    handlePost = () => {

    }

    render() {
        return (
            <div id='maincontent-dark'>
                <div className='flex-about'>
                    <div className='post-form'>
                        <div className='flex-item'>
                            <label className='label-text' htmlFor='picture'><b>Picture</b></label>
                            <input className='text-input' name='picture' type='file'/>
                            <label className='label-text' htmlFor='price'><b>Price</b></label>
                            <input className='text-input' placeholder='$0.00' name='price' required />
                            <label className='label-text' htmlFor='latitude'><b>Latitude</b></label>
                            <input className='text-input' placeholder='7.53644' name='latitude' required />
                            <label className='label-text' htmlFor='longitude'><b>Longitude</b></label>
                            <input className='text-input' placeholder='134.58159' name='longitude' required />
                            <label className='label-text' htmlFor='details'><b>Listing details</b></label>
                            <textarea id='details-input' name='details' rows='10' cols='30' />
                            <button id='post-button' type='submit' onClick={this.handlePost}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost
