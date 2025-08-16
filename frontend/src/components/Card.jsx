import React from "react";
import { Link } from "react-router-dom";

function Card({ id, img, name, price }) {
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col items-start hover:scale-105 transition-transform duration-200"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-[300px] object-cover rounded-md"
      />
      <h3 className="mt-2 text-sm">{name}</h3>
      <p className="font-semibold">${price}</p>
    </Link>
  );
}

export default Card;

