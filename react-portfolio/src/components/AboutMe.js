import React from "react";
import "./styling/AboutMe.css";
import { Link } from "react-router-dom";
const data = require("../data.json");

function DisplayAboutMe() {
  return (
    <div>
      <div>
        <img
          className="plant-header"
          src="https://i.imgur.com/6Kw4SWq.jpg"
          alt="girl on a rock"
        ></img>
        <div className="container-about-me">
          <h3 className="title mb-5 mt-5">
            Hi!{" "}
            <span role="img" aria-label="hand waving">
              👋🏼
            </span>
          </h3>
          <div className="para mb-4">{data.aboutMe[0].paragraph1}</div>
          <div className="para mb-4">{data.aboutMe[0].paragraph2}</div>
          <div className="para mb-4">{data.aboutMe[0].paragraph3}</div>
          <div>
            {" "}
            If you want to know more about my journey into tech, have a listen
            to my guest appearance on CodeOp's podcast!{" "}
            <span role="img" aria-label="hand pointing right">
              👉
            </span>
            <a
              className="link"
              href="https://www.youtube.com/watch?v=zyZ9jhuqMvQ"
            >
              <img
                className="logo"
                src="https://i.imgur.com/Xk5b9ua.png"
                alt="youtube"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="back">
        <Link className="link" to="/">
          Back
        </Link>
      </div>
    </div>
  );
}
export default DisplayAboutMe;
