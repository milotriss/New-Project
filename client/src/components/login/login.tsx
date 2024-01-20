import React, { useState } from "react";
import "./login.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { TiLockClosedOutline } from "react-icons/ti";
import { TiLockOpenOutline } from "react-icons/ti";
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";

interface Props {
  offLogin: Function;
}
const Login = (props: Props): JSX.Element => {
  const [onSignUp, setOnSignUp] = useState<boolean>(false);
  const [lock, setLock] = useState<boolean>(false);

  return (
    <section onClick={() => props.offLogin()} className="loginOverlay">
      <div onClick={(e: any) => e.stopPropagation()} className="login">
        <div className={onSignUp ? "signIn" : "signIn activeLogin"}>
          <h1>Login</h1>
          <form className="signInEnters">
            <div className="signInEnter">
              <input placeholder=" " name="email" type="email" />
              <label className="labelSignIn" htmlFor="">
                Email
              </label>
            </div>
            <div className="signInEnter">
              <input placeholder=" " name="password" type="password" />
              <label className="labelSignIn" htmlFor="">
                Password
              </label>
            </div>
            <button>Create</button>
          </form>
          <h2>Login With</h2>
          <div className="signInBrand">
            <FaFacebook className="iconSignInBrand" />
            <FaInstagram className="iconSignInBrand" />
            <FaGoogle className="iconSignInBrand" />
          </div>
          <span onClick={() => setOnSignUp(true)} className="toSignUp">
            Register <IoArrowRedoOutline className="changeLogin"/>
          </span>
          <span onClick={() => props.offLogin()} className="existLogin">Exist</span>
        </div>
        <div className={onSignUp ? "signUp activeLogin" : "signUp"}>
          <h1>Register</h1>
          <div className="signUpEnters">
            <div className="signUpEnter">
              <input placeholder=" " name="name" type="text" />
              <label className="labelSignUp" htmlFor="">
                Full Name *
              </label>
            </div>
            <div className="signUpEnter">
              <input placeholder=" " name="email" type="email" />
              <label className="labelSignUp" htmlFor="">
                Email *
              </label>
            </div>
            <div className="signUpEnter">
              <input placeholder=" " name="password" type={!lock ? "password" : "text"} />
              <label className="labelSignUp" htmlFor="">
                Password *
              </label>
              {!lock ? (
                <TiLockClosedOutline
                  onClick={() => setLock(true)}
                  className="lockPass"
                />
              ) : (
                <TiLockOpenOutline
                  onClick={() => setLock(false)}
                  className="lockPass"
                />
              )}
            </div>
            <div className="signUpEnter">
              <input placeholder=" " name="confirm" type="password" />
              <label className="labelSignUp" htmlFor="">
                Confirm Password *
              </label>
            </div>
            <button
              onClick={() => {
                setOnSignUp(false);
              }}
            >
              Create
            </button>
          </div>
          <span onClick={() => setOnSignUp(false)} className="toSignIn">
            <IoArrowUndoOutline className="changeLogin" /> Login
          </span>
          <span onClick={() => props.offLogin()} className="existLogin">Exist</span>
        </div>
      </div>
    </section>
  );
};

export default Login;
