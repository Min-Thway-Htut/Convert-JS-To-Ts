import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded" />}
      <h2 className="text-xl font-bold mt-2">Chicken Curry</h2>
      <p className="text-gray-600 mt-2">It is our customers' favorite.</p>
    </div>
  );
};

export default Card;
