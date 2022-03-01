import React from "react";
import apple from "../assert/img/AppleStore.png";
import google from "../assert/img/StoreApple.png";
import Logo from "./Logo";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";
import BackdropLayout from "./UI/Backdrop";

const MobileMenuBar = ({ onConform }) => {
  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-80 overflow-y-auto bg-white">
      <div className=" flex h-full w-80 max-w-[calc(100vw-3rem)] flex-col   ">
        <div className="b-center border-b p-5 ">
          <Logo />
          <button
            onClick={() => onConform(false)}
            className="cursor-pointer p-2 text-xl"
          >
            <IoMdClose />
          </button>
        </div>
        <ul className=" flex-1 p-5 font-bold text-[#111827]">
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
        <div className=" center gap-3  p-5 ">
          <a href="/">
            <img src={google} alt="Apple Store" />
          </a>
          <a href="/">
            <img src={apple} alt="Google Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({ onConform }) => {
  return (
    <>
      {createPortal(
        <MobileMenuBar onConform={onConform} />,
        document.getElementById("mobile-menu")
      )}
      {createPortal(
        <BackdropLayout onConform={onConform} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default MobileMenu;
