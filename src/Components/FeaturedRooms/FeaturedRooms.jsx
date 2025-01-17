import axios from "axios";
import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("https://luxury-hotel-server-beryl.vercel.app/feature_room")
      .then((data) => {
        setRooms(data.data);
      });
  }, []);

  return (
    <div>
      <h1
        data-aos="fade-up-right"
        data-aos-duration="1000"
        className="text-center my-10 font-semibold text-3xl"
      >
        Featured <span className="text-[#ffae4c]">Rooms</span>
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {rooms.map((room) => (
          <FeatureCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
