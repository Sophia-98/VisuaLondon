import React, { Suspense, useRef, useState } from "react"
import { Canvas} from "@react-three/fiber"

import Controls from './components/map/controls'
import  Map  from './components/map/mapPlane'
import Sky from './components/map/sky'
import Icon from './components/map/icons'
import Loading from './components/loading'


const App = () => {
  const poi = useRef()
  const [loadingComplete, setLoadingComplete] = useState(false)
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
    {!loadingComplete && <Loading onLoadingComplete={() => setLoadingComplete(true)} />}

    {loadingComplete && (
    <Canvas camera={{ position: [0, 0, 10], fov: 75, up: [0, 0, 1] }}>
      
      <ambientLight intensity={Math.PI / 1.5} />
      <Suspense fallback={null}>
      <Sky />
      <Icon position={[10, 5, -9.5]} url={"../assets/map_images/icon_images/Newham_Icon.png"} size={5} />
        <Icon position={[2, -0.5, -9.5]} url={"../assets/map_images/icon_images/Southwark_icon.png"} size={4.5} />
        <Icon position={[11.7, -6, -9.5]} url={"../assets/map_images/icon_images/Greenwich_Icon.png"} size={5} />
        <Icon position={[-12, 7.5, -9.5]} url={"../assets/map_images/icon_images/Brent_icon.png"} size={4.5} />
        <Map position={[1, 0, -10]} scale={2} ref={poi} />
      </Suspense>

      <Controls />
    </Canvas>
    )}
    </div>
  )
}

export default App;

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
