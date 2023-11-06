import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";

const Sky = () => {
  const ref = useRef();
  const cloud0 = useRef();

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
  };

  // cloud animation configurations
  useFrame((state, delta) => {
    ref.current.position.y = Math.cos(state.clock.elapsedTime / 2) / 2;
    ref.current.position.x = Math.sin(state.clock.elapsedTime / 2) / 2;
    cloud0.current.rotation.y -= delta / 100;
  });

  return (
    <group ref={ref}>
      <Cloud ref={cloud0} {...config} />
      <Cloud {...config} seed={2} position={[15, 0, 0]} />
      <Cloud {...config} seed={3} position={[-15, 0, 0]} />
      <Cloud {...config} seed={4} position={[25, 0, -12]} />
      <Cloud {...config} seed={5} position={[0, 0, 12]} />
    </group>
  );
};

export default Sky;
