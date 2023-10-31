import React from "react";

import ParallaxInfo from "../parralax/parallax";
import './overlay.css'

const Overlay = ({ overlay, data_number }) => {
  return (
    <div className="Overlay">
      <label
        className="main-nav_exit"
        tabIndex="0"
        aria-label="Close menu"
        onClick={overlay}
        style={{ position: "absolute", zIndex: "50" }}
      >
        <svg aria-hidden="true" width="24" height="22px" viewBox="0 0 24 22">
          <path d="M11 9.586L20.192.393l1.415 1.415L12.414 11l9.193 9.192-1.415 1.415L11 12.414l-9.192 9.193-1.415-1.415L9.586 11 .393 1.808 1.808.393 11 9.586z" />
        </svg>
      </label>
      <ParallaxInfo data_number={data_number} />
    </div>
  );
}

export default Overlay;