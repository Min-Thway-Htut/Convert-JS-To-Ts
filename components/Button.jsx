import React from "react";

const Button = ({ label, onClick, styleType = "primary" }) => {
  const styles = {
    primary: "bg-blue-500 text-white py-2 px-4 rounded",
    secondary: "bg-gray-500 text-white py-2 px-4 rounded",
    danger: "bg-red-500 text-white py-2 px-4 rounded",
  };

  return (
    <button className={styles[styleType]} onClick={onClick}>
    Click here!
    </button>
  );
};

export default Button;
