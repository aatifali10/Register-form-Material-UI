import React from "react";
import "./rightSideBar.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SearchIcon from "@mui/icons-material/Search";
import VideocamIcon from "@mui/icons-material/Videocam";
import Afridi from "../../images/Shahid.jpg";

const RightSidebar = () => {
  return (
    <div className="widget">
      <div className="widget-header">
        <div className="widget-headerleft">
          <h4>Your Pages</h4>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="widget-body">
        <div className="widget-bodyoptions">
          <Avatar src={Afridi} />
          <h4>Camel Coder</h4>
        </div>
      </div>

      <div className="widget-body">
        <div className="widget-bodyoptions">
          <NotificationsNoneIcon />
          <p>1 Notification</p>
        </div>
      </div>

      <div className="widget-body">
        <div className="widget-bodyoptions">
          <VolumeUpIcon />
          <p>Create Promotions</p>
        </div>
      </div>
      <hr />
      <br />
      <div className="widget-header">
        <div className="widget-headerleft">
          <h4>Contact</h4>
        </div>
        <div className="widget-headerright">
          <VideocamIcon />
          <SearchIcon />
          <MoreHorizIcon />
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
    </div>
  );
};

export default RightSidebar;
