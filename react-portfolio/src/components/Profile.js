import React from "react";
import "./styling/Profile.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function DisplayProfile(props) {
  return (
    <div className="container-profile">
      <div className="row">
        <div className="profile col-lg-4 col-md-6 col-sm-12">
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
          <Modal resume={"https://i.imgur.com/E4cqlck.png"} />
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

          <div className="email">
            <span role="img" aria-label="email">
              ✉️:
            </span>
            bethcollinsliv92@gmail.com
          </div>
        </div>
        <div className="profile-background col-lg-8 col-md-6"></div>
      </div>
    </div>
  );
}
