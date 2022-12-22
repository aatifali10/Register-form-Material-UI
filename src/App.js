import LeftSideBar from "./component/leftside/LeftSideBar";
import Feed from "./component/feed/Post";
import RightSidebar from "./component/rightsidebar/RightSidebar";
import Header from "./component/header/Header";
// import LoginForm from "./pages/LoginForm";
// import { Routes, Route } from "react-router";
// import RegisterForm from "./pages/RegisterForm";
// import { Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Routes>
        <LoginForm />
        <Route path="/RegisterForm" element={<RegisterForm />} />
      </Routes>
      <Link to="/"> */}
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
      {/* </Link> */}
    </>
  );
}

export default App;
