import {
  FaLocationCrosshairs,
  FaLocationPin,
  FaLocationPinLock,
} from "react-icons/fa6";
import blogImg from "../../../public/Blogs/blogImg.jpg";
import { FaLocationArrow, FaLockOpen } from "react-icons/fa";
const BlogCard = ({ blog }) => {
  const { name, photo, title, description, country } = blog;

  return (
    <div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="font-semibold my-2 flex items-center gap-4">
        <FaLocationArrow className="text-gray-400" /> {country}{" "}
        <span className="text-[#ffae4c] border-l-2 ml-2 px-2">{name}</span>
      </p>
      <p className="font-semibold text-gray-500 leading-[32px]">
        {description}
      </p>
      <div className="mt-[40px] mb-[40px]">
        <img className="w-full" src={photo} alt="" />
      </div>
    </div>
  );
};

export default BlogCard;
