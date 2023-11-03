import React, { Suspense, useRef, useState } from "react"
import * as THREE from "three"
import { Canvas, useFrame, useThree} from "@react-three/fiber"

import Nav from '../navigation/navigation'
import Controls from './map_components/controls'
import  MapPlane  from './map_components/mapPlane'
import Sky from './map_components/sky'
import Icon from './map_components/icons'
import Loading from '../loader/loading'

import './map.css'



const MapCanvas = () => {
  const poi = useRef()
  const [loadingComplete, setLoadingComplete] = useState(false)
  const minCameraPosition = [0, 0, 7]
  const maxCameraPosition = [0, 0, 20]

  const [isCameraAnimationInProgress, setCameraAnimationInProgress] = useState(true)

  // Set an initial camera position
  const initialCameraPosition = [...maxCameraPosition]

  return (
    <div className="map_container">
    {!loadingComplete && <Loading onLoadingComplete={() => setLoadingComplete(true)} />}
    {loadingComplete && (
      <>
      <Nav path='../assets/main_components/Logo.png' titlewrap="titlewrap" title="logo" />
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
    </>
    )}
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

  return null // This component doesn't render anything
}

export default MapCanvas;

//   const { camera } = useThree()
//   const controlsRef = useRef()

//   useEffect(() => {
//     controlsRef.current.addEventListener("change", function () {
//       if (this.target.y < -15) {
//         this.target.y = -15
//         camera.position.y = -15
//       } else if (this.target.y > 15) {
//         this.target.y = 15
//         camera.position.y = 15
//       }

//       if (this.target.x < -15) {
//         this.target.x = -15
//         camera.position.x = -15
//       } else if (this.target.x > 15) {
//         this.target.x = 15
//         camera.position.x = 15
//       }
//     })
//   }, [camera.position])

//   return (
//     <MapControls
//       ref={controlsRef}
//       enableZoom={true}
//       enableRotate={false}
//       minDistance={4}
//       maxDistance={12} // Set your preferred max zoom distance
//     />
//   )
// }

// const Map = forwardRef(({ ...props }, ref) => {
//   const [londonmap] = useTexture(["../assets/map_images/mapPlane.png"])
//   const aspectRatio = londonmap.image.width / londonmap.image.height

//   // Use useFrame to update the rotation on each frame
//   useFrame(({ camera }) => {
//     if (ref.current) {
//       // Calculate the vector from the sticker's position to the camera's position
//       const lookAtVector = new THREE.Vector3()
//       camera.getWorldPosition(lookAtVector)
//       ref.current.lookAt(lookAtVector.x, lookAtVector.y, lookAtVector.z)
//     }
//   })

//   return (
//     <sprite ref={ref} {...props} scale={[aspectRatio * 70, 70]}>
//       <spriteMaterial map={londonmap} />
//     </sprite>
//   )
// })

// function Sky() {
//   const ref = useRef()
//   const cloud0 = useRef()

//   // Manual configuration of clouds
//   const config = {
//     bounds: [10, 20, 2],
//     seed: 1,
//     segments: 32,
//     volume: 6,
//     opacity: 0.6,
//     fade: 10,
//     growth: 3,
//     speed: 0.1,
//     x: 10,
//     y: 20,
//     z: 2,
//     color: "white",
//   }

//   useFrame((state, delta) => {
//     ref.current.position.y = Math.cos(state.clock.elapsedTime / 2) / 2
//     ref.current.position.x = Math.sin(state.clock.elapsedTime / 2) / 2
//     cloud0.current.rotation.y -= delta / 100
//   })

//   return (
//     <group ref={ref}>
//       <Cloud ref={cloud0} {...config} />
//       <Cloud {...config} seed={2} position={[15, 0, 0]} />
//       <Cloud {...config} seed={3} position={[-15, 0, 0]} />
//       <Cloud {...config} seed={4} position={[25, 0, -12]} />
//       <Cloud {...config} seed={5} position={[0, 0, 12]} />
//     </group>
//   )
// }

// // function Sky() {
// //   const ref = useRef()
// //   const cloud0 = useRef()
// //   const { color, x, y, z, range, ...config } = useControls({
// //     seed: { value: 1, min: 1, max: 100, step: 1 },
// //     segments: { value: 32, min: 1, max: 80, step: 1 },
// //     volume: { value: 6, min: 0, max: 100, step: 0.1 },
// //     opacity: { value: 0.6, min: 0, max: 1, step: 0.01 },
// //     fade: { value: 10, min: 0, max: 400, step: 1 },
// //     growth: { value: 3, min: 0, max: 20, step: 1 },
// //     speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
// //     x: { value: 10, min: 0, max: 100, step: 1 },
// //     y: { value: 20, min: 0, max: 100, step: 1 },
// //     z: { value: 2, min: 0, max: 100, step: 1 },
// //     color: "white",
// //   })

// //   useFrame((state, delta) => {
// //     ref.current.position.y = Math.cos(state.clock.elapsedTime / 2) / 2
// //     ref.current.position.x = Math.sin(state.clock.elapsedTime / 2) / 2
// //     cloud0.current.rotation.y -= delta / 100
// //   })

// //   return (
// //     <>
// //       <group ref={ref}>
// //         <Cloud ref={cloud0} {...config} bounds={[x, y, z]} />
// //         <Cloud {...config} bounds={[x, y, z]} seed={2} position={[15, 0, 0]} />
// //         <Cloud {...config} bounds={[x, y, z]} seed={3} position={[-15, 0, 0]} />
// //         <Cloud {...config} bounds={[x, y, z]} seed={4} position={[25, 0, -12]} />
// //         <Cloud {...config} bounds={[x, y, z]} seed={5} position={[0, 0, 12]} />

// //         {/* Render the image behind the clouds */}
// //       </group>
// //     </>
// //   )
// // }
