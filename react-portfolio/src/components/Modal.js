import React from "react";
import "./styling/Modal.css";

export default function Modal(props) {
  const showHideClassName = props.showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">{props.children}</section>
      <div></div>
      <button id="close-modal" onClick={props.handleClose}>
        close
      </button>
    </div>
  );
}
