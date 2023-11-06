import React, { useState, useEffect } from "react";
import {
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "../../../data";
import "./hover.css";

const Hover = ({ overlay, data_number, position }) => {
  const [open, set] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  // animation before and after
  const springApi = useSpringRef();
  const { width, left, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      width: "50px",
      height: "50px",
      background: "#ECB47C",
    },
    to: {
      width: open ? data[data_number].width.toString() + "px" : "50px",

      background: open ? "white" : "#ECB47C",
    },
  });

  const transApi = useSpringRef();

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  // configuration on the visibiity and timing of text
  useEffect(() => {
    if (open) {
      const delay = setTimeout(() => {
        setTextVisible(true);
      }, 50);
      return () => clearTimeout(delay);
    } else {
      setTextVisible(false);
    }
  }, [open]);

  return (
    <animated.div
      style={{ ...rest, width: width, left: left }}
      className={`container_hover ${position}`}
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
      onClick={overlay}
    >
      {/* Open vs unponened elements */}
      {!open && (
        <div className="plus">
          <p>+</p>
        </div>
      )}
      {open && (
        <p className="hover_title" style={{ opacity: textVisible ? 1 : 0 }}>
          {data[data_number].title[0]}
        </p>
      )}
    </animated.div>
  );
};

export default Hover;
