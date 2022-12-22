import React from "react";
import { Avatar } from "@mui/material";
import image from "../../images/images2.jpg";

const FriendsList = ({ src, Icon, title }) => {
  return (
    <div className="friends">
      <h1> Friends list </h1>
      <div className="modalHeader-top">
        <Avatar src={image} />
        <h5>Dean jons</h5>
      </div>
      <div className="modalHeader-top">
        <Avatar src={image} />
        <h5>Finch</h5>
      </div>
      <div className="modalHeader-top">
        <Avatar src={image} />
        <h5>Tim Divid</h5>
      </div>
      <div className="modalHeader-top">
        <Avatar src={image} />
        <h5>Mickal</h5>
      </div>
      <div className="modalHeader-top">
        <Avatar src={image} />
        <h5>Deani</h5>
      </div>
      <div className="modalHeader-top">
        <Avatar src={image} />
        <h5>Harry Broke</h5>
      </div>
      <div className="modalHeader-top">
        <Avatar src={image} />
        <h5>Tom </h5>
      </div>
      <div className="modalHeader-top">
        <Avatar src={image} />
        <h5>Harry</h5>
      </div>
      <div className="modalHeader-top">
        <Avatar src={image} />
        <h5>Cherry</h5>
      </div>
    </div>
  );
};

export default FriendsList;
