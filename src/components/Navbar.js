import React from "react";
import apple from "../assert/img/AppleStore.png";
import google from "../assert/img/StoreApple.png";

const Navbar = () => {
  return (
    <nav className="flex-1 h-8 b-center">
      <div className="nav hidden md:block">
        <ul className="flex gap-4 font-bold text-[#111827]">
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
      <div className="gap-3 hidden md:flex">
        <a href="/">
          <img src={google} alt="Apple Store" />
        </a>
        <a href="/">
          <img src={apple} alt="Google Store" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
