import React, { useState } from "react";
import Modal from "./Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [errMsg, setErrMsg] = useState("");
  const inputBox = document.querySelectorAll(".form_login .input_box input");
  let data = {};

  const typing = () => {
    setErrMsg("");
  };

  const login = (e) => {
    e.preventDefault();

    inputBox.forEach((input) => {
      data[input.id] = input.value;
      input.value = "";
    });
    loginOn(data);
  };

  const loginOn = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (user) {
        props.modalClose();
      }
    } catch (err) {
      setErrMsg(err.message.split(":"));
    }
  };

  return (
    <Modal>
      <form className="form_login" onSubmit={login}>
        <h2>Login</h2>
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
        <div className="btn_box">
          <button>Login</button>
          <button onClick={props.modalClose}>Close</button>
        </div>
        {errMsg && <p className="err_txt">{errMsg}</p>}
      </form>
    </Modal>
  );
};

export default LoginForm;
