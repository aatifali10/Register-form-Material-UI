import LeftSideBar from "./component/leftside/LeftSideBar";
import Feed from "./component/feed/Feed";
// import RightSidebar from "./component/rightsidebar/RightSidebar";

function App() {
  return (
    // <div className="App">
    <div
      className="app-body"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <LeftSideBar />
      <Feed />
      {/* <RightSidebar /> */}
    </div>
    // </div>
  );
}

export default App;
