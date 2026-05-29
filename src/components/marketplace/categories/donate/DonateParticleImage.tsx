import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";

type Props = {
  image: string;
};

export default function DonateParticleImage({ image }: Props) {
  return (
    <ParticleWrapper>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <ParticleImage image={image} />
      </Canvas>
    </ParticleWrapper>
  );
}

function ParticleImage({ image }: Props) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const texture = useLoader(THREE.TextureLoader, image);

  const particles = useMemo(() => {
    const cols = 180;
    const rows = 105;

    const positions: number[] = [];
    const uvs: number[] = [];
    const randoms: number[] = [];

    const random = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const px = (x / cols - 0.5) * 7.6;
        const py = (0.5 - y / rows) * 4.3;

        positions.push(px, py, 0);
        uvs.push(x / cols, 1 - y / rows);

        randoms.push(
          random(x * 10 + y),
          random(x * 20 + y),
          random(x * 30 + y)
        );
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

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

    materialRef.current.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
      materialRef.current.uniforms.uMouse.value.x,
      mouseX,
      0.08
    );

    materialRef.current.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
      materialRef.current.uniforms.uMouse.value.y,
      mouseY,
      0.08
    );
  });

  return (
    <points>
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
          uTexture: { value: texture },
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uSize: { value: 15 },
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
  uniform vec2 uMouse;
  uniform float uSize;

  varying vec2 vUv;
  varying float vAlpha;

  void main() {
    vUv = uv;

    vec3 pos = position;

    vec2 mouse = vec2(uMouse.x * 3.8, uMouse.y * 2.2);
    float dist = distance(pos.xy, mouse);

    float influence = smoothstep(1.4, 0.0, dist);

    float wave = sin(pos.x * 2.4 + pos.y * 3.2 + uTime * 1.4);

    pos.z += wave * 0.16;
    pos.z += influence * 0.85;

    pos.x += (pos.x - mouse.x) * influence * 0.12;
    pos.y += (pos.y - mouse.y) * influence * 0.12;

    pos.x += (aRandom.x - 0.5) * influence * 0.35;
    pos.y += (aRandom.y - 0.5) * influence * 0.35;

    vAlpha = 0.94 - influence * 0.18;

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

    color.rgb = mix(color.rgb, vec3(0.98, 0.91, 0.87), 0.16);
    color.a *= vAlpha;

    gl_FragColor = color;
  }
`;

const ParticleWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: auto;
  overflow: hidden;

  canvas {
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    opacity: 0.55;
  }
`;
