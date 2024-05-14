import { NavLink } from "react-router-dom";
import logo from "../../../public/logo/logo.png";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Navbar = () => {
  const allAuth = useAuthUser();

  const { user, logOut } = allAuth;

  const { displayName, photoURL } = user || {};

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

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
    <div className="w-full top-0 fixed z-50 shadow-navBar">
      <div className="bg-[#ffffff]">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <NavLink to="/">
              {" "}
              <a className="btn btn-ghost text-xl">
                <img
                  className="h-[30px] lg:h-[45px] lg:block hidden"
                  src={logo}
                  alt=""
                />{" "}
                <h2 className="font-bold lg:block hidden">Luxury hotel</h2>
              </a>
            </NavLink>
          </div>

          <div className="mr-[30px] lg:flex-1">
            <ul className="flex lg:gap-4 gap-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#ffae4c]" : "text-[#363f4d]"
                }
                to="/"
              >
                <li className="font-bold lg:text-base text-[10px]">Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#ffae4c]" : "text-[#363f4d]"
                }
                to="/rooms"
              >
                <li className="font-bold lg:text-base text-[10px]">Rooms</li>
              </NavLink>

              {user && (
                <>
                  {/* <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#ffae4c]" : "text-[#363f4d]"
                    }
                    to="/addFood"
                  >
                    <li className="font-bold  lg:text-base text-[10px]">
                      Add Food
                    </li>
                  </NavLink> */}{" "}
                  <NavLink
                    to="/myBooking"
                    className={({ isActive }) =>
                      isActive ? "text-[#ffae4c]" : "text-[#363f4d]"
                    }
                  >
                    <li className="font-bold lg:text-base text-[10px]">
                      My Bookings
                    </li>
                  </NavLink>
                </>
              )}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#ffae4c]" : "text-[#363f4d]"
                }
                to="/contact"
              >
                <li className="font-bold lg:text-base text-[10px]">Contact</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#ffae4c]" : "text-[#363f4d]"
                }
                to="/about"
              >
                <li className="font-bold lg:text-base text-[10px]">About</li>
              </NavLink>
            </ul>
          </div>

          <div className="flex-none">
            <label className="cursor-pointer lg:px-4 grid place-items-center">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <div>
              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-12 rounded-full border-[3px] p-[2px] border-[#ffae4c]">
                      <img className="rounded-full" alt="" src={photoURL} />
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
                  <button className="bg-[#ffae4c] text-white lg:px-6 lg:py-2 px-3 py-2 text-[12px] lg:text-base rounded-md font-semibold">
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
