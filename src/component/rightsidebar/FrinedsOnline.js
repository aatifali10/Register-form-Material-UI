import React from "react";
import { Avatar } from "@mui/material";
import Afridi from "../../images/Shahid.jpg";

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
          <Avatar src={Afridi} />
          <h4>Daniyal Manzoor</h4>
        </div>
        <div className="widget-bodyoptions">
          <Avatar src={Afridi} />
          <h4>ALi shair</h4>
        </div>
        <div className="widget-bodyoptions">
          <Avatar src={Afridi} />
          <h4>Mohsin</h4>
        </div>
        <div className="widget-bodyoptions">
          <Avatar src={Afridi} />
          <h4>Aqib Ali</h4>
        </div>
        <div className="widget-bodyoptions">
          <Avatar src={Afridi} />
          <h4>Kashif ALi</h4>
        </div>
        <div className="widget-bodyoptions">
          <Avatar src={Afridi} />
          <h4>Waqar Hussain</h4>
        </div>
      </div>
    </>
  );
};

export default FrinedsOnline;
