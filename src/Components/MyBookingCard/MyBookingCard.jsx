import { data } from "autoprefixer";
import React, { useState } from "react";
import BookTable from "./BookTable";

const MyBookingCard = ({ myBook, setMyBook }) => {
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg text-black">Image</th>
              <th className="text-lg text-black">Room Name</th>
              <th className="text-lg text-black">Price Per Night</th>
              <th className="text-lg text-black">Room Size</th>
              <th className="text-lg text-black">Booking Date</th>
              <th className="text-lg text-black">Update Date</th>
              <th className="text-lg text-black">Cancelation</th>
            </tr>
          </thead>
          <tbody>
            {myBook.map((bookTable) => (
              <BookTable
                key={bookTable._id}
                bookTable={bookTable}
                setMyBook={setMyBook}
                myBook={myBook}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingCard;
