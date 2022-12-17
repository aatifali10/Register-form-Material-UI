import { Avatar, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import Afridi from "../../../images/Shahid.jpg";
import "./message.css";
import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

const MessageSender = () => {
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
              <Avatar src={Afridi} />
              <h5>Aatif Ali</h5>
            </div>
            <div className="modalbody">
              <textarea
                rows="5"
                placeholder="What's on your mind Aatif Ali ? "
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
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrccHHFIkFQ19xnGdkQSaMzm4i3t42UlH0jj2jrR1VRxZPknimoh54VMLYOMvn_y7uUg&usqp=CAU" />
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
            <VideoCallIcon style={{ color: "red" }} fontSize="large" />
            <p>Live video</p>
          </div>
          <div className="messanger-options">
            <InsertPhotoIcon style={{ color: "lightgreen" }} fontSize="large" />
            <p>Photo/Video</p>
          </div>
          <div className="messanger-options">
            <EmojiEmotionsIcon style={{ color: "#ffb100" }} fontSize="large" />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSender;
