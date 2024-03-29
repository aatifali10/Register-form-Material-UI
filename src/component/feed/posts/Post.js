import { Avatar } from "@mui/material";
import React from "react";
import "./post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

const Post = ({ photoURL, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post-top">
        <div className="post-topleft">
          <Avatar src={photoURL} />
          <div className="postInfo">
            <h4>{username}</h4>
            <p>
              {timestamp}
              <PublicIcon />
            </p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post-middle">
        <p>{message}</p>
        {image && (
          <img
            src="https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
        )}
      </div>
      <div className="post-bottom">
        <div className="post-bottomoptions">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post-bottomoptions">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post-bottomoptions">
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
