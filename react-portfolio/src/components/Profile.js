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
          <br></br>
          <p>
            <a href="https://www.linkedin.com/in/beth-collins-53299119b/">
              <img
                className="logo"
                src="https://i.imgur.com/v2nnzBd.png"
                alt="linked in logo"
              ></img>
            </a>
          </p>
          <p>
            <a href="https://github.com/bethcollins92">
              <img
                className="logo"
                src="https://i.imgur.com/I1EEvAE.png"
                alt="linked in logo"
              ></img>
            </a>
          </p>
          <br></br>
          <p>
            <h6 className="email">
              <span role="img" aria-label="wave">
                ✉️:
              </span>
              bethcollinsliv92@gmail.com
            </h6>
          </p>
        </div>
        <div className="col-8"></div>
      </div>
    </div>
  );
}
export default displayProfile;
