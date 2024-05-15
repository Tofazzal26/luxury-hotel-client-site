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
import { Toaster, toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
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
    reviews,
    booking_dates,
    _id,
  } = roomsLoadedData || {};

  // console.log(reviews);

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

    axios
      .post("https://luxury-hotel-server-beryl.vercel.app/myBooking", Booking)
      .then((result) => {
        toast.success("Confirm Your Booking");
        // console.log(result.data);
      });

    axios
      .patch(
        `https://luxury-hotel-server-beryl.vercel.app/availableRooms/${_id}`,
        {
          availability: "Unavailable",
        }
      )
      .then((result) => {
        // console.log(result.data);
      });
  };

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <Helmet>
        <title>Luxury Hotel || Rooms Details</title>
      </Helmet>
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
                  <Toaster />
                </div>
              </dialog>
            </div>
          </div>
          {/* review section */}
          <div className="my-12">
            <div className="container flex flex-col w-full max-w-lg p-6 divide-y rounded-md bg-gray-100">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={reviews[4]}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{reviews[1]}</h4>
                    <span className="text-xs dark:text-gray-600">
                      {reviews[3]}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">{reviews[2]}</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p className="font-semibold">{reviews[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsDetails;
