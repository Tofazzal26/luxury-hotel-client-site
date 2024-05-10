import React from "react";
import useAuthUser from "../UseHooks/AllAuth/useAuthUser";
import { Navigate, useLocation } from "react-router-dom";
import spinner from "../../public/icon/spinner.gif";

const PrivateRoute = ({ children }) => {
  const allAuth = useAuthUser();
  const { user, notLoading } = allAuth;

  const location = useLocation();

  if (notLoading) {
    return (
      <div className=" flex justify-center items-center my-[100px]">
        <img className="h-[300px]" src={spinner} alt="" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
