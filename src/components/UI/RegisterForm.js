import React from "react";
import Modal from "./Modal";

const RegisterForm = (props) => {
  return (
    <Modal>
      RegisterForm
      <button onClick={props.modalClose}>Close</button>
    </Modal>
  );
};

export default RegisterForm;
