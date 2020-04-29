import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function displayHomepage() {
  return (
    <div className="container">
      <div className="card shadow mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://i.imgur.com/g16szXj.jpg?1"
              className="card-img"
              alt="Beth"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body card-shadow">
              <h4 className="card-title">
                Hi! I'm Beth, a Full Stack Developer{" "}
                <span role="img" aria-label="wave">
                  👋🏽
                </span>
              </h4>
              <p className="card-text">
                Feel free to dive into my <Link to="/profile">Profile</Link>,
                you can read a bit about me and see some of my projects.
              </p>
              <p className="card-text">
                Or here you can visit my <Link to="/blog">Blog</Link>. It's
                great to meet you!
              </p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
              <img
                className="plant"
                src="https://i.imgur.com/gFMFPSs.png"
                alt="plant"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default displayHomepage;
