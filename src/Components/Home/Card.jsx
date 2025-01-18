import { Link } from "react-router-dom";

const Card = ({ plant }) => {
  const { title, location, price, image, _id } = plant || {};
  return (
    <Link
      to={`/plant/${_id}`}
      className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl border-2 border-purple-500"
    >
      <div className="flex flex-col gap-2 w-full ">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
        >
          <img
            className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
            src={image}
            alt="Plant Image"
          />
          <div
            className="
              absolute
              top-3
              right-3
            "
          ></div>
        </div>
        <div className="font-semibold text-lg">{title}</div>
        <div className="font-semibold text-gray-500">
          Location: <span className="text-black">{location}</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">Price: {price}$</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
