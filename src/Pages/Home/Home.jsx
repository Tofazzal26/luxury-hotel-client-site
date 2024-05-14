import React from "react";
import Banner from "../../Components/Banner/Banner";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import OurBlogs from "../../Components/OurBlogs/OurBlogs";
import OurHotelLocation from "../../Components/OurHotelLocation/OurHotelLocation";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import FeaturedRooms from "../../Components/FeaturedRooms/FeaturedRooms";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-332px)]">
      <Helmet>
        <title>Luxury Hotel || Home</title>
      </Helmet>
      <div className="mt-[80px]">
        <div className="container mx-auto">
          <Banner />
          <OurHotelLocation />
          <NewsLetter />
          <FeaturedRooms />
          <OurBlogs />
        </div>
      </div>
    </div>
  );
};

export default Home;
