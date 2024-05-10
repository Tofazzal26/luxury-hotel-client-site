import { NavLink, useLocation, useNavigate } from "react-router-dom";
import google from "../../../public/icon/google.png";
import github from "../../../public/icon/github.png";
import loginImg from "../../../public/login/login.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";
import toast from "react-hot-toast";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const allAuth = useAuthUser();

  const { logInEmailPassword, setNotLoading } = allAuth;
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    setNotLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("Google Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const githubLogin = () => {
    setNotLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        toast.success("Github Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    logInEmailPassword(email, password)
      .then((result) => {
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Please enter a valid email & password");
      });
  };

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 lg:p-8"
            >
              <div>
                <label className="text-[15px] font-semibold">
                  Username or email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  className="w-full p-3 border outline-none "
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">
                    This Email field is required
                  </span>
                )}
              </div>
              <div>
                <label className="text-[15px] font-semibold">Passwords</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full p-3 border outline-none  "
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">
                      This Password field is required
                    </span>
                  )}

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute cursor-pointer top-[16px] right-[16px]"
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
                    <span
                      onClick={googleLogin}
                      className="font-semibold flex items-center gap-2 border p-2"
                    >
                      <img className="h-[27px]" src={google} alt="" />
                      Continue Google
                    </span>
                  </button>
                  <button>
                    <span
                      onClick={githubLogin}
                      className="font-semibold flex items-center gap-2 border p-2"
                    >
                      <img className="h-[30px]" src={github} alt="" />
                      Continue Github
                    </span>
                  </button>
                </div>
              </div>

              <button className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#94c341] text-white ">
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
