import { Avatar } from "@mui/material";
import React from "react";
import "./StoryReels.css";

const StoryReels = () => {
  return (
    <div className="storyReel">
      <div
        className="story"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80")`,
        }}
      >
        <Avatar src="https://plus.unsplash.com/premium_photo-1667511131806-5907723694fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <h4>Kewain</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZ74ch_5Ge7rc0wSMzK2pSWVIiaGnHspylg&usqp=CAU")`,
        }}
      >
        <Avatar src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        <h4>Micky</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")`,
        }}
      >
        <Avatar src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyJTIwYm95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <h4>Dani</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
        }}
      >
        <Avatar src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        <h4>John</h4>
      </div>
      <div
        className="story"
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDqLBOwlO5AraYBxEaUaUu647BMnUm2Bs0l6IXviGSY-ZI8eCE7SVjIGZPOlpqMc974w&usqp=CAU")`,
        }}
      >
        <Avatar src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&w=1000&q=80" />
        <h4>Harry</h4>
      </div>
    </div>
  );
};

export default StoryReels;
