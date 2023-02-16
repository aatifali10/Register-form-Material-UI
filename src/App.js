import LeftSideBar from "./component/leftside/LeftSideBar";
import Feed from "./component/feed/Post";
import RightSidebar from "./component/rightsidebar/RightSidebar";
import Header from "./component/header/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <div
          className="app-body"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <LeftSideBar />
          <Feed />
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

export default App;
