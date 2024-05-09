import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const useAuthUser = () => {
  const allAuth = useContext(AuthContext);

  return allAuth;
};

export default useAuthUser;
