import React, { useState, useEffect } from "react";
import "./loading.css";

const Loading = (Component, images, page) => {
  return function Loading(props) {
    const [imgsLoaded, setImgsLoaded] = useState(false);
    const [minLoadingTimePassed, setMinLoadingTimePassed] = useState(false);

    // will load images that are within the image database and are under a certain page category that is passed through the parent element
    useEffect(() => {
      const imagesToLoad = images.filter((image) => image.page === page);
      const imagePromises = imagesToLoad.map((image) =>
        loadWithPromise(image.url)
      );

      const promises = [
        Promise.all(imagePromises),
        new Promise((resolve) => setTimeout(resolve, 3000)), // Wait for a minimum of 3 seconds or will wait longer if needed
      ];

      Promise.all(promises)
        .then(() => {
          setMinLoadingTimePassed(true);
        })
        // error handling
        .catch((error) => {
          console.error("Failed to load images", error);
        });
    }, []);

    const loadWithPromise = (url) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = url;

        loadImg.onload = () => {
          resolve(url);
        };

        loadImg.onerror = () => {
          reject(url);
        };
      });
    };

    // conditional outcome if images have loaded
    useEffect(() => {
      if (minLoadingTimePassed) {
        setImgsLoaded(true);
      }
    }, [minLoadingTimePassed]);

    return (
      <div>
        {!minLoadingTimePassed ? (
          <div className="loader">
            <img src="../assets/main_components/Loading.gif" alt="Loading..." />
            <h1>Loading...</h1>
          </div>
        ) : imgsLoaded ? (
          <Component {...props} />
        ) : null}
      </div>
    );
  };
};

export default Loading;
