import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/Root/Root";
import Home from "../../Pages/Home/Home";
import Login from "./../../Pages/Login/Login";
import AvailableFoods from "./../../Pages/AvailableFoods/AvailableFoods";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/AvailableFoods",
        element: <AvailableFoods />,
      },
    ],
  },
]);

export default Router;
