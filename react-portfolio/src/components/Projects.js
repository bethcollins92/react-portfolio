import React from "react";
import "./styling/Projects.css";
import { Link } from "react-router-dom";
const data = require("../data.json");

function DisplayProjects() {
  return (
    <div>
      <img
        className="plant-header"
        src="https://i.imgur.com/nKXPhYu.jpg"
        alt="plant background"
      ></img>
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <h3 className="mb-5 mt-3">
              My Projects{" "}
              <span role="img" aria-label="pencil">
                ✏️
              </span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div class="card shadow">
              <img
                src="https://i.imgur.com/zef1QZk.png"
                class="card-img-top"
                alt="feel better in 5"
              ></img>
              <div class="card-body">
                <p class="card-text">
                  {data.projects[0].project1}
                  <a className="link" href="https://youtu.be/PQoG8CfdNBA">
                    <img
                      className="logo"
                      src="https://i.imgur.com/Xk5b9ua.png"
                      alt="youtube"
                    ></img>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div class="card shadow">
              <img
                src="https://i.imgur.com/z5zFzOx.png"
                class="card-img-top"
                alt="eco-warriors"
              ></img>
              <div class="card-body">
                <p class="card-text">{data.projects[0].project2}</p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <Link id="back" className="link" to="/">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DisplayProjects;
