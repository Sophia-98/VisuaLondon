import React, { Suspense, useRef, useState } from "react"
import * as THREE from "three"
import { Canvas, useFrame, useThree} from "@react-three/fiber"
import {Loader} from '@react-three/drei'


import Nav from '../navigation/navigation'
import Controls from './map_components/controls'
import  MapPlane  from './map_components/mapPlane'
import Sky from './map_components/sky'
import Icon from './map_components/icons'
import Loading from '../loader/loading'
import {IMAGES} from '../../images'

import './map.css'



const MapCanvas = () => {
  const poi = useRef()
  const minCameraPosition = [0, 0, 7]
  const maxCameraPosition = [0, 0, 20]
 

  const [isCameraAnimationInProgress, setCameraAnimationInProgress] = useState(true)

  // Set an initial camera position
  const initialCameraPosition = [...maxCameraPosition]

  return (
    <div className="map_container">
    
      <Nav path={IMAGES[2].url} titlewrap="titlewrap" title="logo" />
      <Canvas camera={{ position: initialCameraPosition, fov: 75, up: [0, 0, 1] }}>
        <Suspense fallback={null}>
        
          <Sky />
          <ambientLight intensity={Math.PI * 2.5} />
          <Icon position={[10, 5, -9.5]} url={"../assets/map_images/icon_images/Newham_Icon.png"} size={5} to="/newham" />
          <Icon position={[2, -0.5, -9.5]} url={"../assets/map_images/icon_images/Southwark_icon.png"} size={4.5} to="/southwark" />
          <Icon position={[11.7, -6, -9.5]} url={"../assets/map_images/icon_images/Greenwich_Icon.png"} size={5} to="/greenwich" />
          <Icon position={[-12, 7.5, -9.5]} url={"../assets/map_images/icon_images/Brent_icon.png"} size={4.5} to="/brent" />
          <MapPlane position={[1, 0, -10]} scale={2} ref={poi} />
        </Suspense>
      <Controls />
      <CameraAnimation
        minCameraPosition={minCameraPosition}
        maxCameraPosition={maxCameraPosition}
        isCameraAnimationInProgress={isCameraAnimationInProgress}
        onAnimationComplete={() => setCameraAnimationInProgress(false)}
      />
    </Canvas>
    <Loader/>
  
  
    
    
    </div>
  )
}

function CameraAnimation({ minCameraPosition, maxCameraPosition, isCameraAnimationInProgress, onAnimationComplete }) {
  const { camera } = useThree()

  // Use useFrame to animate the camera position if the animation is still in progress
  useFrame(({ clock }) => {
    if (isCameraAnimationInProgress) {
      const t = Math.min(clock.elapsedTime / 2, 1) // Control animation speed
      const newCameraPosition = new THREE.Vector3()
      newCameraPosition.lerpVectors(new THREE.Vector3(...maxCameraPosition), new THREE.Vector3(...minCameraPosition), t)
      camera.position.copy(newCameraPosition)

      if (t === 1) {
        // Animation is complete
        onAnimationComplete()
      }
    }
  })

  return null 
}


export default  Loading(MapCanvas, IMAGES, 'map');

