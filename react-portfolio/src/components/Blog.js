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
            <h3 className="mb-5 mt-5">
              My Blog{" "}
              <span role="img" aria-label="pencil">
                ✏️
              </span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <BlogCard
              blogTitle={data.blogs[0].blog1.title}
              blogText={data.blogs[0].blog1.body}
              image={data.blogs[0].blog1.image}
              link={data.blogs[0].blog1.link}
            />
          </div>

          <div className="col-lg-6 col-sm-12">
            <BlogCard
              blogTitle={data.blogs[0].blog2.title}
              blogText={data.blogs[0].blog2.body}
              image={data.blogs[0].blog2.image}
              link={data.blogs[0].blog2.link}
            />
          </div>
        </div>

        <div className="back-blog">
          <Link className="link" to="/">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DisplayBlogs;
