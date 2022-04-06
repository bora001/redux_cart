import React from "react";
import Modal from "./Modal";
import "./RegisterForm.css";
const RegisterForm = (props) => {
  return (
    <Modal>
      <form className="form_register">
        <h2>Register</h2>
        <div className="input_box">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input_box">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="input_box">
          <label htmlFor="pwdCheck">Password Check</label>
          <input type="password" id="pwdCheck" name="pwdCheck" />
        </div>
        <div className="btn_box">
          <button>Register</button>
          <button onClick={props.modalClose}>Close</button>
        </div>
      </form>
    </Modal>
  );
};

export default RegisterForm;
