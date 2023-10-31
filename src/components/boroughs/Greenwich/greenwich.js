import React from 'react'
import { useSpring, animated } from 'react-spring'


import Nav from '../../navigation/navigation'



const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 100 - 120}px,0)`
const trans2 = (x, y) => `translate3d(${x / 20+340}px,${y / 100+60}px,0)`
const trans3 = (x, y) => `translate3d(${x / 15-360}px,${y / 100+70}px,0)`



export default function Card() {
 
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
      <>
    
     
      <Nav path = '../assets/locations/Greenwich/logo.png' titlewrap = "titlewrapcircle" title = "stations"/>
      
     <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
     
     <animated.img className="card1" style={{ transform: props.xy.to(trans1) }} src ='../assets/locations/Greenwich/queens_house.png'/>
     <animated.img className="card2" style={{ transform: props.xy.to(trans2) }} src = '../assets/locations/Greenwich/Royal Observatory_Texture.png'/>
     <animated.img className="card3" style={{ transform: props.xy.to(trans3) }} src ='../assets/locations/Greenwich/National_Maritime_museum.png'/>
    
      <img className = "grenback"src ='../assets/locations/Greenwich/Greenwich-BG.gif' alt='greenwich-bg'/>
 
  
    </div>
   

   
    
    </>
  )
}