import { MeshReflectorMaterial } from '@react-three/drei';
import React from 'react';

function Floor() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <MeshReflectorMaterial
        blur={[500, 500]}
        resolution={1024}
        mixBlur={0.5}
        mixStrength={20}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#181818"
        metalness={0.5}
      />
    </mesh>
  );
}

export default Floor;
