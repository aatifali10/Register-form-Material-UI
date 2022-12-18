import React from "react";
import FriendsList from "./FriendsList";
import LeftSideBarOptions from "./LeftSideBarOptions";

const LeftSideBar = () => {
  return (
    <>
      <div className="Leftsidebar">
        <LeftSideBarOptions />
        <FriendsList />
      </div>
    </>
  );
};

export default LeftSideBar;
