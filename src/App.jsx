import React from 'react';
import { Canvas } from '@react-three/fiber';
import { softShadows, OrbitControls } from '@react-three/drei';

softShadows();

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
    </Canvas>
  );
}
