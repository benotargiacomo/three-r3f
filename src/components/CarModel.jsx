/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model() {
  const group = useRef();
  const { nodes } = useGLTF('/carModel.glb');

  return (
    <group ref={group} dispose={null}>
      <mesh
        geometry={nodes.farolTraseiro.geometry}
        material={nodes.farolTraseiro.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.luz_neblina.geometry}
        material={nodes.luz_neblina.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.lentesNeblina.geometry}
        material={nodes.lentesNeblina.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.pneus.geometry}
        material={nodes.pneus.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.disco_de_freio.geometry}
        material={nodes.disco_de_freio.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.freios.geometry}
        material={nodes.freios.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.rodas.geometry}
        material={nodes.rodas.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.borracha.geometry}
        material={nodes.borracha.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.lentesTraseiras.geometry}
        material={nodes.lentesTraseiras.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.chevrolet.geometry}
        material={nodes.chevrolet.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.cromado.geometry}
        material={nodes.cromado.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.espelho.geometry}
        material={nodes.espelho.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.lentesFrontais.geometry}
        material={nodes.lentesFrontais.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.farolDianteiro.geometry}
        material={nodes.farolDianteiro.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.farolDLR.geometry}
        material={nodes.farolDLR.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.vidros.geometry}
        material={nodes.vidros.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.carPaint.geometry}
        material={nodes.carPaint.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload('/carModel.glb');
