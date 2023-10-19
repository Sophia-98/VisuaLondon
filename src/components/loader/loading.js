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
    }, 3000);

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
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}>
      <img src="../assets/main_components/Loading.gif" alt="Loading..." style={{ width: "40em", height: "40m" }} />
      <h1 style={{ position: "absolute", bottom: '30%' }}>Loading...</h1>
    </div>
  ) : null;
};

export default Loading;