import React from "react";

const Register = () => {
  return (
    <>
      <form className="conatiner">
        <div className="fields">
          <input type="text" name="name" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="information">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="text">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="submit">Submit Now</button>
      </form>
    </>
  );
};

export default Register;
