import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Cloud } from "@react-three/drei"
//import { useControls } from "leva"

const Sky = () => {
    const ref = useRef()
    const cloud0 = useRef()
  
    // Manual configuration of clouds
    const config = {
      bounds: [10, 20, 2],
      seed: 1,
      segments: 32,
      volume: 6,
      opacity: 0.6,
      fade: 10,
      growth: 3,
      speed: 0.1,
      x: 10,
      y: 20,
      z: 2,
      color: "white",
    }
  
    useFrame((state, delta) => {
      ref.current.position.y = Math.cos(state.clock.elapsedTime / 2) / 2
      ref.current.position.x = Math.sin(state.clock.elapsedTime / 2) / 2
      cloud0.current.rotation.y -= delta / 100
    })
  
    return (
      <group ref={ref}>
        <Cloud ref={cloud0} {...config} />
        <Cloud {...config} seed={2} position={[15, 0, 0]} />
        <Cloud {...config} seed={3} position={[-15, 0, 0]} />
        <Cloud {...config} seed={4} position={[25, 0, -12]} />
        <Cloud {...config} seed={5} position={[0, 0, 12]} />
      </group>
    )
  }

 export default Sky;
  
  // function Sky() {
  //   const ref = useRef()
  //   const cloud0 = useRef()
  //   const { color, x, y, z, range, ...config } = useControls({
  //     seed: { value: 1, min: 1, max: 100, step: 1 },
  //     segments: { value: 32, min: 1, max: 80, step: 1 },
  //     volume: { value: 6, min: 0, max: 100, step: 0.1 },
  //     opacity: { value: 0.6, min: 0, max: 1, step: 0.01 },
  //     fade: { value: 10, min: 0, max: 400, step: 1 },
  //     growth: { value: 3, min: 0, max: 20, step: 1 },
  //     speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //     x: { value: 10, min: 0, max: 100, step: 1 },
  //     y: { value: 20, min: 0, max: 100, step: 1 },
  //     z: { value: 2, min: 0, max: 100, step: 1 },
  //     color: "white",
  //   })
  
  //   useFrame((state, delta) => {
  //     ref.current.position.y = Math.cos(state.clock.elapsedTime / 2) / 2
  //     ref.current.position.x = Math.sin(state.clock.elapsedTime / 2) / 2
  //     cloud0.current.rotation.y -= delta / 100
  //   })
  
  //   return (
  //     <>
  //       <group ref={ref}>
  //         <Cloud ref={cloud0} {...config} bounds={[x, y, z]} />
  //         <Cloud {...config} bounds={[x, y, z]} seed={2} position={[15, 0, 0]} />
  //         <Cloud {...config} bounds={[x, y, z]} seed={3} position={[-15, 0, 0]} />
  //         <Cloud {...config} bounds={[x, y, z]} seed={4} position={[25, 0, -12]} />
  //         <Cloud {...config} bounds={[x, y, z]} seed={5} position={[0, 0, 12]} />
  
  //         {/* Render the image behind the clouds */}
  //       </group>
  //     </>
  //   )
  // }
  
 