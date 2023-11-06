import React from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated as a, config } from "@react-spring/web";
import Loading from "../loader/loading";
import { IMAGES } from "../../images";

import "./start.css";

const Intro = () => {
  const navigate = useNavigate(); // Get the history object for navigation

  // useSpring animation for the begin text
  const click_begin = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: 12000,
    config: config.molasses,
  });

  // warning animation configuration
  const warning = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 8000,
    config: config.molasses,
  });

  const handleBeginClick = () => {
    // navigate to map on click
    navigate("/map");
  };

  return (
    <div className="wrapper">
      <a.div className="container">
        <img className="frame" src={IMAGES[0].url} alt="Frame" />
        <img className="intro_gif" src={IMAGES[1].url} alt="Intro" />
        <a.p className="warning" style={{ ...warning }}>
          For the best experience, please make sure your browser's Hardware
          Acceleration is on.
        </a.p>

        <a.p
          className="begin_text"
          style={{ ...click_begin }}
          onClick={handleBeginClick}
        >
          Click Here To Begin
        </a.p>
      </a.div>
    </div>
  );
};

export default Loading(Intro, IMAGES, "start");
