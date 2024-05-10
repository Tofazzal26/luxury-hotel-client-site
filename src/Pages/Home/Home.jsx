import React from "react";
import Banner from "../../Components/Banner/Banner";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-332px)]">
      <div className="mt-[80px]">
        <div className="container mx-auto">
          <Banner />
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
};

export default Home;
