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
      <section className="layout">
        {toggle ? (
          <MobileMenu onConform={toggleHandler} />
        ) : (
          <DesktopMenu onConform={toggleHandler} />
        )}
      </section>
    </header>
  );
};

export default Header;
