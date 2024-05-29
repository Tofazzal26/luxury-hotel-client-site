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
import Rooms from "../../Pages/Rooms/Rooms";
import MyBooking from "../../Pages/MyBooking/MyBooking";
import RoomsDetails from "../../Pages/RoomsDetails/RoomsDetails";
import Contact from "../../Pages/Contact/Contact";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import AddBlogs from "../../Pages/AddBlogs/AddBlogs";

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
        path: "/myBooking",
        element: (
          <PrivateRoute>
            <MyBooking />
          </PrivateRoute>
        ),
      },

      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/addBlogs",
        element: <AddBlogs />,
      },
      {
        path: "/roomsDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://luxury-hotel-server-beryl.vercel.app/roomDetails/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <RoomsDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default Router;
