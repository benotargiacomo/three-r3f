import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { softShadows, OrbitControls } from '@react-three/drei';

import CarModel from './components/CarModel';
import Floor from './components/Floor';

import GlobalStyles from './styles/GlobalStyles';

softShadows();

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 1.5, 4], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          intensity={0.8}
          position={[0, 10, 0]}
          angle={0.2}
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Suspense>
          <CarModel />
        </Suspense>
        <Floor />
        <OrbitControls />
      </Canvas>
      <GlobalStyles />
    </>
  );
}

export default App;
