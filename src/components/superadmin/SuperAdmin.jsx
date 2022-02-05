import React, { useState } from "react";
import "./admin.css";

import { AdvancedVideo } from "@cloudinary/react";
import { AdvancedImage } from "@cloudinary/react";

import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useNavigate } from "react-router-dom";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const SuperAdmin = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [product,setProduct] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [isImageUploading, setIsImageUploading] = useState(false);
  const navigate = useNavigate()

  const handleImageUpload =  (e) => {
    const file = e.target.files[0];
    setIsImageUploading(true);
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "oqiie6dy");
    
    fetch("https://api.cloudinary.com/v1_1/pueneh/image/upload", {
      method: "POST",
      body: formData,
    })
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        setIsImageUploading(false);
        setFile("")
        setImage(data.secure_url);
      })
      .catch((error) => {
        setIsImageUploading(false);
        console.log(error)
      });
    
      
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3003/productData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        image,
        product,
        content,
        price,
      }),
    })
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        setTitle("");
        setImage("");
        setProduct("");
        setContent("");
        setPrice("");
        navigate("/")
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className={"header-banner"}>
      <div className={"banner-content-wrapper"}>
        <section className={"banner-content"}>
          <form className={"banner-input"} onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="">Image:</label>
              {image ? <input type="text" value={image} /> : !isImageUploading ? <input type="file" accept="image/*" value={file} onChange={handleImageUpload} /> :<p>uploading...</p>}

              <label htmlFor="">Title:</label>
              <input type="text"  value={title} onChange={({target}) => setTitle(target.value)} />
              <label htmlFor="">Price:</label>
              <input type="text" value={price} onChange={({target})=> setPrice(target.value)} />
            </div>

            <div>
              <label htmlFor="">Product:</label>
              <input type="text" value={product} onChange={({target})=> setProduct(target.value)} />
              <label htmlFor="">Content:</label>
              <input type="text" value={ content } onChange={ ({ target }) => setContent(target.value) } />
              <button type="submit" style={{height:"48px",padding:"0px 12px",display:"flex"}}>
                submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
export default SuperAdmin;
