import LoginForm from "./LoginForm";
import { createBrowserRouter, Link } from "react-router-dom";

const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Link to="loginform">Login</Link>
      </div>
    ),
  },
  {
    path: "loginform",
    element: <LoginForm />,
  },
]);

export default App;
