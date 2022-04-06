import React, { useState, useRef } from "react";
import Modal from "./Modal";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./RegisterForm.css";

const RegisterForm = (props) => {
  const [errMsg, setErrMsg] = useState("");
  const inputBox = document.querySelectorAll(".input_box input");
  const ref = useRef();
  let data = {};

  const typing = () => {
    setErrMsg("");
  };

  const submitForm = (e) => {
    e.preventDefault();

    inputBox.forEach((input) => {
      data[input.id] = input.value;
      input.value = "";
    });

    if (data.password !== data.pwdCheck) {
      setErrMsg("Wrong password");
      return;
    }

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
      setErrMsg(err.message.split(":"));
    }
  };

  return (
    <Modal>
      <form className="form_register" onSubmit={submitForm} ref={ref}>
        <h2>Register</h2>
        <div className="input_box">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={typing} />
        </div>
        <div className="input_box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={typing}
          />
        </div>
        <div className="input_box">
          <label htmlFor="pwdCheck">Password Check</label>
          <input
            type="password"
            id="pwdCheck"
            name="pwdCheck"
            onChange={typing}
          />
        </div>
        <div className="btn_box">
          <button>Register</button>
          <button onClick={props.modalClose}>Close</button>
        </div>
        {errMsg && <p className="err_txt">{errMsg}</p>}
      </form>
    </Modal>
  );
};

export default RegisterForm;
