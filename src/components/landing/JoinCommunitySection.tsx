
import { useId } from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiInstagram } from "react-icons/fi";

/* =========================
   LINKS
========================= */

const FACEBOOK_URL =
  "https://www.facebook.com/groups/1924881931520212/";

const INSTAGRAM_URL =
  "https://www.instagram.com/momshubtrondheim/";

/* =========================
   FLOWER COLORS
========================= */

const petals = [
  { rotation: 0, color: "rgba(224, 195, 218, 0.72)" },
  { rotation: 60, color: "rgba(245, 205, 178, 0.72)" },
  { rotation: 120, color: "rgba(238, 167, 171, 0.72)" },
  { rotation: 180, color: "rgba(249, 216, 197, 0.70)" },
  { rotation: 240, color: "rgba(175, 192, 169, 0.74)" },
  { rotation: 300, color: "rgba(241, 173, 153, 0.72)" },
];

/* =========================
   ANIMATED MOMSHUB LOGO
========================= */

function AnimatedMomsHubLogo() {
  const reduceMotion = useReducedMotion();

  // Unique IDs prevent SVG conflicts
  const id = useId().replace(/:/g, "");
  const topArcId = `${id}-top`;
  const bottomArcId = `${id}-bottom`;

  return (
    <LogoWrapper
      role="img"
      aria-label="MomsHub Trondheim - International Moms Community"
    >
      {/* ROTATING FLOWER */}

      <Bloom
        animate={
          reduceMotion
            ? { rotate: 0, scale: 1 }
            : {
                rotate: 360,
                scale: [1, 1.025, 1],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                rotate: {
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
      >
        {petals.map((petal) => (
          <Petal
            key={petal.rotation}
            $rotation={petal.rotation}
            $color={petal.color}
          />
        ))}
      </Bloom>

      {/* FIXED CIRCULAR TEXT */}

      <LogoRing
        viewBox="0 0 500 500"
        aria-hidden="true"
      >
        <defs>
          <path
            id={topArcId}
            d="M60 250 A190 190 0 0 1 440 250"
          />

          <path
            id={bottomArcId}
            d="M60 250 A190 190 0 0 0 440 250"
          />
        </defs>

        {/* Delicate outer circle */}

        <circle
          className="outer-ring"
          cx="250"
          cy="250"
          r="218"
        />

        {/* Upper lettering */}

        <text className="logo-top">
          <textPath
            href={`#${topArcId}`}
            startOffset="50%"
            textAnchor="middle"
          >
            MOMSHUB TRONDHEIM
          </textPath>
        </text>

        {/* Side dots */}

        <circle
          className="side-dot"
          cx="28"
          cy="250"
          r="5"
        />

        <circle
          className="side-dot"
          cx="472"
          cy="250"
          r="5"
        />

        {/* Lower lettering */}

        <text className="logo-bottom">
          <textPath
            href={`#${bottomArcId}`}
            startOffset="50%"
            textAnchor="middle"
          >
            INTERNATIONAL MOMS COMMUNITY
          </textPath>
        </text>
      </LogoRing>
    </LogoWrapper>
  );
}

/* =========================
   JOIN COMMUNITY SECTION
========================= */

export default function JoinCommunitySection() {
  return (
    <Section id="join-community">
      <Container>

        {/* LEFT — ANIMATED LOGO */}

        <FlowerColumn
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <AnimatedMomsHubLogo />
        </FlowerColumn>

        {/* RIGHT — CONTENT */}

        <Content
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SmallTitle>
            YOUR COMMUNITY IS HERE
          </SmallTitle>

          <Title>
            There's a place
            <Accent>for you here</Accent>
          </Title>

          <Description>
            New to Trondheim? Expecting a baby?
            Raising little ones far from home?
          </Description>

          <Description>
            Wherever you are in your motherhood journey,
            you're welcome at MomsHub. Come connect,
            make new friends and share experiences with
            other international moms.
          </Description>

          <Actions>
            <PrimaryButton
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our community
              <FiArrowUpRight />
            </PrimaryButton>

            <SecondaryButton
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
              Follow our journey
            </SecondaryButton>
          </Actions>

          <Signature>
            Moms need moms
          </Signature>
        </Content>
      </Container>
    </Section>
  );
}

/* =========================
   SECTION
========================= */


const Section = styled.section`
  position: relative;
  z-index: 2;
  isolation: isolate;
  overflow: hidden;

  padding: 8rem 1.5rem 3rem;
  background: #624b41;
  scroll-margin-top: 90px;

  &::before {
    content: "";
    position: absolute;
    width: 650px;
    height: 650px;
    left: -250px;
    top: -200px;
    border-radius: 50%;
    background: rgba(232, 173, 164, 0.09);
    filter: blur(80px);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    right: -180px;
    bottom: -220px;
    border-radius: 50%;
    background: rgba(175, 192, 169, 0.09);
    filter: blur(80px);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 5rem 1.25rem 2.5rem;
  }
`;


/* =========================
   MAIN LAYOUT
========================= */

const Container = styled.div`
  position: relative;
  z-index: 1;

  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.85fr 1.15fr;

  align-items: center;
  gap: clamp(2rem, 5vw, 6rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* =========================
   LOGO COLUMN
========================= */

const FlowerColumn = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  position: relative;

  width: min(100%, 440px);
  aspect-ratio: 1;

  flex-shrink: 0;

  filter: drop-shadow(
    0 20px 35px rgba(30, 18, 15, 0.1)
  );

  @media (max-width: 900px) {
    width: min(85vw, 350px);
    margin: 0 auto;
  }
`;

/* =========================
   ANIMATED FLOWER
========================= */

const Bloom = styled(motion.div)`
  position: absolute;

  width: 62%;
  height: 62%;

  top: 19%;
  left: 19%;

  transform-origin: center center;
  will-change: transform;
`;

const Petal = styled.div<{
  $rotation: number;
  $color: string;
}>`
  position: absolute;

  width: 25%;
  height: 46%;

  left: 37.5%;
  top: 4%;

  border-radius: 50%;

  background: ${({ $color }) => $color};

  border: 1px solid rgba(231, 192, 133, 0.7);

  transform-origin: center bottom;

  transform: rotate(
    ${({ $rotation }) => $rotation}deg
  );

  mix-blend-mode: screen;
`;

/* =========================
   CIRCULAR LOGO TYPOGRAPHY
========================= */

const LogoRing = styled.svg`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  overflow: visible;
  pointer-events: none;

  text {
    fill: #f5ddd2;

    font-family: Arial, sans-serif;
    font-weight: 500;
  }

  .logo-top {
    font-size: 24px;
    letter-spacing: 3px;
  }

  .logo-bottom {
    font-size: 18px;
    letter-spacing: 2.6px;
  }

  .side-dot {
    fill: #e8b4a9;
  }

  .outer-ring {
    fill: none;

    stroke: rgba(232, 180, 169, 0.3);
    stroke-width: 1;
  }
`;

/* =========================
   CONTENT
========================= */

const Content = styled(motion.div)`
  min-width: 0;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const SmallTitle = styled.p`
  margin: 0 0 1.8rem;

  color: #e9b7aa;
  text-transform: uppercase;
  letter-spacing: 0.22em;

  font-size: 0.75rem;
  font-weight: 700;
`;

const Title = styled.h2`
  margin: 0 0 2rem;

  color: #fff8f2;

  font-size: clamp(3.4rem, 5.5vw, 6rem);
  font-weight: 750;
  letter-spacing: -0.055em;
  line-height: 1.05;

  @media (max-width: 600px) {
    font-size: clamp(2.9rem, 11vw, 4.2rem);
  }
`;

const Accent = styled.span`
  display: block;
  margin-top: 0.2rem;

  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.045em;

  color: #e8b4a9;
`;

const Description = styled.p`
  max-width: 570px;
  margin: 0 0 1.1rem;

  color: #f2e3db;

  font-size: 1.05rem;
  line-height: 1.85;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

/* =========================
   BUTTONS
========================= */

const Actions = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const BaseButton = styled.a`
  min-height: 55px;
  padding: 0.9rem 1.5rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border-radius: 999px;
  text-decoration: none;

  font-size: 0.9rem;
  font-weight: 700;

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 3px solid #fff8f2;
    outline-offset: 4px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: #e8b4a9;
  color: #432f2a;

  &:hover {
    background: #f3c7bd;
  }

  svg {
    font-size: 1.15rem;
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: transparent;

  border: 1px solid rgba(255, 248, 242, 0.45);
  color: #fff8f2;

  &:hover {
    background: rgba(255, 248, 242, 0.1);
    border-color: #fff8f2;
  }

  svg {
    font-size: 1.15rem;
  }
`;

/* =========================
   SIGNATURE
========================= */

const Signature = styled.p`
  margin: 3rem 0 0;

  color: #e8b4a9;

  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.35rem;
  font-style: italic;
`;
