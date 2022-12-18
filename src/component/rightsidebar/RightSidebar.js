import React from "react";
import BirthdayNotification from "./BirthdayNotification";
import FrinedsOnline from "./FrinedsOnline";

const RightSidebar = () => {
  return (
    <div className="rightsidebar">
      <BirthdayNotification />
      <FrinedsOnline />
    </div>
  );
};

export default RightSidebar;
