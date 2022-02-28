import React from "react";
import logo from "../assert/img/logo.png";

const Logo = () => {
  return (
    <div className="mr-8 flex items-center ">
      <a href="/" className="h-8 w-32">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
