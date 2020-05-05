import React from "react";
import "./styling/Projects.css";
import { Link } from "react-router-dom";

function DisplayProjects() {
  return (
    <div>
      <img
        className="plant-header"
        src="https://i.imgur.com/E0vdYwA.jpg"
        alt="plant background"
      ></img>
      <div className="container">
        <div className="row">
          <Link id="back" className="link" to="/">
            Back
          </Link>
          <div className="row mt-5"></div>
        </div>
        <div>
          <h1>This is the Projects page</h1>
        </div>
      </div>
    </div>
  );
}
export default DisplayProjects;
