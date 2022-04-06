import React from "react";
import Modal from "./Modal";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./RegisterForm.css";
import { firebaseUrl } from "../../dev";

const RegisterForm = (props) => {
  let data = {};
  const submitForm = (e) => {
    e.preventDefault();
    const inputBox = document.querySelectorAll(".input_box input");

    inputBox.forEach((input) => {
      data[input.id] = input.value;
    });

    postData(data);
  };

  const postData = async (data) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (user) {
        props.modalClose();
      }
      console.log(user, "user");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Modal>
      <form className="form_register" onSubmit={submitForm}>
        <h2>Register</h2>
        <div className="input_box">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
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
