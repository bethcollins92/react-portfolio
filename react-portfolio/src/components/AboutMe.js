import React from "react";
import "./styling/AboutMe.css";
import { Link } from "react-router-dom";
const data = require("../data.json");

function DisplayAboutMe() {
  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <Link id="back" className="link" to="/">
            Back
          </Link>
        </div>

        <div className="row">
          <div className="col-6">
            <div id="first-paragraph" className="card shadow">
              <div className="card-body">{data.aboutMe[0].paragraph1}</div>
              <div className="card-body">{data.aboutMe[0].paragraph2}</div>
              <div className="card-body">{data.aboutMe[0].paragraph3}</div>
              <div className="card-body">
                {" "}
                If you want to know more about my journey into tech, have a
                listen to my guest appearance on CodeOp's podcast!{" "}
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

          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}
export default DisplayAboutMe;
