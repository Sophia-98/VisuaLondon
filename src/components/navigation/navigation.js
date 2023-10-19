import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ path, titlewrap, title }) => (
  <div>
    <nav className="nav-below">
      <div className={titlewrap}>
        <img className={title} src={path} height="263" alt="visualondon" />
      </div>
      <div className="frame">
        <div className="frame__nav">
          <label
            className="main-nav-open nav-toggle"
            htmlFor="main-nav-toggle"
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
        <nav className="main-nav">
          <ul className="main-nav__fallback">
            {[
              { to: "/", label: "Home" },
              { to: "/Map", label: "Explore" },
              { to: "/Greenwich", label: "Greenwich" },
              { to: "/Southwark", label: "Southwark" },
              { to: "/Brent", label: "Brent" },
              { to: "/Newham", label: "Newham" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  textDecoration: "none",
                }}
              >
                <li>{label}</li>
              </Link>
            ))}
          </ul>
          <label
            className="main-nav__close nav-toggle"
            htmlFor="main-nav-toggle"
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
        </nav>
      </div>
    </nav>
  </div>
);

export default Nav;
