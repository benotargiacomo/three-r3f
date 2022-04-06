import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  softShadows,
  // PresentationControls,
  OrbitControls,
  // Environment,
  // ContactShadows,
} from '@react-three/drei';

import CarModel from './components/CarModel';
import Floor from './components/Floor';

import GlobalStyles from './styles/GlobalStyles';

softShadows();

function App() {
  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [3, 1.5, 4], fov: 45 }}
        className="canvas"
      >
        <color attach="background" args={['#181818']} />
        <fog attach="fog" args={['#181818', 10, 20]} />
        {/* <ambientLight intensity={0.3} /> */}
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
        {/* <PresentationControls polar={[0, 0]} config={{ mass: 1.3, tension: 500 }}> */}
        <Suspense>
          <group scale={0.8}>
            <CarModel />
            <Floor />
          </group>
        </Suspense>
        {/* </PresentationControls> */}
        {/* <ContactShadows
          resolution={2048}
          frames={1}
          position={[0, -1.16, 0]}
          scale={10}
          blur={0.75}
          opacity={1}
          far={10}
        /> */}
        {/* <Environment preset="warehouse" /> */}
        <OrbitControls
          rotateSpeed={0.2}
          autoRotate
          autoRotateSpeed={0.2}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 2.4}
        />
      </Canvas>
      <GlobalStyles />
    </>
  );
}

export default App;
