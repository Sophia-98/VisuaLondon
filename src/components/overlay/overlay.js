import React, { useState } from "react";
import Hover from "./hover/hover";
import Parallax from "./parallax/parallax";
import { animated, useTransition, config } from "@react-spring/web";

import "./overlay.css";

export default function App({ data_number, position, image_number }) {
  // useState initialised to false for the visibility of the overlay
  const [overlayVisible, setOverlayVisible] = useState(false);

  // whenever toggleOverlay has been triggered it will set overlayVisible to the opposite state
  const toggleOverlay = () => setOverlayVisible(!overlayVisible);

  // transitions configurations
  const transitions = useTransition(overlayVisible, {
    from: { transform: "translateY(100%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(100%)" },
    config: config.stiff,
  });

  return (
    <>
      <Hover
        overlay={toggleOverlay}
        data_number={data_number}
        position={position}
      />

      {transitions(
        (style, item) =>
          item && (
            <animated.div className="overlay" style={style}>
              <label
                className="main-nav_exit"
                tabIndex="0"
                aria-label="Close menu"
                onClick={toggleOverlay}
                style={{ position: "absolute", zIndex: "50" }}
              >
                <svg
                  aria-hidden="true"
                  width="24"
                  height="22px"
                  viewBox="0 0 24 22"
                >
                  <path d="M11 9.586L20.192.393l1.415 1.415L12.414 11l9.193 9.192-1.415 1.415L11 12.414l-9.192 9.193-1.415-1.415L9.586 11 .393 1.808 1.808.393 11 9.586z" />
                </svg>
              </label>
              <Parallax data_number={data_number} image_number={image_number} />
            </animated.div>
          )
      )}
    </>
  );
}
