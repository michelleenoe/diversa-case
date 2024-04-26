import React from "react";

const Button = ({ title, backgroundColor }) => {
  return (
    <>
      <button
        type={type}
        className=" bg-primarycolor02 hover:bg-primarycolorvariant03 px-4 py-3 rounded-full"
        style={{ backgroundColor }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
