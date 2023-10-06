import React, { useRef, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import { MapControls } from "@react-three/drei"

const Controls = () => {
    const { camera } = useThree()
    const controlsRef = useRef()
  
    useEffect(() => {
      controlsRef.current.addEventListener("change", function () {
        if (this.target.y < -15) {
          this.target.y = -15
          camera.position.y = -15
        } else if (this.target.y > 15) {
          this.target.y = 15
          camera.position.y = 15
        }
  
        if (this.target.x < -15) {
          this.target.x = -15
          camera.position.x = -15
        } else if (this.target.x > 15) {
          this.target.x = 15
          camera.position.x = 15
        }
      })
    }, [camera.position])
  
    return (
      <MapControls
        ref={controlsRef}
        enableZoom={true}
        enableRotate={false}
        minDistance={4}
        maxDistance={12} // Set your preferred max zoom distance
      />
    )
  }

  export default Controls;