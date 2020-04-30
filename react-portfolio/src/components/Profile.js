import React, { useState } from "react";
import "./styling/Profile.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function DisplayProfile(props) {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div>
            <img
              className="circular--square"
              src="https://i.imgur.com/Y0cbrLW.jpg"
              alt="portrait"
            ></img>
          </div>
          <br></br>
          <p>
            <Link className="link" to="/aboutme">
              About me
            </Link>
          </p>
          <p onClick={showModal}>Resume</p>
          <Modal showModal={isShowModal} handleClose={hideModal} />
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
