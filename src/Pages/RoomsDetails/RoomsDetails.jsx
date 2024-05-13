import {
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";
import axios from "axios";
import { toast } from "react-hot-toast";
const RoomsDetails = () => {
  const roomsLoadedData = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());

  const [disabled, setDisabled] = useState(true);
  const allAuth = useAuthUser();

  const { user } = allAuth;
  const {
    name,
    description,
    price_per_night,
    room_size,
    availability,
    room_images,
    special_offers,
    booking_dates,
    _id,
  } = roomsLoadedData || {};

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDates = startDate;
    const price = price_per_night;
    const summary = description;
    const roomSize = room_size;
    const email = user?.email;
    const image = room_images;
    // const availableStatus = availability;
    const roomName = name;

    const id = _id;
    const Booking = {
      email,
      price,
      summary,
      roomSize,
      newDates,
      id,
      availability,
      image,
      roomName,
    };

    axios.post("http://localhost:4000/myBooking", Booking).then((result) => {
      toast.success("Confirm Your Booking");
      console.log(result.data);
    });

    axios
      .patch(`http://localhost:4000/availableRooms/${_id}`, {
        availability: "Unavailable",
      })
      .then((result) => {
        console.log(result.data);
      });
  };

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <div className="mt-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            <div className="col-span-2">
              <div className="relative">
                <img className="w-full h-[300px]" src={room_images} alt="" />
                <div className="absolute top-[22px] right-0">
                  <span className="bg-red-500 text-white font-bold px-6 py-2">
                    $ {price_per_night}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-3 space-y-2">
              <h3 className="text-lg font-semibold text-red-500">
                {availability}
              </h3>
              <h2 className="text-3xl">{name}</h2>
              <h2 className="text-lg font-semibold">{room_size}</h2>
              <p className="text-xl">{description}</p>

              {/* Open the modal using document.getElementById('ID').showModal() method */}
              {availability !== "Unavailable" ? (
                <button
                  className="text-white bg-red-500 font-semibold w-full py-2 text-lg rounded-md"
                  onClick={() => {
                    document.getElementById("my_modal_1").showModal();
                  }}
                >
                  Book Now
                </button>
              ) : (
                <button
                  disabled
                  className="text-white bg-red-500 font-semibold w-full py-2 text-lg rounded-md"
                >
                  Book Now
                </button>
              )}

              <dialog id="my_modal_1" className="modal">
                <div className="modal-box space-y-3">
                  <div className="relative">
                    <img
                      className="w-full h-[250px]"
                      src={room_images}
                      alt=""
                    />
                    <div className="absolute top-[22px] right-0">
                      <span className="bg-red-500 text-white font-bold px-6 py-2">
                        $ {price_per_night}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-red-500">
                    {availability}
                  </h3>
                  <h3 className="font-bold text-lg">{name}</h3>
                  <h2 className="font-semibold">{description}</h2>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <DatePicker
                      className="border-2 p-2 border-gray-500 font-semibold rounded-md"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />

                    <button className="text-lg bg-red-500 text-white font-semibold w-full py-2 rounded-md">
                      CONFIRM
                    </button>
                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn bg-red-500 text-white">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsDetails;
