import LeftSideBar from "./component/leftside/LeftSideBar";
import Feed from "./component/feed/Post";
import RightSidebar from "./component/rightsidebar/RightSidebar";
import Header from "./component/header/Header";
// import LoginForm from "./pages/LoginForm";
// import { Routes } from "react-router";sss

function App() {
  return (
    <>
      <Header />
      {/* <LoginForm />s */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      <div
        className="app-body"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <LeftSideBar />
        <Feed />
        <RightSidebar />
      </div>
      {/* </Routes> */}
    </>
  );
}

export default App;
