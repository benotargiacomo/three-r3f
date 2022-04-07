import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  softShadows,
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from '@react-three/drei';

import ViewportNavigation from './components/ViewportNavigation';
import CarModel from './components/CarModel';
import Floor from './components/Floor';

import GlobalStyles from './styles/GlobalStyles';

softShadows();

function App() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [cam, setCam] = useState([3, 1.5, 4]);
  // const [currentView, setCurrentView] = useState('PERSPECTIVE');

  return (
    <>
      <ViewportNavigation autoRotate={autoRotate} setCam={setCam} setAutoRotate={setAutoRotate} />
      <Canvas shadows dpr={[1, 2]} className="canvas">
        <PerspectiveCamera makeDefault position={cam} fov={45} />
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
        <Suspense>
          <group scale={0.8}>
            <CarModel />
            <Floor />
          </group>
        </Suspense>
        <Environment preset="city" />
        <OrbitControls
          rotateSpeed={0.2}
          autoRotate={autoRotate}
          autoRotateSpeed={0.2}
          enablePan={false}
          minDistance={3.5}
          maxDistance={4.7}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 2.4}
        />
      </Canvas>
      <GlobalStyles />
    </>
  );
}

export default App;
