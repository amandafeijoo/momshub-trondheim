
import styled, { keyframes } from "styled-components";
import { motion, useReducedMotion } from "framer-motion";

const petals = [
  {
    id: 1,
    angle: 0,
    color: "rgba(240, 143, 139, 0.50)",
    size: 1,
  },
  {
    id: 2,
    angle: 60,
    color: "rgba(249, 209, 178, 0.56)",
    size: 0.95,
  },
  {
    id: 3,
    angle: 120,
    color: "rgba(159, 180, 147, 0.50)",
    size: 0.96,
  },
  {
    id: 4,
    angle: 180,
    color: "rgba(201, 137, 111, 0.48)",
    size: 0.98,
  },
  {
    id: 5,
    angle: 240,
    color: "rgba(224, 195, 218, 0.52)",
    size: 0.94,
  },
  {
    id: 6,
    angle: 300,
    color: "rgba(215, 183, 159, 0.50)",
    size: 0.97,
  },
];

const labels = [
  { text: "FRIENDSHIP", top: "9%", left: "54%" },
  { text: "SUPPORT", top: "25%", right: "8%" },
  { text: "BELONGING", top: "50%", left: "85%" },
  { text: "CULTURES", bottom: "11%", left: "27%" },
  { text: "STORIES", top: "55%", left: "8%" },
  { text: "CONNECTION", top: "27%", left: "4%" },
];

const dots = [
  { top: "18%", left: "30%", delay: 0 },
  { top: "23%", right: "16%", delay: 0.5 },
  { top: "47%", left: "13%", delay: 1 },
  { top: "57%", right: "5%", delay: 0.8 },
  { bottom: "27%", left: "33%", delay: 1.4 },
  { bottom: "22%", right: "22%", delay: 0.3 },
];

/* =========================
   ORBIT ANIMATIONS
========================= */

/*
  Start near the bottom-right,
  similar to your original screenshot.
*/

const orbitAnimation = keyframes`
  from {
    transform: rotate(135deg);
  }

  to {
    transform: rotate(495deg);
  }
`;

const counterAnimation = keyframes`
  from {
    transform: rotate(-135deg);
  }

  to {
    transform: rotate(-495deg);
  }
`;

/* =========================
   COMPONENT
========================= */

export default function MeetupGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <Wrapper>

      {/* ORIGINAL CIRCLE */}

      <OrbitRing />

      {/* ORIGINAL DOTS */}

      {dots.map((dot, index) => {
        const { delay, ...position } = dot;

        return (
          <Dot
            key={index}
            style={position}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -5, 0],
                    opacity: [0.45, 1, 0.45],
                  }
            }
            transition={{
              duration: 2.8,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* =========================
          ORBITAL MOVEMENT

          Same flower.
          Same size.
          Same petals.

          Only the position changes.
      ========================= */}

      <OrbitTrack>
        <OrbitPosition>
          <CounterRotation>

            {/* ORIGINAL FLOWER */}

            <Flower
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, 2, -2, 0],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              {/* ORIGINAL PETALS */}

              {petals.map((petal, index) => (
                <Petal
                  key={petal.id}
                  $angle={petal.angle}
                  $color={petal.color}
                  $size={petal.size}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -4, 0],
                          rotate: [
                            petal.angle,
                            petal.angle + 1.5,
                            petal.angle - 1.5,
                            petal.angle,
                          ],
                        }
                  }
                  transition={{
                    duration: 4.2 + index * 0.18,
                    delay: index * 0.12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* ORIGINAL CENTER */}

              <Center
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.03, 1],
                      }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CenterTitle>
                  MomsHub
                </CenterTitle>

                <CenterSub>
                  COMMUNITY
                </CenterSub>
              </Center>

            </Flower>

          </CounterRotation>
        </OrbitPosition>
      </OrbitTrack>

      {/* ORIGINAL LABELS */}

      {labels.map((label) => {
        const { text, ...position } = label;

        return (
          <Label
            key={text}
            style={position}
          >
            {text}
          </Label>
        );
      })}

    </Wrapper>
  );
}

/* =========================
   ORIGINAL WRAPPER
========================= */


const Wrapper = styled.div`
  --orbit-duration: 28s;
  --orbit-radius: 45px;
  --flower-scale: 0.8;

  position: relative;
  width: min(100%, 500px);
  aspect-ratio: 1 / 1;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: min(100%, 360px);

    --orbit-radius: 28px;
    --flower-scale: 0.56;
  }
`;


/* =========================
   ORIGINAL CIRCLE
========================= */

const OrbitRing = styled.div`
  position: absolute;
  inset: 12%;
  border-radius: 50%;
  border: 1px solid rgba(187, 129, 120, 0.18);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.24) 0%,
    rgba(255, 255, 255, 0) 72%
  );
`;

/* =========================
   NEW — ORBIT TRACK

   Rotates the position
   around the circle.
========================= */

const OrbitTrack = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;

  transform-origin: 50% 50%;

  animation:
    ${orbitAnimation}
    var(--orbit-duration)
    linear
    infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: rotate(135deg);
  }
`;

/* =========================
   NEW — ORBIT POSITION

   The center of the original
   flower is placed at the top
   of the circle.

   No scaling is applied.
========================= */



const OrbitPosition = styled.div`
  position: absolute;

  top: calc(50% - var(--orbit-radius));
  left: 50%;

  width: 100%;
  height: 100%;

  transform: translate(-50%, -50%);
`;



/* =========================
   NEW — COUNTER ROTATION

   Keeps the flower upright
   while traveling.
========================= */

const CounterRotation = styled.div`
  position: absolute;
  inset: 0;

  transform-origin: center;

  animation:
    ${counterAnimation}
    var(--orbit-duration)
    linear
    infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: rotate(-135deg);
  }
`;

/* =========================
   ORIGINAL FLOWER
========================= */

const Flower = styled(motion.div)`
  position: absolute;
  inset: 16%;
`;

/* =========================
   ORIGINAL PETAL
========================= */

const Petal = styled(motion.div)<{
  $angle: number;
  $color: string;
  $size: number;
}>`
  position: absolute;
  left: 50%;
  top: 50%;

  width: ${({ $size }) => 110 * $size}px;
  height: ${({ $size }) => 190 * $size}px;

  background: ${({ $color }) => $color};

  border-radius: 55% 55% 46% 46% / 78% 78% 30% 30%;
  border: 1px solid rgba(255, 255, 255, 0.3);

  box-shadow:
    0 10px 30px rgba(98, 75, 65, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);

  backdrop-filter: blur(5px);

  transform-origin: center 88%;
  transform: translate(-50%, -88%)
    rotate(${({ $angle }) => $angle}deg);
`;

/* =========================
   ORIGINAL CENTER
========================= */

const Center = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 62%;
  width: 128px;
  height: 128px;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(255, 250, 246, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.85);

  box-shadow:
    0 18px 44px rgba(98, 75, 65, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
`;

const CenterTitle = styled.span`
  color: #624b41;
  font-size: 0.98rem;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

const CenterSub = styled.span`
  margin-top: 0.2rem;
  color: #ad756b;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
`;

/* =========================
   ORIGINAL DOTS
========================= */

const Dot = styled(motion.span)`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d8a59b;
  box-shadow: 0 0 0 6px rgba(216, 165, 155, 0.1);
`;

/* =========================
   ORIGINAL LABELS
========================= */

const Label = styled.span`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 3;

  padding: 0.55rem 0.9rem;
  border-radius: 999px;

  background: rgba(255, 250, 246, 0.88);
  border: 1px solid rgba(187, 129, 120, 0.12);
  backdrop-filter: blur(10px);

  color: #8f7569;
  font-size: 0.68rem;
  font-weight: 750;
  letter-spacing: 0.12em;
  white-space: nowrap;

  box-shadow: 0 8px 22px rgba(98, 75, 65, 0.05);

  @media (max-width: 600px) {
    font-size: 0.58rem;
    padding: 0.45rem 0.7rem;
  }
`;
