import axios from "axios";
import { useEffect, useState } from "react";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";
import MyBookingCard from "../../Components/MyBookingCard/MyBookingCard";
import { Helmet } from "react-helmet-async";

const MyBooking = () => {
  const allAuth = useAuthUser();
  const { user } = allAuth;

  const [myBook, setMyBook] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/myBookingRoom/${user?.email}`, {
        withCredentials: true,
      })
      .then((result) => {
        setMyBook(result.data);
      });
  }, [user?.email]);

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <Helmet>
        <title>Luxury Hotel || My Booking</title>
      </Helmet>
      <div className="mt-[80px]">
        <div>
          <MyBookingCard myBook={myBook} setMyBook={setMyBook} />
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
