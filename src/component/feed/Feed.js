import React from "react";
import Post from "./posts/Post";
import "./feed.css";
import MessageSender from "./message/MessageSender";
import StoryReels from "./StoryReels";
// import { collection, onSnapshot, docs } from "firebase/firestore";
// import { db } from "../../firebase";

const Feed = () => {
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   collection(db, "posts");
  //   console.log("hello", post).onSnapshot((snp) => {
  //     setPost(snp.docs.data);
  //   });
  // }, []);

  return (
    <div className="feed">
      <StoryReels />
      <MessageSender />

      <Post
        photoURL="https://c.cricketpakistan.com.pk/images/posts/cover_1659680618WhatsApp-Image-2022-08-05-at-11.23.22-AM.jpeg"
        image="https://cricfolks.com/wp-content/uploads/2022/08/Ahmed-Shehzad-gets-a-leading-role-in-KPL-2.jpg"
        username="Aatif Ali"
        timestamp="12:40 PM"
        message="This is test message"
      />
    </div>
  );
};
export default Feed;
