import axios from "axios";
import { useEffect, useState } from "react";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";
import MyBookingCard from "../../Components/MyBookingCard/MyBookingCard";
import { Helmet } from "react-helmet-async";

const MyBooking = () => {
  const allAuth = useAuthUser();
  const { user } = allAuth;

  const [myBook, setMyBook] = useState([]);
  const [refetch, setRefetch] = useState();
  useEffect(() => {
    axios
      .get(
        `https://luxury-hotel-server-beryl.vercel.app/myBookingRoom/${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        setMyBook(result.data);
      });
  }, [user?.email]);
  // setRefetch(Date.now())

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <Helmet>
        <title>Luxury Hotel || My Booking</title>
      </Helmet>
      <div className="mt-[80px]">
        <div>
          <MyBookingCard
            myBook={myBook}
            setMyBook={setMyBook}
            setRefetch={setRefetch}
          />
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
