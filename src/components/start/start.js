// Intro.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a, config } from '@react-spring/web';
import Loading from '../loader/loading';
import { IMAGES } from '../../images';
import './start.css';

const Intro = () => {
  // useSpring animation for the begin text
  const click_begin = useSpring({
    display: 'none',
    from: { display: 'none', opacity: 0, transform: 'scale(0.5)' },
    to: { display: 'block', opacity: 1, transform: 'scale(1)' },
    delay: 12000,
    config: config.molasses,
  });

  return (
    <div className="wrapper">
      <a.div className="container">
        <img className="frame" src={IMAGES[0].url} alt="Frame" />
        <img className="intro_gif" src={IMAGES[1].url} alt="Intro" />

        <Link to="/map">
          <a.p className="begin_text" style={{ ...click_begin }}>
            Click Here To Begin
          </a.p>
        </Link>
      </a.div>
    </div>
  );
};

export default Loading(Intro, IMAGES, 'start'); 
