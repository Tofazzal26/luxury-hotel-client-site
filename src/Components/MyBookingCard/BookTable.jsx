import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";

// or via CommonJS
const BookTable = ({ bookTable, myBook, setMyBook, setRefetch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const allAuth = useAuthUser();
  const { user } = allAuth;
  // const [startDate, setStartDate] = useState(null);

  const {
    newDates,
    price,
    summary,
    roomSize,
    email,
    image,
    roomName,
    id,
    _id,
    Booking,
  } = bookTable || {};
  const [bookingDate, setBookingDate] = useState(newDates);
  const [cancellationDate, setCancellationDate] = useState(new Date());

  let dateString = newDates;
  let dateObject = new Date(dateString);
  let formattedDate = `${
    dateObject.getMonth() + 1
  }/${dateObject.getDate()}/${dateObject.getFullYear()}`;

  // 1din age change hobe na

  let dateString2 = cancellationDate;
  let dateObject2 = new Date(dateString2);
  let formattedDate2 = `${
    dateObject2.getMonth() + 1
  }/${dateObject2.getDate()}/${dateObject2.getFullYear()}`;

  let dateString3 = bookingDate;
  let dateObject3 = new Date(dateString3);
  let formattedDate3 = `${
    dateObject3.getMonth() + 1
  }/${dateObject3.getDate()}/${dateObject3.getFullYear()}`;

  console.log(formattedDate2);
  console.log(formattedDate3);

  const handleDateUpdate = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/updateDate/${_id}`, {
        newDates: startDate,
      })
      .then((result) => {
        console.log(result.data);
        // const filter = myBook.filter((book) => book._id === id);
        // setMyBook(filter);
        toast.success("Date update Successfully");
      });
  };

  const handleDeleteBook = (ids, ids2) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // cancel 2day ago codeing

      if (bookingDate < cancellationDate) {
        return toast.error("Hobe na vai 1din age bolte hobe");
      }

      if (result.isConfirmed) {
        fetch(`http://localhost:4000/deleteBook/${ids}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              axios
                .patch(`http://localhost:4000/deletedAvailability/${ids2}`, {
                  availability: "Available",
                })
                .then((result) => {
                  console.log(result.data);
                });
              // update fetch
              const filterDelete = myBook.filter(
                (deleteBook) => deleteBook._id !== ids
              );
              setMyBook(filterDelete);
            }
          });
      }
    });
  };

  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;
    const newReviews = form.review.value;
    const userName = form.name.value;
    const rating = form.number.value;
    const userImage = user?.photoURL;
    if (rating > 5) {
      return toast.error("Rating Maximum 5 Number Available");
    }
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    const allReview = [newReviews, userName, rating, formattedDate, userImage];
    console.log(allReview);

    axios
      .patch(`http://localhost:4000/reviewUpdate/${id}`, {
        reviews: allReview,
      })
      .then((data) => {
        console.log(data.data);
        toast.success("Review Successfully Added");
      });
  };

  return (
    <>
      <tr>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-[80px] h-[80px]">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">
                <h1 className="text-base">{roomName}</h1>
              </div>
            </div>
          </div>
        </td>

        <td>
          <h2 className="text-base text-black font-semibold">$ {price}</h2>
        </td>
        <td>
          <h2 className="text-base text-black font-semibold">{roomSize}</h2>
        </td>
        <th>{formattedDate}</th>
        <td>
          <form onSubmit={handleDateUpdate}>
            <div className="flex items-center gap-4">
              <DatePicker
                className="text-base text-red-500 font-semibold border-2 py-2 px-4 w-[120px] rounded-md border-gray-600"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <button className="text-base text-white bg-green-500 font-semibold py-2 px-4 rounded-md">
                Update Date
              </button>
            </div>
          </form>
        </td>
        <td>
          <button
            onClick={() => handleDeleteBook(_id, id)}
            className="text-base text-white bg-red-500 font-semibold py-2 px-10 rounded-md"
          >
            Cancel
          </button>
        </td>
        <td>
          {/* see details  */}

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="text-base text-white px-6 py-2 rounded-md bg-blue-500 font-semibold"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add Review
          </button>
          <NavLink to={`/roomsDetails/${id}`}>
            <button className="text-base text-white ml-2 px-6 py-2 rounded-md bg-gray-500 font-semibold">
              See Review
            </button>
          </NavLink>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form onSubmit={handleReviews}>
                <h1 className="text-center font-semibold text-2xl">
                  Write Review
                </h1>
                <label className="font-semibold text-[16px]">User Name</label>
                <input
                  type="text"
                  name="name"
                  readOnly
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="input input-bordered w-full my-2"
                />
                <label className="font-semibold text-[16px]">Rating</label>
                <input
                  type="text"
                  name="number"
                  placeholder="Rating"
                  className="input input-bordered w-full my-2"
                />
                <label className="font-semibold text-[16px]">Review</label>
                <textarea
                  name="review"
                  className="textarea textarea-bordered w-full my-2 font-semibold text-base h-[200px]"
                  placeholder="Write Your Review"
                ></textarea>

                <button className="py-2 px-6 bg-[#ffae4c] font-semibold w-full text-lg rounded-md text-white">
                  Submit
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className=" font-semibold px-6 p-3 rounded-md text-base bg-red-500 text-white">
                    Close
                  </button>
                </form>
              </div>
              <Toaster />
            </div>
          </dialog>
        </td>
      </tr>
    </>
  );
};

export default BookTable;
