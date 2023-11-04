

import React, {useEffect, useState} from 'react'
import { useSpring, animated } from '@react-spring/web'
import Overlay from '../../overlay/overlay'
import Loading from '../../loader/loading';
import Nav from '../../navigation/navigation'
import '../borough.css'
import './southwark.css'

import data from '../../../data'


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const imp_mus = (x, y) => `translate3d(${x / 10}px,${y / 100+15}px,0)`
const cathe = (x, y) => `translate3d(${x / 20+480}px,${y / 50+50}px,0)`
const shakes = (x, y) => `translate3d(${x / 30-525}px,${y / 180+120}px,0)`
const tate_mus = (x, y) => `translate3d(${x / 20-300}px,${y / 50-120}px,0)`
const bour_mark = (x, y) => `translate3d(${x / 50+230}px,${y / 30-180}px,0)`
const golden = (x, y) => `translate3d(${x / 40+430}px,${y / 80+300}px,0)`



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
          <Nav path='../assets/locations/Southwark/Logo.png' titlewrap="titlewraplocations" title="areas" />
          
          
            {windowWidth >= 900 ? (
              <div>
                <Overlay data_number={5} position="market_hover" />
                <Overlay data_number={6} position="cathedral_hover" />
                <Overlay data_number={7} position="hind_hover" />
                <Overlay data_number={8} position="war_mus_hover" />
                <Overlay data_number={9} position="globe_hover" />
                <Overlay data_number={10} position="tate_hover" />
                <div className="container_borough bg_container south_bg" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                  
                  
                <animated.img className="bour_mark parallax" style={{ transform: props.xy.to(bour_mark) }} src ='../assets/locations/Southwark/borough_market.png'/>
                <animated.img className="tate parallax" style={{ transform: props.xy.to(tate_mus) }} src ='../assets/locations/Southwark/tate_museum.png'/>
                <animated.img className="shakesp parallax" style={{ transform: props.xy.to(shakes) }} src ='../assets/locations/Southwark/shakespeare_OR.png'/>
                <animated.img className="cathedral parallax" style={{ transform: props.xy.to(cathe) }} src ='../assets/locations/Southwark/cathedral.png'/>
                <animated.img className="imp_mus parallax" style={{ transform: props.xy.to(imp_mus) }} src ='../assets/locations/Southwark/imperial_war_museum.png'/>
                <animated.img className="golden parallax" style={{ transform: props.xy.to(golden) }} src ='../assets/locations/Southwark/golden_hind.gif'/>

                <img className = "wave" src = '../assets/locations/Southwark/wave1.gif' alt='wave'/>
                <img className = "wave2" src = '../assets/locations/Southwark/wave2.gif' alt='wave'/>
                
               </div>
               </div>

            ) : (
              <div>
                
               
               <div className="container_borough bg_static">
                <div className='image_stack'>

                <div style={{display: "flex", justifyContent:"center"}}>
                <h1>{data[5].title}</h1>
                <Overlay data_number={5}/>
                </div>
               <img className="market_static" src ='../assets/locations/Southwark/Borough_market_OR.png' alt="borugh Market"/>

               <div style={{display: "flex", justifyContent:"center"}}>
               <h1>{data[10].title}</h1>
               <Overlay data_number={10}  />
               </div>
               <img className="tate_static" src ='../assets/locations/Southwark/tate_museum.png' alt="tate museum"/>

               <div style={{display: "flex", justifyContent:"center"}}>
                <h1>{data[9].title}</h1>
                <Overlay data_number={9}  />
                </div>
                <img className="globe_static" src ='../assets/locations/Southwark/shakespeare_OR.png' alt="shakespeare"/>

                <div style={{display: "flex", justifyContent:"center"}}> 
                <h1>{data[6].title}</h1>
                <Overlay data_number={6} />
                </div>
                
                <img className="cathedral_static" src = '../assets/locations/Southwark/cathedral.png' alt="cathedral"/>


                <div style={{display: "flex", justifyContent:"center"}}> 
                <h1>{data[8].title}</h1>
                <Overlay data_number={8} />
                </div>
                
                <img className="imperial_static" src = '../assets/locations/Southwark/imperial_war_museum.png' alt="impreial war museum"/>

                <div style={{display: "flex", justifyContent:"center"}}> 
                <h1>{data[7].title}</h1>
                <Overlay data_number={7} />
                </div>
                
                <img className="golden_static" src = '../assets/locations/Southwark/golden_hind.png' alt="golden hind"/>




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

