import React from "react";
import "./styling/Projects.css";
import { Link } from "react-router-dom";
import Card from "./Card";
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
            <h3 className="mb-5 mt-5">
              My Projects{" "}
              <span role="img" aria-label="pencil">
                👩‍💻
              </span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Card
              image={"https://i.imgur.com/zef1QZk.png"}
              link={"https://youtu.be/PQoG8CfdNBA"}
              project={data.projects[0].project1}
              alt={"Feel better in 5"}
            />
          </div>

          <div className="col-md-6 col-sm-12">
            <Card
              image={"https://i.imgur.com/z5zFzOx.png"}
              link={"https://youtu.be/7luvYX2XGT8"}
              project={data.projects[0].project2}
              alt={"eco-warriors"}
            />
          </div>
        </div>
        <div className="back-projects">
          <Link className="link" to="/">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DisplayProjects;
