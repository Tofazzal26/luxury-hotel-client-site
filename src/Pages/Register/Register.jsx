import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import registerImg from "../../../public/login/register1.gif";
import { useForm } from "react-hook-form";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";
import toast from "react-hot-toast";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const allAuth = useAuthUser();

  const { createUser, updateUserProfile, setProfileLoad } = allAuth;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        updateUserProfile(name, photo)
          .then(() => {
            setProfileLoad(true);
            navigate(location?.state ? location.state : "/");
            toast.success("Register Successful");
          })
          .catch((error) => {
            // console.log(error);
          });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <div className="mt-[80px]">
        <div>
          <div className="mt-[80px]">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  ">
              <div className="flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-4xl text-center font-bold leading-tight lg:text-5xl">
                    Register
                  </h2>
                  <div className="">
                    <h2 className="text-center font-semibold">
                      To keep connected with us please register with your
                      personal info.
                    </h2>
                  </div>
                </div>
                <img src={registerImg} alt="" className="" />
              </div>
              <div className="border">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 lg:p-8"
                >
                  <div>
                    <label className="text-[15px] font-semibold">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder=""
                      className="w-full p-3 border outline-none "
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-500">
                        This Name field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-[15px] font-semibold">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder=""
                      className="w-full p-3 border outline-none "
                      {...register("photo", { required: true })}
                    />
                    {errors.photo && (
                      <span className="text-red-500">
                        This Photo field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-[15px] font-semibold">Email</label>
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
                    <label className="text-[15px] font-semibold">
                      Passwords
                    </label>
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
                        className="absolute top-[16px] cursor-pointer right-[16px]"
                      >
                        {showPassword ? (
                          <FaEye size={20} />
                        ) : (
                          <FaEyeSlash size={20} />
                        )}
                      </span>
                    </div>
                  </div>

                  <button className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#ffae4c] text-white ">
                    Register
                  </button>
                  <div>
                    <h2 className="text-center font-semibold">
                      Already have an account ?{" "}
                      <NavLink to="/login" className="text-[#ffae4c]">
                        Login
                      </NavLink>
                    </h2>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
