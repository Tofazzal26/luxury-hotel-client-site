import feature1 from "../../../public/feature/hotel1.jpg";
import feature2 from "../../../public/feature/hotel2.jpg";
import feature3 from "../../../public/feature/hotel3.jpg";
import feature4 from "../../../public/feature/hotel4.jpg";
import feature5 from "../../../public/feature/hotel6.jpg";
import feature6 from "../../../public/feature/hotel5.jpg";

const FeaturedProducts = () => {
  return (
    <div className="mb-12">
      <h1 className="text-center my-12 font-semibold text-3xl">
        Our Feature Plan <span className="text-[#ffae4c]">Hotel</span>
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img
              className="px-4 mt-4 w-full lg:h-[300px]"
              src={feature1}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Tranquil Oasis Zen-inspired Serenity & Comfort
            </h2>
          </div>
        </div>
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img
              className="px-4 mt-4 w-full lg:h-[300px]"
              src={feature6}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Metropolitan Retreat Stylish Urban Living & Convenience
            </h2>
          </div>
        </div>
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img
              className="px-4 w-full lg:h-[300px] mt-4"
              src={feature2}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Rustic Hideaway Cozy Countryside Charm & Natural Beauty
            </h2>
          </div>
        </div>
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img
              className="px-4 mt-4 w-full lg:h-[300px]"
              src={feature3}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Ut enim ad minima veniam, quis nostrum exercitationem.
            </h2>
          </div>
        </div>
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img
              className="px-4 mt-4 w-full lg:h-[300px]"
              src={feature4}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Contemporary Elegance Modern Luxury & Sophistication
            </h2>
          </div>
        </div>
        <div className="card card-compact rounded-none border-2 p-4">
          <figure>
            <img
              className="px-4 mt-4 w-full lg:h-[300px]"
              src={feature5}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bohemian Escape Artistic Vibes & Relaxed Atmosphere
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
