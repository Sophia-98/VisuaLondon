import React from 'react'
import { useSpring, animated } from 'react-spring'
import Nav from '../../navigation/navigation'




const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 100+30}px,0)`
const trans2 = (x, y) => `translate3d(${x / 20+450}px,${y / 30+20}px,0)`
const trans3 = (x, y) => `translate3d(${x / 30-520}px,${y / 180+130}px,0)`
const trans4 = (x, y) => `translate3d(${x / 20-300}px,${y / 50-120}px,0)`
const trans5 = (x, y) => `translate3d(${x / 50+230}px,${y / 30-200}px,0)`
const trans6 = (x, y) => `translate3d(${x / 40+30}px,${y / 80+20}px,0)`



export default function Card() {
 
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
      <>
    <Nav path = '../assets/locations/Southwark/Logo.png' titlewrap = "titlewrapcircle" title = "stations"/>
     <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
     <animated.img className="card5S" style={{ transform: props.xy.interpolate(trans5) }} src ='../assets/locations/Southwark/borough_market.png'/>
     <animated.img className="card4S" style={{ transform: props.xy.interpolate(trans4) }} src ='../assets/locations/Southwark/tate_museum.png'/>
     <animated.img className="card3S" style={{ transform: props.xy.interpolate(trans3) }} src ='../assets/locations/Southwark/shakespeare.png'/>
     <animated.img className="card2S" style={{ transform: props.xy.interpolate(trans2) }} src ='../assets/locations/Southwark/cathedral.png'/>
     <animated.img className="card1S" style={{ transform: props.xy.interpolate(trans1) }} src ='../assets/locations/Southwark/imperial_war_museum.png'/>
     <animated.img className="card6S" style={{ transform: props.xy.interpolate(trans6) }} src ='../assets/locations/Southwark/golden_hind.gif'/>
 
    <img className = "wave" src = '../assets/locations/Southwark/wave1.gif' alt='wave'/>
    <img className = "wave2" src = '../assets/locations/Southwark/wave2.gif' alt='wave'/>
    <img className = "grenback"src ='../assets/locations/Southwark/bg.gif' alt='background'/>
    </div>
   

   
    
    </>
  )
}

