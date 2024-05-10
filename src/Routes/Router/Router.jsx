import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/Root/Root";
import Home from "../../Pages/Home/Home";
import Login from "./../../Pages/Login/Login";
import AvailableFoods from "./../../Pages/AvailableFoods/AvailableFoods";
import Register from "../../Pages/Register/Register";
import AddFood from "../../Pages/AddFood/AddFood";
import MyFoodRequest from "../../Pages/MyFoodRequest/MyFoodRequest";
import ManageMyFood from "../../Pages/ManageMyFood/ManageMyFood";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import NotFound from "../../Pages/NotFound/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
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
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyFood",
        element: (
          <PrivateRoute>
            <ManageMyFood />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
