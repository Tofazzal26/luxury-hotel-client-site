import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

// or via CommonJS
const BookTable = ({ bookTable, myBook, setMyBook }) => {
  const [startDate, setStartDate] = useState(new Date());
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

  let dateString = newDates;
  let dateObject = new Date(dateString);
  let formattedDate = `${
    dateObject.getMonth() + 1
  }/${dateObject.getDate()}/${dateObject.getFullYear()}`;

  // useEffect(() => {
  //   if (newDates) {
  //     setStartDate(new Date(newDates));
  //   }
  // }, [newDates]);

  const handleDateUpdate = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/updateDate/${_id}`, {
        newDates: startDate,
      })
      .then((result) => {
        console.log(result.data);
        toast.success("Date update Successfully");
      });
  };

  const handleDeleteBook = (ids) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
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
              const filterDelete = myBook.filter(
                (deleteBook) => deleteBook._id !== ids
              );
              setMyBook(filterDelete);
            }
          });
      }
    });
  };

  // const handleDeleteBook = (ids) => {
  //   axios.delete(`http://localhost:4000/deleteBook/${ids}`).then((result) => {
  //     console.log(result.data);
  //     const filterDelete = myBook.filter(
  //       (deleteBook) => deleteBook._id !== ids
  //     );
  //     setMyBook(filterDelete);
  //   });
  // };

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
            <div className="flex items-center gap-2">
              <DatePicker
                className="text-base text-red-500 font-semibold "
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
            onClick={() => handleDeleteBook(_id)}
            className="text-base text-white bg-red-500 font-semibold py-2 px-10 rounded-md"
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default BookTable;
