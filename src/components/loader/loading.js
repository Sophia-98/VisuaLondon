import React, { useEffect, useState } from "react";
import './loading.css'

const Loading = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload the GIF
    const img = new Image();
    img.src = "../assets/main_components/Loading.gif";

    //  loading delay of 2 seconds
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
    <div className="loader">
      <img src="../assets/main_components/Loading.gif" alt="Loading..." />
      <h1>Loading...</h1>
    </div>
 
    
  ) : null;
};

export default Loading;