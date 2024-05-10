import blog1 from "../../../public/Blogs/blog1.jpg";
import blog2 from "../../../public/Blogs/blog2.jpg";
import blog3 from "../../../public/Blogs/blog3.jpg";

const OurBlogs = () => {
  return (
    <div className="mb-12">
      <h1 className="text-center my-10 font-semibold text-3xl">
        Our Hotel <span className="text-[#ffae4c]">Blogs</span>
      </h1>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div className="card card-compact rounded-none p-4">
          <figure>
            <img className="px-4 mt-4 w-full lg:h-[500px]" src={blog1} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">London</h2>
            <p className=" leading-[30px] text-[18px]">
              This guide has all the information you need for a perfect holiday.
              The sections that we cover are cultural activities.
            </p>
          </div>
        </div>
        <div className="card card-compact rounded-none p-4">
          <figure>
            <img className="px-4 mt-4 w-full lg:h-[500px]" src={blog2} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">New Work</h2>
            <p className=" leading-[30px] text-[18px]">
              The reputable one-Michelin-star restaurant Sra Bua by Kiin Kiin at
              The Hotel Bangkok welcomes the warm summer
            </p>
          </div>
        </div>
        <div className="card card-compact rounded-none p-4">
          <figure>
            <img className="px-4 mt-4 w-full lg:h-[500px]" src={blog3} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Paris</h2>
            <p className=" leading-[30px] text-[18px]">
              Almost every magazine, blog, travel agency and every other
              marketing expression related to Bangkok will show you a picture of
              this iconic temple
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
