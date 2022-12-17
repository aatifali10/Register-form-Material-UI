// import { Avatar } from "@mui/material";
import React from "react";
import "./leftsidebar.css";
import Friends from "../../images/Friends.png";
import groups from "../../images/groups.png";
import watch from "../../images/watch.png";
import Events from "../../images/Event.webp";
import SiderbarOption from "./SiderbarOption";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Shahid from "../../images/Shahid.jpg";
// import { useStateValue } from "../../StateProvider";
const LeftSideBar = () => {
  // const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SiderbarOption src={Shahid} title="Aatif Ali" />
      <SiderbarOption
        src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
        title="Covid 19 Information center"
      />
      <SiderbarOption src={Friends} title="Friends" />
      <SiderbarOption src={groups} title="Groups" />
      <SiderbarOption src={watch} title="Watch" />
      <SiderbarOption src={Events} title="Events" />
      <SiderbarOption Icon={ExpandMoreIcon} title="See More" />
    </div>
  );
};

export default LeftSideBar;
