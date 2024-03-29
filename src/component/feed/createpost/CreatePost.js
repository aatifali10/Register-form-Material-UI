import { Avatar, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import image from "../../../images/images2.jpg";
import "./post.css";
import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CreatePost = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal-pop">
          <form>
            <div className="modalHeading">
              <h3>Create Post</h3>
              <IconButton onClick={handleOpen}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="modalHeader-top">
              <Avatar src={image} />
              <h5>Dean</h5>
            </div>
            <div className="modalbody">
              <textarea
                rows="5"
                placeholder="What's on your mind Dean ? "
              ></textarea>
            </div>
            <div className="modalfooter">
              <div className="modalFooterleft">
                <h4>Add to your post</h4>
              </div>
              <div className="modalFooterRight">
                <IconButton>
                  <PhotoLibraryIcon
                    fontSize="large"
                    style={{ color: "lightgreen" }}
                  />
                </IconButton>
                <IconButton>
                  <VideoCallIcon fontSize="large" style={{ color: "red" }} />
                </IconButton>
                <IconButton>
                  <EmojiEmotionsIcon
                    fontSize="large"
                    style={{ color: "#ffb100" }}
                  />
                </IconButton>
              </div>
            </div>
            <input type="submit" className="post-submit" value="Post" />
          </form>
        </div>
      </Modal>

      <div className="messagesender" onClose={handleClose}>
        <div className="messgaesender-top">
          <Avatar src="https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
          <form>
            <input
              type="text"
              placeholder="What's on your mind ?"
              onClick={handleOpen}
            />
          </form>
        </div>
        <div className="messagesender-bottom">
          <div className="messanger-options">
            <InsertPhotoIcon
              style={{ color: "lightgreen" }}
              fontSize="medium"
            />
            <p>Photo/Video</p>
          </div>
          <div className="messanger-options">
            <LabelIcon style={{ color: "blue" }} fontSize="medium" />
            <p>Tag</p>
          </div>
          <div className="messanger-options">
            <LocationOnIcon style={{ color: "green" }} fontSize="medium" />
            <p>Location</p>
          </div>
          <div className="messanger-options">
            <EmojiEmotionsIcon style={{ color: "#ffb100" }} fontSize="medium" />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
