import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  styleType?: "primary" | "secondary" | "danger"; // Optional prop with specific values
}

const Button: React.FC<ButtonProps> = ({ label, onClick, styleType = "primary" }) => {
  const styles = {
    primary: "bg-blue-500 text-white py-2 px-4 rounded",
    secondary: "bg-gray-500 text-white py-2 px-4 rounded",
    danger: "bg-red-500 text-white py-2 px-4 rounded",
  };

  return (
    <button className={styles[styleType]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

