import React, { useState } from "react";
import "./styling/Profile.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function DisplayProfile(props) {
  const [resumeUrl, setResumeUrl] = useState("https://i.imgur.com/E4cqlck.png");
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div>
            <img
              className="circular--square"
              src="https://i.imgur.com/FnLCjGL.jpg"
              alt="portrait"
            ></img>
          </div>
          <br></br>
          <p>
            <Link className="link" to="/aboutme">
              About me
            </Link>
          </p>
          <p
            className="resume"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            Resume
          </p>
          <Modal resume={resumeUrl} />
          <p>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </p>
          <p>
            <Link className="link" to="/blog">
              Blog
            </Link>
          </p>
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

          <h6 className="email">
            <span role="img" aria-label="wave">
              ✉️:
            </span>
            bethcollinsliv92@gmail.com
          </h6>
        </div>
        <div className="col-8"></div>
      </div>
    </div>
  );
}
