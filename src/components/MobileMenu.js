import React from "react";
import apple from "../assert/img/AppleStore.png";
import google from "../assert/img/StoreApple.png";
import Logo from "./Logo";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";
import BackdropLayout from "./UI/Backdrop";

const MobileMenuBar = ({ onConform }) => {
  return (
    <div className=" flex flex-col box-border bg-white h-screen fixed w-80 z-50 left-0 top-0 py-1 overflow-hidden">
      <div className="border-b p-5 b-center ">
        <Logo />
        <button
          onClick={() => onConform(false)}
          className="cursor-pointer p-2 text-xl"
        >
          <IoMdClose />
        </button>
      </div>
      <div className="h-full p-6">
        <ul className=" flex flex-col gap-1 font-bold text-[#111827]">
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
      </div>
      <div className="center gap-3  ">
        <a href="/">
          <img src={google} alt="Apple Store" />
        </a>
        <a href="/">
          <img src={apple} alt="Google Store" />
        </a>
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
