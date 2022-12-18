import React from "react";
import "./header.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Person2Icon from "@mui/icons-material/Person2";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";
import Shahid from "../../images/Shahid.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h2>Aatif Warraich</h2>
      </div>

      <div className="header-search">
        <SearchIcon />
        <input type="text" placeholder="Search Facebook" />
      </div>

      <div className="header-right">
        <div className="header-info">
          <h5>Homepage</h5>
          <h5>Timeline</h5>
        </div>
        <IconButton>
          <Person2Icon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar alt="Lala" src={Shahid} />
      </div>
    </div>
  );
};

export default Header;
