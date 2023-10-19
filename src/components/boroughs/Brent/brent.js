import React from 'react';
import { useSpring, animated } from 'react-spring';
import Nav from '../../../components/navigation/navigation'


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20 - 10}px, ${y / 105 + 5}px, 0)`;

const Card = () => {
  
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

  return (
    <>
     

      <Nav path='../assets/locations/Brent/logo.png' titlewrap="titlewrapcircle" title="stations" />

      <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.img className="cardB" style={{ transform: props.xy.interpolate(trans1) }} src='../assets/locations/Brent/temple.gif' />
        <img className="grenback" src='../assets/locations/Brent/brent_bg.gif' alt='brent_bg' />
      </div>
    </>
  );
};

export default Card;
