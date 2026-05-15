import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const petals = [
  {
    color: "#f08f8b",
    angle: 0,
    scale: [0.42, 0.9, 0.34],
  },
  {
    color: "#f6dfcf",
    angle: Math.PI / 3,
    scale: [0.36, 0.78, 0.3],
  },
  {
    color: "#9fb493",
    angle: (Math.PI / 3) * 2,
    scale: [0.38, 0.82, 0.32],
  },
  {
    color: "#c9896f",
    angle: Math.PI,
    scale: [0.38, 0.82, 0.32],
  },
  {
    color: "#ead8c9",
    angle: (Math.PI / 3) * 4,
    scale: [0.34, 0.74, 0.28],
  },
  {
    color: "#d7b79f",
    angle: (Math.PI / 3) * 5,
    scale: [0.36, 0.78, 0.3],
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function PetalUnion() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<Array<THREE.Mesh | null>>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollProgress =
      maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0;

    const openAmount =
      Math.max(0, Math.sin(scrollProgress * Math.PI * 4)) * 0.42;

    if (groupRef.current) {
      groupRef.current.rotation.y =
        time * 0.08 + scrollProgress * Math.PI * 3.2;

      groupRef.current.rotation.x = Math.sin(time * 0.22) * 0.12;

      groupRef.current.rotation.z =
        time * 0.05 + scrollProgress * Math.PI * 0.6;

      groupRef.current.position.y =
        -scrollProgress * 0.85 + Math.sin(time * 0.42) * 0.08;

      groupRef.current.position.x =
        Math.sin(scrollProgress * Math.PI * 2) * 0.25;

      const scale = 1.18 + Math.sin(scrollProgress * Math.PI * 2) * 0.08;

      groupRef.current.scale.setScalar(scale);
    }

    petals.forEach((petal, index) => {
      const mesh = meshRefs.current[index];
      if (!mesh) return;

      const radius = 0.52 + openAmount;

      mesh.position.x =
        Math.cos(petal.angle) * radius + Math.sin(time * 0.55 + index) * 0.025;

      mesh.position.y =
        Math.sin(petal.angle) * radius + Math.cos(time * 0.5 + index) * 0.025;

      mesh.position.z = Math.sin(time * 0.35 + index) * 0.06;

      mesh.rotation.z = petal.angle - Math.PI / 2;
      mesh.rotation.x = Math.sin(time * 0.28 + index) * 0.18;
      mesh.rotation.y = time * 0.08 + index * 0.18;
    });
  });

  return (
    <Float speed={1.05} rotationIntensity={0.16} floatIntensity={0.25}>
      <group ref={groupRef}>
        {petals.map((petal, index) => (
          <mesh
            key={index}
            ref={(element) => {
              meshRefs.current[index] = element;
            }}
            scale={petal.scale as [number, number, number]}
          >
            <sphereGeometry args={[1, 96, 96]} />

            <MeshDistortMaterial
              color={petal.color}
              roughness={0.8}
              metalness={0}
              distort={0.42}
              speed={1.2 + index * 0.08}
              transparent
              opacity={0.86}
            />
          </mesh>
        ))}

        <mesh scale={[0.42, 0.42, 0.42]}>
          <sphereGeometry args={[1, 96, 96]} />

          <MeshDistortMaterial
            color="#fff4ec"
            roughness={0.82}
            metalness={0}
            distort={0.3}
            speed={1.1}
            transparent
            opacity={0.92}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function GlobalScene() {
  return (
    <SceneWrapper>
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        dpr={[1, 1.7]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.82} />

        <directionalLight
          position={[4, 4, 5]}
          intensity={0.75}
          color="#ffe1d2"
        />

        <pointLight position={[-4, -2, 3]} intensity={1.15} color="#f2a59a" />

        <pointLight position={[3, -3, 2]} intensity={0.72} color="#9fb493" />

        <PetalUnion />

        <Environment preset="sunset" />
      </Canvas>
    </SceneWrapper>
  );
}

const SceneWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 1;
`;
