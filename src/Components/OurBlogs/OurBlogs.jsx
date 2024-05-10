import blog1 from "../../../public/Blogs/blog1.jpg";
import blog2 from "../../../public/Blogs/blog2.jpg";
import blog3 from "../../../public/Blogs/blog3.png";

const OurBlogs = () => {
  return (
    <div className="mb-12">
      <h1 className="text-center my-10 font-semibold text-3xl">
        Our Feature <span className="text-[#94c36b]">Blogs</span>
      </h1>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div className="card card-compact rounded-none p-4">
          <figure>
            <img className="px-4 mt-4 lg:h-[300px]" src={blog1} alt="" />
          </figure>
          <div className="card-body">
            <p className="font-semibold">Posted on May 12, 2024</p>
            <h2 className="card-title">PREPARING THE SOIL.</h2>
            <p className=" leading-[30px] text-[18px]">
              Food donation involves giving food to those in need, typically
              through charitable organizations or community initiatives. It's a
              way to address hunger and food insecurity by redistributing
              surplus food to individuals or families.
            </p>
          </div>
        </div>
        <div className="card card-compact rounded-none p-4">
          <figure>
            <img className="px-4 mt-4 lg:h-[300px]" src={blog2} alt="" />
          </figure>
          <div className="card-body">
            <p className="font-semibold">Posted on March 12, 2024</p>
            <h2 className="card-title">LUSCIOUS ORGANIC PRODUCE</h2>
            <p className=" leading-[30px] text-[18px]">
              Food donation involves giving food to those in need, typically
              through charitable organizations or community initiatives. It's a
              way to address hunger and food insecurity by redistributing
              surplus food to individuals or families.
            </p>
          </div>
        </div>
        <div className="card card-compact rounded-none p-4">
          <figure>
            <img className="px-4 mt-4 lg:h-[300px]" src={blog3} alt="" />
          </figure>
          <div className="card-body">
            <p className="font-semibold">Posted on April 12, 2024</p>
            <h2 className="card-title">PIGSTY IS A SMALL ENCLOSURE.</h2>
            <p className=" leading-[30px] text-[18px]">
              Food donation involves giving food to those in need, typically
              through charitable organizations or community initiatives. It's a
              way to address hunger and food insecurity by redistributing
              surplus food to individuals or families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
