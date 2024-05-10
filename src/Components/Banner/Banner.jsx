import hotelVideo from "../../../public/video/hotelVideo.mp4";

const Banner = () => {
  return (
    <div className="mt-[120px]">
      <div>
        <video className="w-full" loop muted autoPlay src={hotelVideo}></video>
      </div>
    </div>
  );
};

export default Banner;
