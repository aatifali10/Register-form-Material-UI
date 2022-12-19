import React from "react";
import "./rightSideBar.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import image from "../../images/images2.jpg";

const RightSidebar = () => {
  return (
    <div className="BirthdayPerson">
      <div className="birthday-notifiction">
        <CelebrationIcon style={{ fontSize: 50 }} />
        <h4>
          <span>Abdul Hadi</span> And <span>3 otherr friends</span> have a
          birthday today.
        </h4>
      </div>
      <div className="birthday-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default RightSidebar;
