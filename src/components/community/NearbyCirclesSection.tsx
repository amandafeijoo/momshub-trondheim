import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";

import NearbyCirclesIntro from "./nearby-circles/NearbyCirclesIntro";
import NearbyCirclesBackground from "./nearby-circles/NearbyCirclesBackground";
import NearbyCircleCard from "./nearby-circles/NearbyCircleCard";
import { circles } from "./nearby-circles/nearbyCircles.data";

export default function NearbyCirclesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [circleProgress, setCircleProgress] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [introProgress, setIntroProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIntroProgress(latest);

    const introEnd = 0.62;
    setShowIntro(latest < introEnd);
    
    const startAfterIntro = 0.64;

    const usableProgress =
      Math.max(0, latest - startAfterIntro) / (1 - startAfterIntro);

    const total = circles.length;
    const rawIndex = usableProgress * total;
    const nextIndex = Math.min(total - 1, Math.floor(rawIndex));
    const progressInsideCard = rawIndex - Math.floor(rawIndex);

    setActiveIndex(nextIndex);
    setCircleProgress(progressInsideCard);
  });

  const activeCircle = circles[activeIndex];

  return (
    <Section ref={sectionRef}>
      <Sticky>
        <BackgroundImage
          src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1780084332/fondo_community_d86bur.png"
          alt=""
        />

        <NearbyCirclesBackground />

        <AnimatePresence mode="wait">
          {showIntro && (
            <IntroLayer
              key="intro"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
            >
              <NearbyCirclesIntro circles={circles} progress={introProgress} />
            </IntroLayer>
          )}
        </AnimatePresence>

        {!showIntro && (
          <StackLayer>
            <Header>
              <SmallTitle>Nearby circles</SmallTitle>

              <Title>Find your circle.</Title>

              <Subtitle>
                Small communities for pregnancy, newborn days, friendship and
                life abroad in Trondheim.
              </Subtitle>
            </Header>

            <Stage>
              <SideTextLeft>
                <SideNumber>
                  {String(activeIndex + 1).padStart(2, "0")}
                </SideNumber>

                <SideLabel>Why moms join</SideLabel>

                <AnimatePresence mode="wait">
                  <SideQuote
                    key={activeCircle.sideLeft}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {activeCircle.sideLeft}
                  </SideQuote>
                </AnimatePresence>
              </SideTextLeft>

              <CardStack>
                <CardGlow />

                <NearbyCircleCard
                  circle={activeCircle}
                  index={activeIndex}
                  total={circles.length}
                />
              </CardStack>

              <SideTextRight>
                <SideLabel>Circle note</SideLabel>

                <AnimatePresence mode="wait">
                  <SideQuote
                    key={activeCircle.sideRight}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {activeCircle.sideRight}
                  </SideQuote>
                </AnimatePresence>

                <Counter $progress={circleProgress}>
                  <CounterText>
                    {activeIndex + 1}/{circles.length}
                  </CounterText>
                </Counter>
              </SideTextRight>
            </Stage>

            <MobileCounter>
              {activeIndex + 1}/{circles.length}
            </MobileCounter>
          </StackLayer>
        )}
      </Sticky>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  z-index: 2;
  height: 380vh;
  background: rgba(255, 248, 241, 0.3);

  @media (max-width: 768px) {
    height: 520vh;
  }

  @media (max-width: 480px) {
    height: 500vh;
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 52px;
  isolation: isolate;

  min-height: calc(100svh - 52px);
  padding: clamp(1.2rem, 4vw, 2rem) 1rem clamp(2rem, 5vw, 5rem);

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  background: #fffaf6;

  @media (max-width: 768px) {
    top: 0;
    min-height: 100svh;
    padding: 1.4rem 1rem 2rem;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center bottom;

  z-index: -4;
  opacity: 0.62;

  pointer-events: none;

  @media (max-width: 768px) {
    opacity: 0.48;
  }
`;

const IntroLayer = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
`;

const StackLayer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
`;

const Header = styled.div`
  position: relative;
  z-index: 10;

  max-width: 980px;
  margin: 0 auto clamp(1.4rem, 4vw, 2.4rem);

  text-align: center;

  @media (max-width: 768px) {
    max-width: 92%;
  }
`;

const SmallTitle = styled.p`
  margin-bottom: 1rem;

  text-transform: uppercase;
  letter-spacing: 0.34em;

  font-size: 0.72rem;
  font-weight: 900;

  color: #634d43;

  @media (max-width: 480px) {
    font-size: 0.62rem;
    letter-spacing: 0.24em;
    margin-bottom: 0.7rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.4rem, 8vw, 5.2rem);
  line-height: 0.9;
  letter-spacing: -0.075em;

  color: #b68b74;

  span {
    display: block;
    color: #a98c78;
  }

  @media (max-width: 480px) {
    font-size: clamp(2.5rem, 13vw, 4rem);
    letter-spacing: -0.065em;
  }
`;

const Subtitle = styled.p`
  margin-top: 1.2rem;

  max-width: 700px;

  font-size: clamp(0.95rem, 3.5vw, 1.35rem);
  line-height: 1.6;

  color: #74604f;
  font-weight: 500;

  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    margin-top: 1rem;
    line-height: 1.5;
  }
`;

const Stage = styled.div`
  position: relative;
  z-index: 2;

  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr minmax(320px, 460px) 1fr;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3.2rem);

  @media (max-width: 1050px) {
    grid-template-columns: minmax(280px, 520px);
    justify-content: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const SideTextLeft = styled.div`
  position: relative;
  z-index: 2;

  min-height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #d7a981;

  @media (max-width: 1050px) {
    display: none;
  }
`;

const SideTextRight = styled(SideTextLeft)`
  align-items: center;
  text-align: center;
`;

const SideNumber = styled.span`
  position: absolute;
  left: -1.6rem;
  top: -2.8rem;

  font-size: 8rem;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.08em;

  color: rgba(181, 138, 118, 0.09);
  pointer-events: none;
`;

const SideLabel = styled.span`
  display: block;
  margin-bottom: 1rem;

  color: #c39a84;

  text-transform: uppercase;
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  font-weight: 900;
`;

const SideQuote = styled(motion.h4)`
  max-width: 320px;

  font-size: clamp(1.25rem, 1.8vw, 1.5rem);
  line-height: 1.25;
  letter-spacing: -0.03em;

  color: #a18573;
  font-weight: 500;

  text-align: left;
`;

const CardStack = styled.div`
  position: relative;
  z-index: 3;

  width: min(100%, 460px);
  height: clamp(390px, 58vh, 460px);
  margin: 0 auto;

  @media (max-width: 768px) {
    height: clamp(390px, 60vh, 450px);
  }

  @media (max-width: 480px) {
    width: 100%;
    height: clamp(360px, 58vh, 420px);
  }
`;

const CardGlow = styled.div`
  position: absolute;
  z-index: -1;

  width: min(560px, 120vw);
  height: min(560px, 120vw);

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: radial-gradient(
      circle,
      rgba(242, 140, 140, 0.22),
      transparent 62%
    ),
    radial-gradient(circle, rgba(168, 191, 163, 0.12), transparent 74%);

  filter: blur(70px);
  pointer-events: none;

  @media (max-width: 480px) {
    filter: blur(45px);
    opacity: 0.8;
  }
`;

const Counter = styled.div<{ $progress: number }>`
  position: relative;
  margin-top: 2.4rem;

  width: 112px;
  height: 112px;
  border-radius: 50%;

  display: grid;
  place-items: center;

  background: conic-gradient(
    rgba(178, 144, 120, 0.7) ${({ $progress }) => $progress * 360}deg,
    rgba(74, 59, 51, 0.09) 0deg
  );

  box-shadow: 0 20px 60px rgba(178, 144, 120, 0.16);

  &::before {
    content: "";
    position: absolute;
    inset: 7px;

    border-radius: 50%;

    background: rgba(255, 248, 241, 0.94);
    border: 1px solid rgba(242, 140, 140, 0.18);
  }
`;

const CounterText = styled.span`
  position: relative;
  z-index: 2;

  color: #74655d;
  font-size: 1.45rem;
  font-weight: 700;
`;

const MobileCounter = styled.div`
  display: none;

  @media (max-width: 1050px) {
    display: block;
    margin: 1.2rem auto 0;
    text-align: center;

    color: #8d7463;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.18em;
  }

  @media (max-width: 480px) {
    margin-top: 0.8rem;
    font-size: 0.8rem;
  }
`;