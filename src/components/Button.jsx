import React from "react";

const Button = ({ title, backgroundColor }) => {
  return (
    <>
      <div className="flex items-center">
        <button
          className=" bg-primarycolor02 hover:bg-primarycolorvariant03 px-4 py-3 rounded-full"
          style={{ backgroundColor }}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default Button;
