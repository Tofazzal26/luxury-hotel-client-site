import { NavLink } from "react-router-dom";
import logo from "../../../public/logo/logo.png";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";
import toast from "react-hot-toast";

const Navbar = () => {
  const allAuth = useAuthUser();

  const { user, logOut } = allAuth;

  const { displayName, photoURL } = user || {};

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full top-0 fixed z-50 shadow-navBar py-2">
      <div className="bg-[#ffffff]">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <NavLink to="/">
              {" "}
              <a className="btn btn-ghost text-xl">
                <img className="h-[30px] lg:h-[45px]" src={logo} alt="" />{" "}
                <h2 className="font-bold lg:block hidden">Organic-Food</h2>
              </a>
            </NavLink>
          </div>

          <div className="mr-[30px] lg:flex-1">
            <ul className="flex gap-4">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#94c341]" : "text-[#363f4d]"
                }
                to="/"
              >
                <li className="font-bold lg:text-base text-[12px]">Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#94c341]" : "text-[#363f4d]"
                }
                to="/AvailableFoods"
              >
                <li className="font-bold  lg:text-base text-[12px]">
                  Available Foods
                </li>
              </NavLink>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#94c341]" : "text-[#363f4d]"
                  }
                  to="/addFood"
                >
                  <li className="font-bold  lg:text-base text-[12px]">
                    Add Food
                  </li>
                </NavLink>
              )}
            </ul>
          </div>

          <div className="flex-none">
            <div>
              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-12 rounded-full">
                      <img alt="" src={photoURL} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="font-semibold text-[16px]">{displayName}</a>
                    </li>

                    <li>
                      <a className="font-semibold text-[16px]">
                        <NavLink
                          to="/myFoodRequest"
                          className={({ isActive }) =>
                            isActive ? "text-[#94c341]" : "text-[#363f4d]"
                          }
                        >
                          My Food Request
                        </NavLink>
                      </a>
                    </li>
                    <li>
                      <a className="font-semibold text-[16px]">
                        {" "}
                        <NavLink
                          to="/manageMyFood"
                          className={({ isActive }) =>
                            isActive ? "text-[#94c341]" : "text-[#363f4d]"
                          }
                        >
                          Manage My Foods
                        </NavLink>
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="font-semibold text-[16px] text-red-500"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <NavLink to="/login">
                  <button className="bg-[#94c341] text-white lg:px-6 lg:py-2 px-3 py-2 text-[12px] lg:text-base rounded-md font-semibold">
                    Login
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
