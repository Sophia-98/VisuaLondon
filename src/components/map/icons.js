import React, { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useTexture, useCursor } from "@react-three/drei"

const Icon = ({ size, url, ...props }) => {
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [icon] = useTexture([url])
    const aspectRatio = icon.image.width / icon.image.height
  
    useFrame((state) => {
      const scaleFactor = hovered ? 1 + Math.sin(state.clock.elapsedTime * 7) / (size * 4) : 1
      ref.current.scale.set(size * aspectRatio, size, 0.5).multiplyScalar(scaleFactor)
    })
  
    useCursor(hovered)
  
    return (
      <sprite
        {...props}
        ref={ref}
        scale={[size * aspectRatio, size, 1]}
        receiveShadow
        castShadow
         // eslint-disable-next-line 
        onClick={(e) => (e.stopPropagation(), setClicked(!clicked))}
         // eslint-disable-next-line 
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}>
        <spriteMaterial map={icon} />
      </sprite>
    )
  }

  export default Icon;