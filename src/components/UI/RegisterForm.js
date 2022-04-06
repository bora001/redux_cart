import React, { useState, useRef } from "react";
import Modal from "./Modal";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./RegisterForm.css";

const RegisterForm = (props) => {
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const ref = useRef();

  const getData = (e) => {
    e.target.name == "email" && setEmail(e.target.value);
    e.target.name == "password" && setPassword(e.target.value);
    e.target.name == "pwdCheck" && setPwdCheck(e.target.value);
  };

  const focusOn = () => {
    setErrMsg("");
  };

  const register = async (e) => {
    e.preventDefault();

    if (password !== pwdCheck) {
      setErrMsg("Wrong password");
      ref.current.reset();
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        props.modalClose();
      }
      console.log(user, "user");
    } catch (err) {
      ref.current.reset();
      setErrMsg(err.message.split(":")[1]);
    }
  };

  return (
    <Modal>
      <form
        className="form_register"
        onSubmit={register}
        onFocus={focusOn}
        ref={ref}
      >
        <h2>Register</h2>
        <div className="input_box">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={getData}
            autoComplete="email"
          />
        </div>
        <div className="input_box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={getData}
            autoComplete="new-password"
          />
        </div>
        <div className="input_box">
          <label htmlFor="pwdCheck">Password Check</label>
          <input
            type="password"
            id="pwdCheck"
            name="pwdCheck"
            onChange={getData}
            autoComplete="new-password"
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
