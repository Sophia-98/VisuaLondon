import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, useCursor } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

const Icon = ({ size, url, to, ...props }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const [icon] = useTexture([url]);
  const aspectRatio = icon.image.width / icon.image.height;

  // hovered animation configuration
  useFrame((state) => {
    const scaleFactor = hovered
      ? 1 + Math.sin(state.clock.elapsedTime * 7) / (size * 4)
      : 1;
    ref.current.scale
      .set(size * aspectRatio, size, 0.5)
      .multiplyScalar(scaleFactor);
  });

  useCursor(hovered);

  const handleIconClick = (e) => {
    e.stopPropagation();
    // Navigate function to redirect to the specified route
    navigate(to);
  };

  return (
    <sprite
      {...props}
      ref={ref}
      scale={[size * aspectRatio, size, 1]}
      receiveShadow
      castShadow
      onClick={handleIconClick}
      // eslint-disable-next-line
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
    >
      <spriteMaterial map={icon} />
    </sprite>
  );
};

export default Icon;
