import React from "react";
import "./header.css";
import facebook from "../../images/Facebook-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Avatar from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
import Afridi from "../../images/Shahid.jpg";
// import { useStateValue } from "../../StateProvider";

const Header = () => {
  // const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header-left">
        <img src={facebook} alt="Facebook logo" />
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header-middle">
        <div className="header-option header-option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header-option">
          <OndemandVideoIcon fontSize="large" />
        </div>
        <div className="header-option">
          <PeopleAltIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SportsEsportsIcon fontSize="large" />
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          <Avatar src={Afridi} />
          <h5>Aatif Ali</h5>
        </div>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
