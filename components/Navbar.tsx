import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/about" className="text-white">About</a></li>
          <li><a href="/contact" className="text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
