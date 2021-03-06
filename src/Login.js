import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    // google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__cont">
        <div className="login__logo">
          <img src="./Chat.png" alt="" />
        </div>
        <br />
        <br />

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
