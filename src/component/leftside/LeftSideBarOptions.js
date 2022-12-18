import React from "react";
import "./leftsidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
const LeftSideBarOption = () => {
  return (
    <div className="right-side-bar-options">
      <li>
        <RssFeedIcon />
        <span>Feed</span>
      </li>
      <li>
        <ChatIcon />
        <span> Chats</span>
      </li>
      <li>
        <PlayCircleIcon /> <span>Videos</span>
      </li>
      <li>
        <GroupIcon /> <span>Groups</span>
      </li>
      <li>
        <BookmarkIcon /> <span>Bookmark</span>
      </li>
      <li>
        <HelpOutlineIcon /> <span>Questions</span>
      </li>
      <li>
        <WorkOutlineIcon /> <span>Jobs</span>
      </li>
      <li>
        <EventIcon /> <span>Events</span>
      </li>
      <li>
        <AutoStoriesIcon /> <span>Courses</span>
      </li>

      <button className="btn">Show More</button>
    </div>
  );
};

export default LeftSideBarOption;
