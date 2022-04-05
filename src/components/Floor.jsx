import React from 'react';

function Floor() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[5, 7]} />
      <shadowMaterial attach="material" opacity={1} />
    </mesh>
  );
}

export default Floor;
