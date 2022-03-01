import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (isToggle) => {
    setToggle(isToggle);
  };
  useEffect(() => {
    toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = null);
  }, [toggle]);

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
