import React from "react";
import { Avatar } from "@mui/material";
import image from "../../images/images2.jpg";

const FrinedsOnline = () => {
  return (
    <>
      <div className="widget-header">
        <div className="widget-headerleft">
          <h4>Online Friends</h4>
        </div>
      </div>
      <div className="widget-body">
        <div className="widget-bodyoptions">
          <Avatar src={image} />
          <h4>Jonson</h4>
        </div>
        <div className="widget-bodyoptions">
          <Avatar src={image} />
          <h4>Deani</h4>
        </div>
        <div className="widget-bodyoptions">
          <Avatar src={image} />
          <h4>Jespar</h4>
        </div>
        <div className="widget-bodyoptions">
          <Avatar src={image} />
          <h4>Warnar</h4>
        </div>
        <div className="widget-bodyoptions">
          <Avatar src={image} />
          <h4>Tom</h4>
        </div>
        <div className="widget-bodyoptions">
          <Avatar src={image} />
          <h4>John</h4>
        </div>
      </div>
    </>
  );
};

export default FrinedsOnline;
