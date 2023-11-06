import * as THREE from "three";
import React, { forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Map = forwardRef(({ ...props }, ref) => {
  // declare and load texture
  const [londonmap] = useTexture(["../assets/map_images/mapPlane.png"]);
  // set size of plane to the dimentions of the texture
  const aspectRatio = londonmap.image.width / londonmap.image.height;

  // UseFrame used to update the rotation on each frame. Ensures the camera is always looking at the map
  useFrame(({ camera }) => {
    if (ref.current) {
      // Calculate the vector from the map's position to the camera's position
      const lookAtVector = new THREE.Vector3();
      camera.getWorldPosition(lookAtVector);
      ref.current.lookAt(lookAtVector.x, lookAtVector.y, lookAtVector.z);
    }
  });

  return (
    <sprite ref={ref} {...props} scale={[aspectRatio * 70, 70]}>
      <spriteMaterial map={londonmap} />
    </sprite>
  );
});

export default Map;
