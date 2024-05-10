const FeatureCard = ({ room }) => {
  const { room_name, image_url, description } = room;

  return (
    <div>
      <div className="card card-compact rounded-none h-full border-2 p-4">
        <figure>
          <img
            className="px-4 mt-4 w-full lg:h-[300px]"
            src={image_url}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{room_name}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
