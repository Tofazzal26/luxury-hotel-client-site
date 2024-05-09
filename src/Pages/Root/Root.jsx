import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
