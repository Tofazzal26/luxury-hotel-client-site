import { useEffect } from "react";
import about1 from "../../../public/About/about1.jpg";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-332px)]">
      <div className="mt-[80px]">
        <div>
          <h1 className="text-center text-[40px] font-semibold">About Us</h1>
          <p className="font-semibold text-center text-gray-500 text-lg mx-auto lg:w-[620px]">
            Quisque at volutpat nibh. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div className="my-12">
          <div className="container mx-auto">
            <div className="flex justify-center items-center gap-6 lg:ml-[170px]">
              <div className="flex-1 space-y-8">
                <h1 className="text-5xl font-semibold">
                  Welcome to <span className="text-[#ffae4c]">My Hotel</span>
                </h1>
                <p className="font-semibold text-black text-xl w-[500px]">
                  Cras eu nisl quis est mattis placerat. Etiam ut ante et lacus
                  imperdiet sagittis a finibus mauris.
                </p>
                <p className="font-semibold text-gray-500">
                  Proin nisl mi, eleifend in faucibus et, venenatis eu turpis.
                  Ut hendrerit eleifend odio. Nullam ullamcorper viverra ex quis
                  tempus. In hac habitasse platea dictumst. Vestibulum sed
                  tempor metus.
                </p>
                <p className="font-semibold text-gray-500">
                  Duis sollicitudin augue nec bibendum mollis. Proin luctus diam
                  vel hendrerit dictum. Nunc tincidunt nibh in sem blandit
                  venenatis. Suspendisse rutrum ultricies porttitor. Quisque at
                  volutpat nibh.Aliquam dapibus turpis mollis felis fermentum
                  bibendum. In finibus a nulla vitae dapibus. Nam non suscipit
                  urna. Vestibulum et lacinia justo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <button className="bg-[#ffae4c] text-white py-2 px-4 text-lg font-semibold">
                  Call To Us (+880)1306700357
                </button>
              </div>
              <div className="flex-1">
                <img className="" src={about1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
