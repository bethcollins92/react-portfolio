import React from "react";
import "./styling/Profile.css";

function displayProfile() {
  return (
    <div className="container">
      <div className="row">
        <div id="col1" className="col-4">
          <div>
            <img
              className="circular--square"
              src="https://i.imgur.com/Y0cbrLW.jpg"
              alt="portrait"
            ></img>
          </div>
          <br></br>
          <p>About me</p>
          <p>Resume</p>
          <p>Projects</p>
          <p>Blog</p>
        </div>
        <div className="col-8"></div>
      </div>
    </div>
  );
}
export default displayProfile;
