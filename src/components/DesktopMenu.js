import React from "react";
import { FaBars } from "react-icons/fa";
import apple from "../assert/img/AppleStore.png";
import google from "../assert/img/StoreApple.png";
import Logo from "./Logo";

const DesktopMenu = ({ onConform }) => {
  return (
    <div className="b-center flex-1 overflow-hidden  ">
      <Logo />
      <div className=" hidden md:flex flex-1 b-center ">
        <ul className=" flex flex-1 gap-4 font-bold text-[#111827]">
          <li className="nav-link">
            <a href="/">Features</a>
          </li>
          <li className="nav-link">
            <a href="/">Pricing</a>
          </li>
          <li className="nav-link">
            <a href="/">Careers</a>
          </li>
          <li className="nav-link">
            <a href="/">Help</a>
          </li>
        </ul>
        <div className=" flex gap-3 ">
          <a href="/">
            <img src={google} alt="Apple Store" />
          </a>
          <a href="/">
            <img src={apple} alt="Google Store" />
          </a>
        </div>
      </div>
      <button
        onClick={() => onConform(true)}
        className="md:hidden cursor-pointer p-2 text-xl"
      >
        <FaBars />
      </button>
    </div>
  );
};

export default DesktopMenu;