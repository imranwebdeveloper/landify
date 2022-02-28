import React from "react";

const BackdropLayout = ({ onConform }) => {
  return (
    <div className="relative">
      <div
        className=" fixed z-30 h-screen w-full overflow-hidden blur backdrop-brightness-50 "
        onClick={() => onConform(false)}
      ></div>
    </div>
  );
};

export default BackdropLayout;
