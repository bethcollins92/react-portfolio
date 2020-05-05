import React from "react";

export default function BlogCard(props) {
  return (
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title">{props.blogTitle}</h5>
        <p class="card-text">
          {props.blogText}
          <a href={props.link}>
            <img
              className="logo"
              src="https://i.imgur.com/Hbeg6jh.png"
              alt="Medium logo"
            ></img>
          </a>
        </p>
        <p class="card-text">
          <small class="text-muted">{props.date}</small>
        </p>
      </div>
      <img src={props.image} class="card-img-top" alt={props.alt}></img>
    </div>
  );
}
