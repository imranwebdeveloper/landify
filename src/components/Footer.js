import React from "react";
import logo2 from "../assert/img/Logo2.png";
import apple from "../assert/img/AppleStore.png";
import google from "../assert/img/StoreApple.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="layout py-16 ">
        <div className=" md:flex ">
          <div className="flex-1">
            <div className="mr-8 mb-3 flex items-center ">
              <a href="/" className="h-8 w-32">
                <img src={logo2} alt="logo" />
              </a>
            </div>
            <ul className="flex gap-4 py-1 ">
              <li>
                <a href="/"> Download Now</a>
              </li>
              <li>
                <a href="/"> License</a>
              </li>
            </ul>
            <ul className="mb-4 flex  gap-4 text-white">
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
            <small className="py-1 text-slate-400 ">
              &copy; 2021 Landify UI Kit. All rights reserved{" "}
            </small>
          </div>
          <div className=" mt-8">
            <p className="mb-3">Get the App</p>
            <div className="flex gap-3">
              <a href="/">
                <img src={google} alt="Apple Store" />
              </a>
              <a href="/">
                <img src={apple} alt="Google Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
