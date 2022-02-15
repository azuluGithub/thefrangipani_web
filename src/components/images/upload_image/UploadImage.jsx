//packages
import { useState } from 'react';
import axios from 'axios';
import { FaCamera, FaTimes } from  "react-icons/fa";
import Resizer from "react-image-file-resizer";

//local packages
import './UploadImage.css';
const port = process.env.REACT_APP_BASE_URL;

const UploadImage = () => {
  
  //state of the images
  const [ image, setImage ] = useState(null);

  //get api key from browser
  const apiKey = window.sessionStorage.getItem("api-key");

  const config = {
    headers: { 
        'Authorization': apiKey ? `Bearer ${apiKey}` : ''
    },
  }
  
  //when file is selected
  const fileChangedHandler = e => {
    let fileInput = e.target.files[0];

    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          fileInput,
          640,
          640,
          "JPEG",
          100,
          0,
          (uri) => {
            axios.post(`${port}/uploadimage`, { image: uri }, config)
            .then((res) => setImage(res.data))
            .catch((error) => console.log(error))
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        //console.log(err);
      }
    }
  }

  const removeImageHandler = public_id => {
    axios.post(`${port}/removeimage`, { public_id }, config)
      .then((res) => setImage(null))
      .catch((error) => {
        //console.log(error)
      })
  }

  return (
      <div className="upload-image">
        { 
          image ?
          <div className="uploaded-image-box" key={image.public_id}>
            <div className="cancel-uploaded-image-box">
              <FaTimes className="cancel-uploaded-image-icon"
                onClick={() => removeImageHandler(image.public_id)}
              />
            </div>
            <img 
              className='uploaded-image'
              src={image.url}
              alt='img'
            />
          </div> : <div></div>
        }
        <div className="upload-image-button">
          <label className="upload-image-label" htmlFor="upload-image_upload">
            <FaCamera />
            <span className="upload-image-label-text">{" Click to choose photo "}</span>
            <input
              style={{display:"none"}}
              id="upload-image_upload"
              type="file"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => fileChangedHandler(e)}
            />
          </label>
        </div>
      </div>
  )
}

export default UploadImage;