import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";

export default function DonateThreeBackground() {
  return (
    <CanvasWrapper>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.4} />

        <directionalLight position={[4, 6, 4]} intensity={1.8} />

        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
          <SoftRings />
        </Float>

        <Particles />
      </Canvas>
    </CanvasWrapper>
  );
}

/* =========================
   SOFT RINGS
========================= */

function SoftRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.z += delta * 0.08;
    group.current.rotation.y += delta * 0.04;
  });

  return (
    <group ref={group} position={[0, 0.4, 0]}>
      {[2.8, 3.6, 4.4].map((radius, index) => (
        <mesh key={radius} rotation={[Math.PI / 2.4, 0, index * 0.4]}>
          <torusGeometry args={[radius, 0.008, 16, 160]} />

          <meshBasicMaterial
            color={index === 1 ? "#f2a7a0" : "#d8b58c"}
            transparent
            opacity={0.22}
          />
        </mesh>
      ))}
    </group>
  );
}

/* =========================
   SEEDED RANDOM
========================= */

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/* =========================
   PARTICLES
========================= */

function Particles() {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const array = new Float32Array(180 * 3);

    for (let i = 0; i < 180; i++) {
      const r1 = seededRandom(i * 3 + 1);
      const r2 = seededRandom(i * 3 + 2);
      const r3 = seededRandom(i * 3 + 3);

      array[i * 3] = (r1 - 0.5) * 9;
      array[i * 3 + 1] = (r2 - 0.5) * 5;
      array[i * 3 + 2] = (r3 - 0.5) * 5;
    }

    return array;
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;

    points.current.rotation.y += delta * 0.025;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        size={0.035}
        color="#c9896f"
        transparent
        opacity={0.28}
        depthWrite={false}
      />
    </points>
  );
}

/* =========================
   STYLES
========================= */

const CanvasWrapper = styled.div`
  position: absolute;
  inset: 0;

  z-index: 1;

  pointer-events: none;

  opacity: 0.9;

  canvas {
    width: 100%;
    height: 100%;
  }
`;
