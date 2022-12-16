import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <button className="login">Login </button>
    </form>
  );
};

export default LoginForm;
