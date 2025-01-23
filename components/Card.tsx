import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded" />}
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;

