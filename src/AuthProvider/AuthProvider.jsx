import { createContext, useContext, useEffect, useState } from "react";
import auth from "./../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notLoading, setNotLoading] = useState(true);
  const [profileLoad, setProfileLoad] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const logged = currentUser?.email || user?.email;
      setUser(currentUser);
      if (currentUser) {
        axios
          .post(
            `http://localhost:4000/jwt`,
            { logged },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post(
            `http://localhost:4000/logout`,
            { logged },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
      setNotLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [profileLoad, user?.email]);

  const createUser = (email, password) => {
    setNotLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInEmailPassword = (email, password) => {
    setNotLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const logOut = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    createUser,
    logInEmailPassword,
    updateUserProfile,
    setProfileLoad,
    setNotLoading,
    logOut,
    notLoading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
