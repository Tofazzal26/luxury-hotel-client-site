import { MdKeyboardArrowRight } from "react-icons/md";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios
      .get("https://luxury-hotel-server-beryl.vercel.app/blogs")
      .then((res) => {
        setBlogData(res.data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="min-h-[calc(100vh-332px)]">
        <div className="mt-[80px]">
          <div className="my-20">
            <h1 className="text-center text-[40px] font-semibold">Blogs</h1>
            <p className="font-semibold text-center text-gray-500 text-lg mx-auto lg:w-[620px]">
              Read firsthand accounts and testimonials from guests who have
              experienced the magic of luxury hotel.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-3">
              {blogData.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
            <div className="col-span-1">
              <div className="my-4">
                <Link to="/addBlogs">
                  <button className="bg-[#ffae4c] font-semibold text-white px-4 py-2 rounded-md">
                    Add Blog
                  </button>
                </Link>
              </div>

              <div className="border-2 rounded-[5px]">
                <div className="p-4">
                  <h1 className="font-semibold text-xl mb-5">Categories</h1>
                  <ul className="space-y-4 cursor-pointer">
                    <li className="flex items-center font-semibold text-gray-500 gap-2">
                      <MdKeyboardArrowRight /> Color Schemes
                    </li>
                    <li className="flex items-center font-semibold text-gray-500 gap-2">
                      <MdKeyboardArrowRight /> Address & Map
                    </li>
                    <li className="flex items-center font-semibold text-gray-500 gap-2">
                      <MdKeyboardArrowRight /> Features
                    </li>
                    <li className="flex items-center font-semibold text-gray-500 gap-2">
                      <MdKeyboardArrowRight /> LifeStyle
                    </li>
                    <li className="flex items-center font-semibold text-gray-500 gap-2">
                      <MdKeyboardArrowRight /> Manage Listings
                    </li>
                    <li className="flex items-center font-semibold text-gray-500 gap-2">
                      <MdKeyboardArrowRight /> Reservation Request
                    </li>
                    <li className="flex items-center font-semibold text-gray-500 gap-2">
                      <MdKeyboardArrowRight /> Responsiveness
                    </li>
                    <li className="flex items-center font-semibold text-gray-500 gap-2">
                      <MdKeyboardArrowRight /> Search Results
                    </li>
                    <li className="flex items-center font-semibold text-gray-500 gap-2">
                      <MdKeyboardArrowRight /> Sliders
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-2 rounded-[5px] my-8">
                <div className="p-4">
                  <h1 className="font-semibold text-xl mb-5">Tags</h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <button className="bg-[#ebf0f7] font-semibold py-2 rounded-[5px] text-[#4f4d52]">
                      Activity
                    </button>
                    <button className="bg-[#ebf0f7] font-semibold py-2 rounded-[5px] text-[#4f4d52]">
                      Cars Recent
                    </button>
                    <button className="bg-[#ebf0f7] font-semibold py-2 rounded-[5px] text-[#4f4d52]">
                      City
                    </button>
                    <button className="bg-[#ebf0f7] font-semibold py-2 rounded-[5px] text-[#4f4d52]">
                      Destination
                    </button>
                    <button className="bg-[#ebf0f7] font-semibold py-2 rounded-[5px] text-[#4f4d52]">
                      Destination..
                    </button>
                    <button className="bg-[#ebf0f7] font-semibold py-2 rounded-[5px] text-[#4f4d52]">
                      Musuems
                    </button>
                    <button className="bg-[#ebf0f7] font-semibold py-2 rounded-[5px] text-[#4f4d52]">
                      Rental
                    </button>
                    <button className="bg-[#ebf0f7] font-semibold py-2 rounded-[5px] text-[#4f4d52]">
                      Tour
                    </button>
                    <button className="bg-[#ebf0f7] font-semibold py-2 rounded-[5px] text-[#4f4d52]">
                      Yatch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
