import React, { useState } from 'react'
import './ImagePreview.css'

function ImagePreview() {
const [selectedImages, setSelectedImages] = useState([])

const handleChange = (e) => {
    // console.log(e.target.files);
    if (e.target.files) {
        const fileArray = Array.from(e.target.files).map((file)=> URL.createObjectURL(file))
        // console.log(fileArray);
        setSelectedImages((prevImages)=>prevImages.concat(fileArray))
        Array.from(e.target.files).map(
            (file)=>URL.revokeObjectURL(file)
        )
    }
}

const renderPhotos = (source) => {
    return source.map((photo) =>{
        return <img src={photo} key={photo} height="200" width="300"/>
    })
}
    return (
        <div className="app">
            <div className="heading">
                React Multiple Image Preview
            </div>
            <div>
                <input type="file" multiple id="file" onChange={handleChange}/>
                <div className="label-holder">
                    <label htmlFor="file" className="label">
                        <i className="fa fa-camera"/>
                    </label>
                </div>
                <div className="result d-flex flex-wrap">
                    {renderPhotos(selectedImages)}
                </div>
            </div>
        </div>
    )
}



{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}

export default ImagePreview
