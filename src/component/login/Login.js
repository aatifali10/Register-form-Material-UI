import React from "react";
import "./login.css";
import facebook from "../../images/Facebook-logo.png";
import { auth, provider } from "../../firebase";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useStateValue } from "../../StateProvider";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = FacebookAuthProvider.credentialFromResult(result);

      const photoURL = `${result.user.photoURL}?access_token=${credential.accessToken}`;

      dispatch({
        type: "SET_USER",
        user: {
          displayName: result.user.displayName,
          photoURL: photoURL,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login">
        <img src={facebook} alt="" />
        <h2>Sign in with Facebook</h2>
        <button onClick={signIn}>Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
