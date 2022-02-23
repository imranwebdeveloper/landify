import React from "react";
import logo from "../assert/img/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b ">
      <section className="layout b-center h-20 ">
        <div className="mr-8 flex items-center ">
          <a href="/" className="w-32 h-8">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <Navbar />
      </section>
    </header>
  );
};

export default Header;
