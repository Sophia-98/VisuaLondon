import React, {useEffect, useState} from 'react'
import { useSpring, animated } from '@react-spring/web'
import Overlay from '../../overlay/overlay'
import Loading from '../../loader/loading';
import Nav from '../../navigation/navigation'
import '../borough.css'
import './greenwich.css'

import data from '../../../data'


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const queens= (x, y) => `translate3d(${x / 10}px,${y / 100 - 50}px,0)`
const obser = (x, y) => `translate3d(${x / 20+380}px,${y / 100+80}px,0)`
const natmu = (x, y) => `translate3d(${x / 15-380}px,${y / 100+90}px,0)`



const Card = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
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
      {!loadingComplete && <Loading onLoadingComplete={() => setLoadingComplete(true)} />}
      {loadingComplete && (
        <div>
          <Nav path='../assets/locations/Greenwich/logo.png' titlewrap="titlewraplocations" title="areas" />
          
          
            {windowWidth >= 900 ? (
              <div>
                <Overlay data_number={1} position="cable_hover" />
                <Overlay data_number={2} position="nat_museum_hover" />
                <Overlay data_number={3} position="queens_hover" />
                <Overlay data_number={4} position="royal_hover" />
                <div className="container_borough bg_container gren_bg" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
               <animated.img className="queens_house_parallax parallax" style={{ transform: props.xy.to(queens) }} src ='../assets/locations/Greenwich/queens_house.png'  alt="queens house"/>
               <animated.img className="royal_observatory_parallax parallax" style={{ transform: props.xy.to(obser) }} src = '../assets/locations/Greenwich/Royal Observatory_Texture.png'  alt="royal observatory"/>
               <animated.img className="martime_museum_parallax parallax" style={{ transform: props.xy.to(natmu) }} src ='../assets/locations/Greenwich/National_Maritime_museum.png'  alt="national maritime"/>
               </div>
               </div>

            ) : (
              <div>
                
               
               <div className="container_borough bg_static">
                <div className='image_stack'>
                <div style={{display: "flex", justifyContent:"center"}}>
                <h1>{data[1].title}</h1>
                <Overlay data_number={1}/>
                </div>
               <img className="cable_car_static" src ='../assets/locations/Greenwich/Cable_car.png' alt="cable car"/>
               <div style={{display: "flex", justifyContent:"center"}}>
               <h1>{data[2].title}</h1>
               <Overlay data_number={2}  />
               </div>
               <img className="martime_museum_static" src ='../assets/locations/Greenwich/National_Maritime_museum.png' alt="national maritime"/>

               <div style={{display: "flex", justifyContent:"center"}}>
                <h1>{data[3].title}</h1>
                <Overlay data_number={3}  />
                </div>
                <img className="queens_house_static" src ='../assets/locations/Greenwich/queens_house.png' alt="queens house"/>

                <div style={{display: "flex", justifyContent:"center"}}> 
                <h1>{data[4].title}</h1>
                <Overlay data_number={4} />
                </div>
                
                <img className="royal_observatory_static" src = '../assets/locations/Greenwich/Royal Observatory_Texture.png' alt="royal observatory"/>
                </div>
              </div>
              </div>
            )}
          </div>
        
      )}
    </div>
  );
};

export default Card;

