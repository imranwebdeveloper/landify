import React from "react";
import logo from "../assert/img/logo.png";

const Logo = () => {
  return (
    <div className="mr-8 flex items-center ">
      <a href="/" className="w-32 h-8">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
