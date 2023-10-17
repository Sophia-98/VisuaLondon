import React, { useEffect, useState } from "react";

const Loading = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload the GIF outside React Fiber context
    const img = new Image();
    img.src = "../assets/main_components/Loading.gif";

    // Simulate a loading delay of 2 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
      // Notify the parent component that loading is complete
      onLoadingComplete();
    }, 2000);

    // Clear the timeout if the component is unmounted before the delay
    return () => clearTimeout(timeoutId);
  }, [onLoadingComplete]);

  // Render the loading screen while loading is true
  return loading ? (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
      <img src="../assets/main_components/Loading.gif" alt="Loading..." style={{ width: "20em", height: "18em" }} />
    </div>
  ) : null;
};

export default Loading;
