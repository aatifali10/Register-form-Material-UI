import { Avatar } from "@mui/material";
import React from "react";
import "./storyreel.css";

const StoryReels = () => {
  return (
    <div className="storyReel">
      <div
        className="story"
        style={{
          backgroundImage: `url("https://i.pinimg.com/736x/1f/4e/f8/1f4ef82e452d6d3c29c5869b425333a6.jpg")`,
        }}
      >
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrccHHFIkFQ19xnGdkQSaMzm4i3t42UlH0jj2jrR1VRxZPknimoh54VMLYOMvn_y7uUg&usqp=CAU" />
        <h4>Aatif Ali</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg")`,
        }}
      >
        <Avatar />
        <h4>Daniyal Manzoor</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url("https://i.pinimg.com/236x/cc/e0/78/cce078329ede2e53f7dde2d205e93c79.jpg")`,
        }}
      >
        <Avatar />
        <h4>Zohaib Awan</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url("https://i.pinimg.com/550x/94/fb/9e/94fb9e94f0db7e3d429df2d9c64527d2.jpg")`,
        }}
      >
        <Avatar />
        <h4>Aqib Ali</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20210101/pngtree-double-row-tree-path-with-yellow-deciduous-autumn-leaves-image_519106.jpg")`,
        }}
      >
        <Avatar />
        <h4>Ali Shair</h4>
      </div>
    </div>
  );
};

export default StoryReels;
