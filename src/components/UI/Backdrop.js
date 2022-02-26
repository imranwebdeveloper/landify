import React from "react";

const BackdropLayout = ({ onConform }) => {
  return (
    <div
      className=" backdrop-brightness-50 bg-white/30 w-full h-screen fixed z-30 top-0 left-0  overflow-hidden "
      onClick={() => onConform(false)}
    ></div>
  );
};

export default BackdropLayout;
