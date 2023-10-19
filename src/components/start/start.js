import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";
import Loading from "../loader/loading";

const Intro = () => {
  const props1 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 12000,
  });

  const props2 = useSpring({
    visibility: "visible",
    from: { visibility: "hidden" },
    delay: 3000,
  });

  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      {!loadingComplete && <Loading onLoadingComplete={() => setLoadingComplete(true)} />}
      {loadingComplete && (
        <a.div
          style={{
            ...props2,
            width: "100%",
            height: "100%",
            backgroundColor: "#E2E1D0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{ width: "100%", height: "100%", position: "absolute", zIndex: 1 }} src="../assets/main_components/Frame.png" alt="Frame" />
          <img style={{ width: "auto", height: "100%", position: "absolute", zIndex: 0 }} src="../assets/main_components/Intro.gif" alt="Intro" />

          <Link to="/map">
            <a.div className="begin" style={{ ...props1 }}>
              Click Here To Begin
            </a.div>
          </Link>
        </a.div>
      )}
    </div>
  );
};

export default Intro;
