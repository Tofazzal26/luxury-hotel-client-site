import { NavLink } from "react-router-dom";
import google from "../../../public/icon/google.png";
import github from "../../../public/icon/github.png";
import loginImg from "../../../public/login/login.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <div className="mt-[80px]">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  ">
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-4xl text-center font-bold leading-tight lg:text-5xl">
                Login
              </h2>
              <div className="">
                <h2 className="text-center font-semibold">
                  To keep connected with us please login with your personal
                  info.
                </h2>
              </div>
            </div>
            <img src={loginImg} alt="" className="" />
          </div>
          <div className="border">
            <form noValidate="" className="space-y-6 lg:p-8">
              <div>
                <label htmlFor="email" className="text-[15px] font-semibold">
                  Username or email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder=""
                  className="w-full p-3 border outline-none "
                />
              </div>
              <div>
                <label htmlFor="password" className="text-[15px] font-semibold">
                  Passwords
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full p-3 border outline-none  "
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-[16px] right-[16px]"
                  >
                    {showPassword ? (
                      <FaEye size={20} />
                    ) : (
                      <FaEyeSlash size={20} />
                    )}
                  </span>
                </div>
              </div>

              <div>
                <div className="text-center space-x-4">
                  <button>
                    <span className="font-semibold flex items-center gap-2 border p-2">
                      <img className="h-[30px]" src={google} alt="" />
                      Continue Google
                    </span>
                  </button>
                  <button>
                    <span className="font-semibold flex items-center gap-2 border p-2">
                      <img className="h-[30px]" src={github} alt="" />
                      Continue Github
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="Login"
                className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#94c341] text-white "
              >
                Login
              </button>
              <div>
                <h2 className="text-center font-semibold">
                  Do not Have An Account ?{" "}
                  <NavLink to="/register" className="text-[#94c341]">
                    Register
                  </NavLink>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
