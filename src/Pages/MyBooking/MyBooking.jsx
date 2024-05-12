import axios from "axios";
import { useEffect, useState } from "react";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";
import MyBookingCard from "../../Components/MyBookingCard/MyBookingCard";

const MyBooking = () => {
  const allAuth = useAuthUser();
  const { user } = allAuth;

  const [myBook, setMyBook] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/myBookingRoom/${user?.email}`)
      .then((result) => {
        setMyBook(result.data);
      });
  }, [user?.email]);

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <div className="mt-[80px]">
        <div>
          <MyBookingCard myBook={myBook} setMyBook={setMyBook} />
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
