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

const SuperAdmin = () => {
  return (
    <div className={"header-banner"}>
      <div className={"banner-content-wrapper"}>
        <section className={"banner-content"}>
          <div className={"banner-input"}>
            <div>
              <label htmlFor="">Cloud Name:</label>
              <input type="text" name="cloudname" value="" />

              <label htmlFor="">Upload Preset:</label>
              <input type="text" name="preset" value="" />
            </div>

            <div>
              <label htmlFor="">width:</label>
              <input type="text" value="" name="width" />
              <label htmlFor="">height:</label>
              <input type="text" value="" name="height" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default SuperAdmin;
