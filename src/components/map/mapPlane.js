import * as THREE from "three"
import React, { forwardRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"

const Map = forwardRef(({ ...props }, ref) => {
    const [londonmap] = useTexture(["../assets/map_images/mapPlane.png"])
    const aspectRatio = londonmap.image.width / londonmap.image.height
  
    // Use useFrame to update the rotation on each frame
    useFrame(({ camera }) => {
      if (ref.current) {
        // Calculate the vector from the sticker's position to the camera's position
        const lookAtVector = new THREE.Vector3()
        camera.getWorldPosition(lookAtVector)
        ref.current.lookAt(lookAtVector.x, lookAtVector.y, lookAtVector.z)
      }
    })
  
    return (
      <sprite ref={ref} {...props} scale={[aspectRatio * 70, 70]}>
        <spriteMaterial map={londonmap} />
      </sprite>
    )
  })
  

export default Map;