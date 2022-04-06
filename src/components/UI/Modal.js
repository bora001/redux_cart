import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
const modalCtn = document.getElementById("modal");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className="modal_cnt">
            <div className="modal_box">{props.children}</div>
          </div>
        </>,
        modalCtn
      )}
    </>
  );
};

export default Modal;
