import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { softShadows, OrbitControls } from '@react-three/drei';

import CarModel from './components/CarModel';

import GlobalStyles from './styles/GlobalStyles';

softShadows();

function App() {
  return (
    <>
      <Canvas camera={{ position: [10, 2, 10], fov: 60 }}>
        <OrbitControls />
        <ambientLight intensity={0.2} />
        <spotLight position={[20, 15, 20]} angle={0.2} />
        <Suspense>
          <CarModel />
        </Suspense>
      </Canvas>
      <GlobalStyles />
    </>
  );
}

export default App;
