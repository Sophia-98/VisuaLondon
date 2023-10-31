import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated as a, config } from "react-spring";
import Loading from "../loader/loading";

import './start.css'

const Intro = () => {
  // useSpring animation for the begin text
  const click_begin = useSpring({
    display: "none",
    from: { display: "none", opacity: 0, transform: "scale(0.5)" }, // Initial values
    to: { display: "block", opacity: 1, transform: "scale(1)" }, // Final values
    delay: 14000,
    config: config.molasses, // Easing configuration
  });

  // // useSpring ease-in animation/delay for gifs
  // const intro_gifs = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   delay: 3000,
  // });

  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="wrapper">
    {!loadingComplete && <Loading onLoadingComplete={() => setLoadingComplete(true)} />}
    {loadingComplete && (
      <a.div  className="container" >
        <img  className="frame" src="../assets/main_components/Frame.png" alt="Frame" />
        <img  className="intro_gif" src="../assets/main_components/Intro.gif" alt="Intro" />

        <Link to="/map">
          <a.p className="begin_text" style={{ ...click_begin }}>
            Click Here To Begin
          </a.p>
        </Link>
      </a.div>
    )}
  </div>
);
      };

export default Intro;
