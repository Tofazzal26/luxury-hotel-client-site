import { Map, Marker } from "pigeon-maps";
const OurHotelLocation = () => {
  return (
    <div>
      <div>
        <h1 className="text-center my-12 font-semibold text-3xl">
          Our Hotel <span className="text-[#ffae4c]">Location</span>
        </h1>
      </div>
      <div>
        <Map
          height={600}
          defaultCenter={[21.429109322139126, 91.97005959974331]}
          defaultZoom={11}
        >
          <Marker width={50} anchor={[21.429109322139126, 91.97005959974331]} />
        </Map>
      </div>
    </div>
  );
};

export default OurHotelLocation;
