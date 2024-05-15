import axios from "axios";
import { useEffect, useState } from "react";
import RoomPageCard from "./RoomPageCard";
import { Helmet } from "react-helmet-async";

const Rooms = () => {
  const [roomPage, setRoomPage] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/rooms`).then((result) => {
      setRoomPage(result.data);
    });
  }, []);

  const handleSort = (criteria) => {
    const sorted = [...roomPage].sort((a, b) => {
      if (criteria === "asc") {
        return a.price_per_night - b.price_per_night;
      } else if (criteria === "desc") {
        return b.price_per_night - a.price_per_night;
      }
    });
    setRoomPage(sorted);
  };

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <Helmet>
        <title>Luxury Hotel || Rooms</title>
      </Helmet>
      <div className="mt-[80px]">
        <div className="text-center mt-12">
          <h2 className="font-semibold text-2xl">Filtering The Price</h2>
          <select
            className="border-2 border-gray-200 px-6 py-3 my-4 font-semibold text-lg"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option className="font-semibold" value="asc">
              Ascending Price
            </option>
            <option className="font-semibold" value="desc">
              Descending Price
            </option>
          </select>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-12">
            {roomPage.map((roomPage) => (
              <RoomPageCard key={roomPage._id} roomPage={roomPage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
