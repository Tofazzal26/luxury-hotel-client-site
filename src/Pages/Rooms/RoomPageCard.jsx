import { NavLink } from "react-router-dom";

const RoomPageCard = ({ roomPage }) => {
  const { room_images, price_per_night, name, description, availability, _id } =
    roomPage || {};

  return (
    <div>
      <div className="card card-compact bg-base-100 h-full rounded-none shadow-xl">
        <NavLink to={`/roomsDetails/${_id}`}>
          <figure className="relative">
            <img className="h-[300px] w-full" src={room_images} alt="" />
            <div className="absolute top-[20px] right-0">
              <span className="bg-red-500 text-white font-bold px-6 py-2">
                $ {price_per_night}
              </span>
            </div>
          </figure>
        </NavLink>

        <div className="card-body space-y-0">
          <h3 className="font-bold text-[16px] text-red-500">{availability}</h3>
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomPageCard;
