import React, { useState, useRef } from "react";
import Modal from "./Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const ref = useRef();

  const getData = (e) => {
    e.target.name == "email" && setEmail(e.target.value);
    e.target.name == "password" && setPassword(e.target.value);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        props.modalClose();
        dispatch({ type: "UserLogin" });
      }
    } catch (err) {
      ref.current.reset();
      setErrMsg(err.message.split(":")[1]);
    }
  };

  const focusOn = () => {
    setErrMsg("");
  };

  return (
    <Modal>
      <form className="form_login" onSubmit={login} onFocus={focusOn} ref={ref}>
        <h2>Login</h2>
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
