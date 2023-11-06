

import React, {useEffect, useState} from 'react'
import { useSpring, animated } from '@react-spring/web'
import Overlay from '../../overlay/overlay'
import Loading from '../../loader/loading';
import Nav from '../../navigation/navigation'
import '../borough.css'
import './southwark.css'

import data from '../../../data'
import {IMAGES} from '../../../images'


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const imp_mus = (x, y) => `translate3d(${x / 10}px,${y / 100+15}px,0)`
const cathe = (x, y) => `translate3d(${x / 20+480}px,${y / 50+50}px,0)`
const shakes = (x, y) => `translate3d(${x / 30-545}px,${y / 180+120}px,0)`
const tate_mus = (x, y) => `translate3d(${x / 20-300}px,${y / 50-120}px,0)`
const bour_mark = (x, y) => `translate3d(${x / 50+230}px,${y / 30-180}px,0)`
const golden = (x, y) => `translate3d(${x / 40+430}px,${y / 80+250}px,0)`



const Card = () => {
  
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
          <Nav path={IMAGES[10].url} titlewrap="titlewraplocations" title="areas" />
          
          
            {windowWidth >= 900 ? (
              <div>
                <Overlay data_number={5} image_number={20} position="market_hover" />
                <Overlay data_number={6} image_number={14} position="cathedral_hover" />
                <Overlay data_number={7} image_number={17} position="hind_hover" />
                <Overlay data_number={8} image_number={15} position="war_mus_hover" />
                <Overlay data_number={9} image_number={13} position="globe_hover" />
                <Overlay data_number={10} image_number={12} position="tate_hover" />
                <div className="container_borough bg_container south_bg" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                  
                  
                <animated.img className="bour_mark parallax" style={{ transform: props.xy.to(bour_mark) }} src = {IMAGES[11].url}/>
                <animated.img className="tate parallax" style={{ transform: props.xy.to(tate_mus) }} src = {IMAGES[12].url}/>
                <animated.img className="shakesp parallax" style={{ transform: props.xy.to(shakes) }} src ={IMAGES[13].url}/>
                <animated.img className="cathedral parallax" style={{ transform: props.xy.to(cathe) }} src = {IMAGES[14].url}/>
                <animated.img className="imp_mus parallax" style={{ transform: props.xy.to(imp_mus) }} src = {IMAGES[15].url}/>
                <animated.img className="golden parallax" style={{ transform: props.xy.to(golden) }} src = {IMAGES[16].url}/>

                <img className = "wave" src = {IMAGES[18].url} alt='wave'/>
                <img className = "wave2" src = {IMAGES[19].url} alt='wave'/>
                
               </div>
               </div>

            ) : (
              <div>
                
               
               <div className="container_borough bg_static">
                <div className='image_stack'>

                <div style={{display: "flex", justifyContent:"center"}}>
                <h1>{data[5].title}</h1>
                <Overlay data_number={5} image_number={20}/>
                </div>
               <img className="market_static" src = {IMAGES[20].url}  alt="borough Market"/>

               <div style={{display: "flex", justifyContent:"center"}}>
               <h1>{data[10].title}</h1>
               <Overlay data_number={10} image_number={12} />
               </div>
               <img className="tate_static" src = {IMAGES[12].url} alt="tate museum"/>

               <div style={{display: "flex", justifyContent:"center"}}>
                <h1>{data[9].title}</h1>
                <Overlay data_number={9} image_number={13} />
                </div>
                <img className="globe_static" src = {IMAGES[13].url} alt="shakespeare"/>

                <div style={{display: "flex", justifyContent:"center"}}> 
                <h1>{data[6].title}</h1>
                <Overlay data_number={6} image_number={14}/>
                </div>
                
                <img className="cathedral_static" src = {IMAGES[14].url} alt="cathedral"/>


                <div style={{display: "flex", justifyContent:"center"}}> 
                <h1>{data[8].title}</h1>
                <Overlay data_number={8} image_number={15}/>
                </div>
                
                <img className="imperial_static" src = {IMAGES[15].url} alt="impreial war museum"/>

                <div style={{display: "flex", justifyContent:"center"}}> 
                <h1>{data[7].title}</h1>
                <Overlay data_number={7} image_number={17}/>
                </div>
                
                <img className="golden_static" src = {IMAGES[17].url} alt="golden hind"/>




                </div>
              </div>
              </div>
            )}
          </div>
        
   
  );
};

export default Loading(Card, IMAGES, 'southwark');

