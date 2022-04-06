import React from "react";
import Modal from "./Modal";

const LoginForm = (props) => {
  return (
    <Modal>
      LoginForm;
      <button onClick={props.modalClose}>Close</button>
    </Modal>
  );
};

export default LoginForm;
