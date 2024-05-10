import feature1 from "../../../public/feature/food1.jpg";
import feature2 from "../../../public/feature/food2.jpg";
import feature3 from "../../../public/feature/food3.png";
import feature4 from "../../../public/feature/food4.jpg";
import feature5 from "../../../public/feature/food5.png";
import feature6 from "../../../public/feature/food6.png";

const FeaturedProducts = () => {
  return (
    <div className="mb-12">
      <h1 className="text-center my-12 font-semibold text-3xl">
        Our Feature <span className="text-[#94c36b]">Foods</span>
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img className="px-4 mt-4" src={feature1} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              There are many variations of this Lorem Ipsum available.
            </h2>
          </div>
        </div>
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img className="px-4 mt-4 lg:h-[300px]" src={feature6} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </h2>
          </div>
        </div>
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img className="px-4 lg:h-[300px] mt-4" src={feature2} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Neque porro quisquam est, qui dolorem ipsum quia.
            </h2>
          </div>
        </div>
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img className="px-4 mt-4 lg:h-[300px]" src={feature3} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Ut enim ad minima veniam, quis nostrum exercitationem.
            </h2>
          </div>
        </div>
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img className="px-4 mt-4 lg:h-[300px]" src={feature4} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
            </h2>
          </div>
        </div>
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img className="px-4 mt-4 lg:h-[300px]" src={feature5} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Duis aute irure dolor in reprehenderit in voluptate esse.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
