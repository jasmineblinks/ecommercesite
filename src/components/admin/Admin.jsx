import React, { useState } from "react";
import "./admin.css";

import { AdvancedVideo } from "@cloudinary/react";
import { AdvancedImage } from "@cloudinary/react";

import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const Admin = () => {
  const [file, setFile] = useState(null);
  const [videoSrc, setVideoSrc] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [transformState, setTransformState] = useState({
    width: 60,
    height: 60,
  });
  const [cldCloudName, setCldCloudName] = useState("");

  const [loading, setLoading] = useState(false);
  const [preset, setPreset] = useState("");

  const handleCloudName = (e) => {
    setCldCloudName(e.target.value);
  };
  const handlePresetName = (e) => {
    setPreset(e.target.value);
  };

  const onChange = (e) => {
    setTransformState({
      ...transformState,
      [e.target.name]: e.target.value,
    });
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: "pueneh",
    },
  });

  const handleEventChange = (e) => {
    const read = e.target.files[0];
    setFile(read);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);
    setLoading(true);
    fetch(`https://api.cloudinary.com/v1_1/${cldCloudName}/upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((res) => {
        console.log(res);
        setVideoSrc(res.secure_url);
        // setVideoSrc(res.public_id);
        setImageSrc(res.public_id);
        setTransformState((prev) => ({
          ...prev,
          height: res.height,
          width: res.width,
        }));

        setLoading(false);
      })
      .then(handleErrors);
  };

  return (
    <div className={"header-banner"}>
      <div className={"banner-content-wrapper"}>
        <section className={"banner-content"}>
          <div className={"banner-input"}>
            <div>
              <label htmlFor="">Cloud Name:</label>
              <input
                onChange={handleCloudName}
                type="text"
                value={cldCloudName}
                name="cloudname"
              />

              <label htmlFor="">Upload Preset:</label>
              <input
                onChange={handlePresetName}
                type="text"
                value={preset}
                name="preset"
              />
            </div>

            <div>
              <label htmlFor="">width:</label>
              <input
                onChange={onChange}
                type="text"
                value={transformState.width}
                name="width"
              />
              <label htmlFor="">height:</label>
              <input
                onChange={onChange}
                type="text"
                value={transformState.height}
                name="height"
              />
            </div>
          </div>
        </section>
        <div className={"user-img-wrapper"}>
          <div className={"upload-video"}>
            <h3 style={{ marginTop: "20px" }}>Upload To Cloudinary</h3>
            <div className={"upload"}>
              <input
                type="file"
                name="file"
                id=""
                onChange={handleEventChange}
              />
              <button
                onClick={handleSubmit}
                disabled={(!cldCloudName, !preset)}>
                Upload
              </button>
            </div>
          </div>

          <div>
            {loading && <p>Loading...</p>}
            {videoSrc ? (
              <AdvancedVideo
                // src={}
                cldVid={cld
                  .video(videoSrc)
                  .resize(
                    fill(transformState.fill)
                      .width(transformState.width)
                      .height(transformState.height)
                  )}
                controls
              />
            ) : (
              // <div>{secure_url}</div>
              <AdvancedImage
                cldImg={cld
                  .image(imageSrc)
                  .resize(
                    fill(transformState.fill)
                      .width(transformState.width)
                      .height(transformState.height)
                  )}
              />
            )}
            {/* {videoSrc ? (
              <AdvancedVideo
                // src={}
                cldVid={cld
                  .video(videoSrc)
                  .resize(
                    fill(transformState.fill)
                      .width(transformState.width)
                      .height(transformState.height)
                  )}
                controls
              />
            ) : (
              <AdvancedImage
                cldImg={cld
                  .image(imageSrc)
                  .resize(
                    fill(transformState.fill)
                      .width(transformState.width)
                      .height(transformState.height)
                  )}
              />
            )} */}
          </div>

          {/* <button onClick={() => myVideo}>Transform</button> */}
        </div>
      </div>
    </div>
  );
};
export default Admin;
