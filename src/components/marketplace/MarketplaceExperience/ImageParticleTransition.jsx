import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";

export default function ImageParticleTransition({ images, activeIndex }) {
  return (
    <ParticleWrapper>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <ParticleImage images={images} activeIndex={activeIndex} />
      </Canvas>
    </ParticleWrapper>
  );
}

function ParticleImage({ images, activeIndex }) {
  const pointsRef = useRef();
  const materialRef = useRef();

  const textures = useLoader(
    THREE.TextureLoader,
    images.map((item) => item.src)
  );

  const particles = useMemo(() => {
    const cols = 170;
    const rows = 95;
    const positions = [];
    const uvs = [];
    const randoms = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const px = (x / cols - 0.5) * 8.5;
        const py = (0.5 - y / rows) * 4.8;

        positions.push(px, py, 0);
        uvs.push(x / cols, 1 - y / rows);
        randoms.push(Math.random(), Math.random(), Math.random());
      }
    }

    return {
      positions: new Float32Array(positions),
      uvs: new Float32Array(uvs),
      randoms: new Float32Array(randoms),
      count: cols * rows,
    };
  }, []);

  useFrame((state) => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uTexture.value = textures[activeIndex];
    materialRef.current.uniforms.uProgress.value = THREE.MathUtils.lerp(
      materialRef.current.uniforms.uProgress.value,
      1,
      0.035
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles.positions}
          count={particles.count}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-uv"
          array={particles.uvs}
          count={particles.count}
          itemSize={2}
        />

        <bufferAttribute
          attach="attributes-aRandom"
          array={particles.randoms}
          count={particles.count}
          itemSize={3}
        />
      </bufferGeometry>

      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        uniforms={{
          uTexture: { value: textures[activeIndex] },
          uTime: { value: 0 },
          uProgress: { value: 1 },
          uSize: { value: 18 }, // ########SIZE//######
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </points>
  );
}

const vertexShader = `
  attribute vec3 aRandom;

  uniform float uTime;
  uniform float uProgress;
  uniform float uSize;

  varying vec2 vUv;
  varying float vAlpha;

  void main() {
    vUv = uv;

    vec3 pos = position;

    float noise = sin((pos.x * 2.4) + (pos.y * 3.1) + uTime * 1.8);
    float wave = smoothstep(-0.4, 0.9, noise);

    pos.z += wave * 0.45;
    pos.x += (aRandom.x - 0.5) * 0.18 * wave;
    pos.y += (aRandom.y - 0.5) * 0.18 * wave;

vAlpha = 1.0 - wave * 0.08;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    gl_PointSize = uSize * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;

  varying vec2 vUv;
  varying float vAlpha;

  void main() {
    vec4 color = texture2D(uTexture, vUv);

    float circle = distance(gl_PointCoord, vec2(0.5));
    if (circle > 0.48) discard;

color.rgb = mix(color.rgb, vec3(0.96, 0.90, 0.85), 0.05);    color.a *= vAlpha;

    gl_FragColor = color;
  }
`;

const ParticleWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 6;
  pointer-events: none;
  overflow: hidden;
`;
