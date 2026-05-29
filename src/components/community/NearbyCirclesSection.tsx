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

    const introEnd = 0.42;
    setShowIntro(latest < introEnd);

    const startAfterIntro = 0.44;
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

              <Title>
                Small circles for
                <span>real motherhood moments.</span>
              </Title>
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
`;

const Sticky = styled.div`
  position: sticky;
  top: 52px;
  isolation: isolate;

  min-height: calc(100vh - 82px);
  padding: 2rem 1.5rem 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;

  background: radial-gradient(
      circle at 50% 36%,
      rgba(242, 140, 140, 0.12),
      transparent 34%
    ),
    linear-gradient(180deg, #fffaf6 0%, #f8eee7 100%);
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
`;

const Header = styled.div`
  position: relative;
  z-index: 10;

  max-width: 980px;
  margin: 0 auto 2.4rem;

  text-align: center;
`;

const SmallTitle = styled.p`
  margin-bottom: 1rem;

  text-transform: uppercase;
  letter-spacing: 0.34em;

  font-size: 0.72rem;
  font-weight: 900;

  color: #b58a76;
`;

const Title = styled.h2`
  font-size: clamp(2.8rem, 5.8vw, 5.2rem);
  line-height: 0.88;
  letter-spacing: -0.075em;

  color: #4a3b33;

  span {
    display: block;
    color: #a98c78;
  }
`;

const Stage = styled.div`
  position: relative;
  z-index: 2;

  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr minmax(340px, 460px) 1fr;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const SideTextLeft = styled.div`
  position: relative;
  z-index: 2;

  min-height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 950px) {
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
  max-width: 290px;

  font-size: clamp(1.35rem, 1.9vw, 2rem);
  line-height: 1.06;
  letter-spacing: -0.055em;

  color: #4f4037;
`;

const CardStack = styled.div`
  position: relative;
  z-index: 3;

  height: 460px;

  @media (max-width: 950px) {
    height: 470px;
  }
`;

const CardGlow = styled.div`
  position: absolute;
  z-index: -1;

  width: 560px;
  height: 560px;

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
