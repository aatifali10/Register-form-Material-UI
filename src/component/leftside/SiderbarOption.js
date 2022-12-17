import { Avatar } from "@mui/material";
import React from "react";

const SiderbarOption = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
};

export default SiderbarOption;
