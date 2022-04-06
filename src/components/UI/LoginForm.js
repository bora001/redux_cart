import React from "react";
import Modal from "./Modal";
import "./LoginForm.css";

const LoginForm = (props) => {
  return (
    <Modal>
      <form className="form_login">
        <h2>Login</h2>
        <div className="input_box">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input_box">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="btn_box">
          <button>Login</button>
          <button onClick={props.modalClose}>Close</button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginForm;
