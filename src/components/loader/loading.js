// withLoading.js
import React, { useState, useEffect } from 'react';
import './loading.css';

const Loading = (Component, images, page) => {
  return function WithLoading(props) {
    const [imgsLoaded, setImgsLoaded] = useState(false);
    const [minLoadingTimePassed, setMinLoadingTimePassed] = useState(false);

    useEffect(() => {
      const imagesToLoad = images.filter((image) => image.page === page);
      const imagePromises = imagesToLoad.map((image) => loadWithPromise(image.url));

      const promises = [
        Promise.all(imagePromises),
        new Promise((resolve) => setTimeout(resolve, 3000)) // Wait for a minimum of 2.5 seconds
      ];

      Promise.all(promises)
        .then(() => {
          setMinLoadingTimePassed(true);
        })
        .catch((error) => {
          console.error('Failed to load images', error);
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
