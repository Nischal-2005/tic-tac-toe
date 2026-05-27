import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="h-24 w-24 border-2 border-black flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-gray-200"
    >
      {value}
    </div>
  );
};

export default Square;