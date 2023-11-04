import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Nav from '../../../components/navigation/navigation';
import Overlay from '../../overlay/overlay';
import Loading from '../../loader/loading';
import data from '../../../data'

import {IMAGES} from '../../../images'

import '../borough.css';
import './brent.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans = (x, y) => `translate3d(${x / 20 + 30}px, ${y / 105 + 30}px, 0)`;

const Card = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
        <div>
          <Nav path={IMAGES[3].url} titlewrap="titlewraplocations" title="areas" />
          {windowWidth >= 900 ? (
            <div>
              <Overlay data_number={0} image_number={4} position="temple_hover" />
              <div  className="container_borough bg_container brent_bg " onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <animated.img
                  className="temple"
                  alt="Neasden Temple"
                  style={{ transform: props.xy.to(trans) }}
                  src={IMAGES[4].url}
                />
              </div>
            </div>
          ) : (
            <div className="container_borough bg_static" >
              <div className='image_stack'>

              <div style={{display: "flex", justifyContent:"center"}}>
                <h1>{data[0].title[0]}</h1>
                <Overlay data_number={0} image_number={4}/>
                </div>
              
              <img
                alt="Neasden Temple"
                className="temple"
                src={IMAGES[4].url}
              />
              </div>
            </div>
          )}
           
          </div>
        
     
  );
};

export default Loading(Card, IMAGES, 'brent');



