import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import ImageParticleTransition from "./ImageParticleTransition";

const categoryImages = [
  {
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779630414/donate_marketplace_hdtsf3.png",
    className: "donate",
  },
  {
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779633231/BABY_ESSENTIALS_p4pblt.png",
    className: "essentials",
  },
  {
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779633390/HANDMADE_BABY_sjmrxy.png",
    className: "handmade",
  },
  {
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779633550/TOYS_BOOKS__b8w04b.png",
    className: "toys",
  },
  {
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779633634/PREGNANCY_ESSENTIALS_fgn29h.png",
    className: "pregnancy",
  },
];

export default function CanvasScene({ activeIndex, progress }) {
  return (
    <SceneWrapper>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1.4} />

        <directionalLight position={[4, 5, 3]} intensity={2} color="#fff4ea" />

        <BackgroundAtmosphere activeIndex={activeIndex} />
        <ParticlesField />
        <FloatingLights />
      </Canvas>
      <CategoryImage activeIndex={activeIndex} />

      <ImageParticleTransition
        images={categoryImages}
        activeIndex={activeIndex}
      />
    </SceneWrapper>
  );
}

/* =========================
   CATEGORY IMAGE
========================= */

function CategoryImage({ activeIndex }) {
  const image = categoryImages[activeIndex];

  if (!image?.src) return null;

  return (
    <ImageLayer>
      <AnimatePresence mode="wait">
        <EditorialImage
          key={image.src}
          as={motion.img}
          src={image.src}
          className={image.className}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </AnimatePresence>
    </ImageLayer>
  );
}

/* =========================
   BACKGROUND ATMOSPHERE
========================= */

function BackgroundAtmosphere({ activeIndex }) {
  const mesh = useRef();

  const colors = ["#f8ebe3", "#f5e6df", "#f7efe7", "#f4e9df", "#f7ede8"];

  useFrame(() => {
    if (!mesh.current) return;

    mesh.current.material.color.lerp(
      new THREE.Color(colors[activeIndex] || colors[0]),
      0.04
    );
  });

  return (
    <mesh ref={mesh} position={[0, 0, -5]}>
      <planeGeometry args={[40, 25]} />
      <meshBasicMaterial color={colors[0]} />
    </mesh>
  );
}

/* =========================
   PARTICLES
========================= */

function ParticlesField() {
  const points = useRef();

  const particles = useMemo(() => {
    const count = 350;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y = state.clock.elapsedTime * 0.01;
    points.current.rotation.x = state.clock.elapsedTime * 0.005;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.025} color="#ffffff" transparent opacity={0.25} />
    </points>
  );
}

/* =========================
   FLOATING LIGHTS
========================= */

function FloatingLights() {
  return (
    <>
      <Float speed={1.2} rotationIntensity={0.1}>
        <mesh position={[-3, 1, 1]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshBasicMaterial color="#f2b7b7" transparent opacity={0.25} />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.15}>
        <mesh position={[3, -1, 1]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshBasicMaterial color="#fff2dd" transparent opacity={0.22} />
        </mesh>
      </Float>
    </>
  );
}

/* =========================
   STYLES
========================= */

const SceneWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`;

const ImageLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;

    background: linear-gradient(
      90deg,
      rgba(248, 242, 235, 0.96) 0%,
      rgba(248, 242, 235, 0.82) 34%,
      rgba(248, 242, 235, 0.35) 62%,
      rgba(248, 242, 235, 0.08) 100%
    );
  }
`;

const EditorialImage = styled.img`
  position: absolute;
  inset: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center right;

  opacity: 0.42;
  filter: saturate(0.9) contrast(0.95);
  mix-blend-mode: normal;

  @media (max-width: 768px) {
    opacity: 0.28;
    object-position: center;
  }
`;
