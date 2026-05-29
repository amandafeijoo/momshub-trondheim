import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";

export default function NearbyCirclesBackground() {
  return (
    <CanvasWrapper>
      <Canvas camera={{ position: [0, 0, 9], fov: 42 }} dpr={[1, 1.4]}>
        <ambientLight intensity={1.25} />
        <directionalLight position={[4, 6, 4]} intensity={1.5} />

        <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.65}>
          <SoftRings />
        </Float>

        <Particles />
      </Canvas>
    </CanvasWrapper>
  );
}

/* =========================
   SOFT PREMIUM RINGS
========================= */

function SoftRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.z += delta * 0.035;
    group.current.rotation.y += delta * 0.02;

    const goldRing = group.current.children[1] as THREE.Mesh;
    const goldMaterial = goldRing.material as THREE.MeshBasicMaterial;

    if (goldMaterial) {
      goldMaterial.opacity =
        0.13 + Math.sin(state.clock.elapsedTime * 1.5) * 0.035;
    }
  });

  return (
    <group ref={group} position={[0, -0.05, -1.2]}>
      {/* GOLDEN AURA */}
      <mesh position={[0, 0, -0.25]}>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshBasicMaterial
          color="#e6c88b"
          transparent
          opacity={0.035}
          depthWrite={false}
        />
      </mesh>

      {/* SOFT PINK RING */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[3.8, 0.006, 16, 180]} />
        <meshBasicMaterial
          color="#efc5c0"
          transparent
          opacity={2.98}
          depthWrite={false}
        />
      </mesh>

      {/* GOLD RING */}
      <mesh rotation={[Math.PI / 2.5, 0, 0.6]}>
        <torusGeometry args={[4.9, 0.008, 16, 180]} />
        <meshBasicMaterial
          color="#d8bf8d"
          transparent
          opacity={1}
          depthWrite={false}
        />
      </mesh>

      {/* CHAMPAGNE RING */}
      <mesh rotation={[Math.PI / 2.5, 0, 1.1]}>
        <torusGeometry args={[6.1, 0.005, 16, 180]} />
        <meshBasicMaterial
          color="#e7d7c8"
          transparent
          opacity={1.035}
          depthWrite={false}
        />
      </mesh>
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
    const array = new Float32Array(120 * 3);

    for (let i = 0; i < 120; i++) {
      const r1 = seededRandom(i * 3 + 1);
      const r2 = seededRandom(i * 3 + 2);
      const r3 = seededRandom(i * 3 + 3);

      array[i * 3] = (r1 - 0.5) * 11;
      array[i * 3 + 1] = (r2 - 0.5) * 5.5;
      array[i * 3 + 2] = (r3 - 0.5) * 4;
    }

    return array;
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;

    points.current.rotation.y += delta * 0.008;
  });

  return (
    <points ref={points} position={[0, 0, -2.5]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        size={0.022}
        color="#c9896f"
        transparent
        opacity={0.16}
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
  z-index: 0;

  pointer-events: none;
  opacity: 0.9;

  canvas {
    width: 100%;
    height: 100%;
  }
`;
