import React from 'react';
import { Canvas } from '@react-three/fiber';
import { softShadows, OrbitControls } from '@react-three/drei';

import GlobalStyles from './styles/GlobalStyles';

softShadows();

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
}

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.2} />
        <spotLight position={[20, 15, 20]} angle={0.2} />
        <Box />
      </Canvas>
      <GlobalStyles />
    </>
  );
}

export default App;
