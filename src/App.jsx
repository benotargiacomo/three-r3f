import React from 'react';
import { Canvas } from '@react-three/fiber';
import { softShadows, OrbitControls } from '@react-three/drei';

softShadows();

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <spotLight position={[20, 15, 20]} angle={0.2} />
      <Box />
    </Canvas>
  );
}
