import { NavLink } from "react-router-dom";
import notFound from "../../../public/icon/notFound.gif";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col space-y-4">
        <img className="h-[500px]" src={notFound} alt="" />
        <h1 className="text-5xl font-semibold">Page Not Found</h1>
        <p className="text-lg font-semibold">
          Please check the address and try again
        </p>
        <NavLink to="/">
          <button className="px-6 py-3 bg-[#79a100] text-white text-xl font-semibold rounded-md">
            Go Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
