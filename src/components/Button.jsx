import React from "react";

const Button = ({ title, backgroundColor }) => {
  return (
    <>
      <button
        className=" bg-primarycolor02 bordercolor transition-colors duration-100 ease-in-out hover:bg-primarycolorvariant03 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondarycolor"
        style={{ backgroundColor }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
