

import { Link } from "react-router-dom";




import "./navigation.css";
import React, { useState } from "react";

import { animated, useTransition, config } from "@react-spring/web";

const Nav = ({ path, titlewrap, title }) => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => setNavVisible(!navVisible);

  const transitions = useTransition(navVisible, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
    config: config.default
  });

  return (
    <div>
      <nav>
        <div className={titlewrap}>
          <img className={title} src={path} alt="visualondon" />
        </div>

        <div className="menu">
          <div className="menu_burger">
            <label
              className="nav-toggle"
              onClick={toggleNav}
              tabIndex="0"
              aria-label="Menu"
            >
              <svg
                aria-hidden="true"
                width="28px"
                height="40px"
                viewBox="0 0 28 20"
              >
                <rect x="0" y="2" width="28" height="2"></rect>
                <rect x="0" y="10" width="24" height="2"></rect>
                <rect x="0" y="18" width="28" height="2"></rect>
              </svg>
            </label>
          </div>
          <input type="checkbox" id="main-nav-toggle" />
          <>
  {transitions((styles, item) =>
    item && (
      <animated.nav className="main-nav" style={styles}>
        <ul className="main-nav_items">
          {[
            { to: "/", label: "Home" },
            { to: "/Map", label: "Map" },
            { to: "/Greenwich", label: "Greenwich" },
            { to: "/Southwark", label: "Southwark" },
            { to: "/Brent", label: "Brent" },
            { to: "/Newham", label: "Newham" },
          ].map(({ to, label }) => (
            <Link key={to} to={to} style={{ textDecoration: "none" }}>
              <li>{label}</li>
            </Link>
          ))}
        </ul>
        <label
          className="main-nav_exit nav-toggle"
          onClick={toggleNav}
          tabIndex="0"
          aria-label="Close menu"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="22px"
            viewBox="0 0 24 22"
          >
            <path d="M11 9.586L20.192.393l1.415 1.415L12.414 11l9.193 9.192-1.415 1.415L11 12.414l-9.192 9.193-1.415-1.415L9.586 11 .393 1.808 1.808.393 11 9.586z"></path>
          </svg>
        </label>
      </animated.nav>
    ))}
</>


        </div>
      </nav>
    </div>
  );
};

export default Nav;
