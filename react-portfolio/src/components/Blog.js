import React from "react";
import { Link } from "react-router-dom";
import "./styling/Blog.css";
import BlogCard from "./BlogCard";
const data = require("../data.json");

function DisplayBlogs() {
  return (
    <div>
      <img
        className="plant-header"
        src="https://i.imgur.com/LOG8x2a.jpg"
        alt="plant background"
      ></img>
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <h3 className="mb-5 mt-3">
              My Blog{" "}
              <span role="img" aria-label="pencil">
                ✏️
              </span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <BlogCard
              blogTitle={data.blogs[0].blog1.title}
              blogText={data.blogs[0].blog1.body}
              image={data.blogs[0].blog1.image}
              link={
                "https://medium.com/@bethcollinsliv92/an-unlikely-career-change-ed2fe613cbee"
              }
            />
          </div>

          <div className="col-6">
            <BlogCard
              blogTitle={data.blogs[0].blog2.title}
              blogText={data.blogs[0].blog2.body}
              image={data.blogs[0].blog2.image}
            />
          </div>
        </div>

        <div className="row mt-5">
          <Link id="back" className="link" to="/">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DisplayBlogs;
