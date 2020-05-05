import React from "react";

export default function Card(props) {
  return (
    <div class="card shadow">
      <img src={props.image} class="card-img-top" alt={props.alt}></img>
      <div class="card-body">
        <p class="card-text">
          {props.project}
          <a className="link" href={props.link}>
            <img
              className="logo"
              src="https://i.imgur.com/Xk5b9ua.png"
              alt="youtube"
            ></img>
          </a>
        </p>
      </div>
    </div>
  );
}
