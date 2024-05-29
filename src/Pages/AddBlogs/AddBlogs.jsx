import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddBlogs = () => {
  const allAuth = useAuthUser();

  const navigate = useNavigate();

  const { user } = allAuth;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = user?.displayName;
    const photo = data.photo;
    const title = data.title;
    const description = data.description;
    const country = data.country;
    const blog = { name, photo, title, description, country };

    axios.post("http://localhost:4000/blogs", blog).then((res) => {
      if (res.data.insertedId) {
        toast.success("Blog Upload Successful");
        reset();
        navigate("/blogs");
      }
    });
  };

  return (
    <div className="container mx-auto">
      <div className="min-h-[calc(100vh-332px)]">
        <div className="mt-[120px] mb-[60px]">
          <div className="border">
            <h1 className="text-center text-[40px] mt-12 font-semibold">
              Add Blog
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 lg:p-8"
            >
              <div>
                <label className="text-[15px] font-semibold">Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder=""
                  className="w-full p-3 border outline-none "
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-red-500">
                    This Name field is required
                  </span>
                )}
              </div>
              <div>
                <label className="text-[15px] font-semibold">Photo URL</label>
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
                <label className="text-[15px] font-semibold">
                  Select Country
                </label>
                <br />
                <select
                  {...register("country", { required: true })}
                  className="select select-bordered w-full font-semibold"
                >
                  <option className="font-semibold">Bangladesh</option>
                  <option className="font-semibold">Canada</option>
                  <option className="font-semibold">Germany</option>
                  <option className="font-semibold">Argentina</option>
                  <option className="font-semibold">Nigeria</option>
                </select>
              </div>
              <div>
                <label className="text-[15px] font-semibold">Description</label>
                <textarea
                  {...register("description", { required: true })}
                  className="textarea textarea-bordered w-full rounded-none h-[200px]"
                  placeholder=""
                ></textarea>

                {errors.description && (
                  <span className="text-red-500">
                    This Email field is required
                  </span>
                )}
              </div>

              <button className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#ffae4c] text-white ">
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
