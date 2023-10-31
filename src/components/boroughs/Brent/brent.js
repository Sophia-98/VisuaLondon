import React from 'react';
import { useSpring, animated } from 'react-spring';
import Nav from '../../../components/navigation/navigation'
import Information from '../../information/information'
import Loading from '../../loader/loading'

import '../borough.css'
import './brent.css'


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans = (x, y) => `translate3d(${x / 20 + 30}px, ${y / 105 + 30}px, 0)`;

const Card = () => {
  const [loadingComplete, setLoadingComplete] = React.useState(false);
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

  return (
    
     <div>
    {!loadingComplete && <Loading onLoadingComplete={() => setLoadingComplete(true)} />}
    {loadingComplete && (
    <div>
      <Nav path='../assets/locations/Brent/logo.png' titlewrap="titlewraplocations" title="areas" /> 
      <Information data_number={0} position="temple_hover"/>
      <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.img className="temple" alt="Neasden Temple" style={{ transform: props.xy.to(trans) }} src='../assets/locations/Brent/temple.gif' /> 
        <img className="bg" src='../assets/locations/Brent/brent_bg.gif' alt='brent_bg' />
      </div>
    </div>
  )}

    </div>
    
  );
};

export default Card;
