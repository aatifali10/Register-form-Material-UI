import LeftSideBar from "./component/leftside/LeftSideBar";
// import Feed from "./component/feed/Feed";
// import RightSidebar from "./component/rightsidebar/RightSidebar";
import Header from "./component/header/Header";

function App() {
  return (
    <>
      <Header />
      <div
        className="app-body"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <LeftSideBar />
        {/* <Feed /> */}
        {/* <RightSidebar /> */}
      </div>
    </>
  );
}

export default App;
