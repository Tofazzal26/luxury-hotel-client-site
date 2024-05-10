import Carousel from "react-elastic-carousel";
import banner1 from "../../../public/banner/banner1.jpg";
import banner2 from "../../../public/banner/banner2.jpg";
import banner3 from "../../../public/banner/banner3.jpg";
import banner4 from "../../../public/banner/banner4.jpg";
const Banner = () => {
  return (
    <div className="my-[120px]">
      <Carousel enableAutoPlay autoPlaySpeed={2000}>
        <div className="w-full rounded-md">
          <img
            className="lg:h-[600px] w-full rounded-md"
            src={banner1}
            alt=""
          />
        </div>
        <div className="w-full rounded-md">
          <img
            className="lg:h-[600px] w-full rounded-md"
            src={banner2}
            alt=""
          />
        </div>
        <div className="w-full rounded-md">
          <img
            className="lg:h-[600px] w-full rounded-md"
            src={banner3}
            alt=""
          />
        </div>
        <div className="w-full rounded-md">
          <img
            className="lg:h-[600px] w-full rounded-md"
            src={banner4}
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
