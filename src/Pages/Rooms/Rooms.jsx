import axios from "axios";
import { useEffect, useState } from "react";
import RoomPageCard from "./RoomPageCard";

const Rooms = () => {
  const [roomPage, setRoomPage] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/rooms`).then((result) => {
      setRoomPage(result.data);
    });
  }, []);

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <div className="mt-[80px]">
        <div className="text-center mt-12">
          <select className="border-2 text-lg font-semibold p-4">
            <option className="font-semibold" value="">
              Filter By Price
            </option>
            <option className="font-semibold" value="dsc">
              Descending Order
            </option>
            <option className="font-semibold" value="asc">
              Ascending Order
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
