import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/Root/Root";
import Home from "../../Pages/Home/Home";
import Login from "./../../Pages/Login/Login";
import AvailableFoods from "./../../Pages/AvailableFoods/AvailableFoods";
import Register from "../../Pages/Register/Register";
import AddFood from "../../Pages/AddFood/AddFood";
import MyFoodRequest from "../../Pages/MyFoodRequest/MyFoodRequest";
import ManageMyFood from "../../Pages/ManageMyFood/ManageMyFood";

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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/myFoodRequest",
        element: <MyFoodRequest />,
      },
      {
        path: "/manageMyFood",
        element: <ManageMyFood />,
      },
    ],
  },
]);

export default Router;
