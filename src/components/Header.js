import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (isToggle) => {
    setToggle(isToggle);
  };
  return (
    <header className="border-b ">
      <section className="layout  ">
        <nav className="flex items-center h-20 ">
          {toggle ? (
            <MobileMenu onConform={toggleHandler} />
          ) : (
            <DesktopMenu onConform={toggleHandler} />
          )}
        </nav>
      </section>
    </header>
  );
};

export default Header;
