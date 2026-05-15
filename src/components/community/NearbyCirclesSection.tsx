import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import { FiUsers, FiCoffee, FiHeart, FiSun, FiGlobe } from "react-icons/fi";
import NearbyCirclesIntro from "./NearbyCirclesIntro";

const circles = [
  {
    title: "Pregnant moms",
    icon: <FiHeart />,
    subtitle: "A gentle circle before baby arrives.",
    text: "Share birth prep, appointments, questions and emotional support with moms walking the same stage.",
    sideLeft: "For questions, calm support and shared preparation.",
    sideRight: "A soft space for the beginning of motherhood.",
    tag: "PREGNANCY",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778794442/pregnantmoms_lrsxlj.png",
  },
  {
    title: "Newborn moms",
    icon: <FiCoffee />,
    subtitle: "For the first sleepy months.",
    text: "Feeding questions, first walks, tiny wins and honest conversations with moms nearby.",
    sideLeft: "Sleepy mornings. First walks. Real support.",
    sideRight: "For babies from 0–6 months.",
    tag: "NEWBORN",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778795648/newborns_ptl2sj.png",
  },
  {
    title: "International families",
    icon: <FiGlobe />,
    subtitle: "Build a life abroad, together.",
    text: "Meet families navigating languages, cultures, routines and motherhood in Trondheim.",
    sideLeft: "For moms building home far from home.",
    sideRight: "Different cultures, same need for connection.",
    tag: "GLOBAL",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778796087/families_woa2xj.png",
  },
  {
    title: "Coffee meetups",
    icon: <FiCoffee />,
    subtitle: "Small gatherings, real conversations.",
    text: "Soft coffee mornings to talk, laugh, recharge and meet moms close to you.",
    sideLeft: "A warm reason to leave the house.",
    sideRight: "Casual meetups around Trondheim.",
    tag: "MEETUPS",
    image:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778845573/coffeemeetups_ee9isa.png",
  },
  {
    title: "Walking groups",
    icon: <FiSun />,
    subtitle: "Fresh air and easy conversations.",
    text: "Stroller-friendly walks through Trondheim’s calm neighborhoods and parks.",
    sideLeft: "Move gently. Talk freely. Feel connected.",
    sideRight: "Perfect for stroller walks.",
    tag: "WALKS",
  },
  {
    title: "First-time moms",
    icon: <FiUsers />,
    subtitle: "For all the firsts.",
    text: "Questions, reassurance, small doubts and big motherhood moments shared together.",
    sideLeft: "Because everything feels new at first.",
    sideRight: "A circle for first-time moms.",
    tag: "SUPPORT",
  },
];

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

    const introEnd = 0.46;
    setShowIntro(latest < introEnd);

    const startAfterIntro = 0.48;
    const usableProgress =
      Math.max(0, latest - startAfterIntro) / (1 - startAfterIntro);

    const total = circles.length;
    const rawIndex = usableProgress * total;
    const nextIndex = Math.min(total - 1, Math.floor(rawIndex));
    const progressInsideCard = rawIndex - nextIndex;

    setActiveIndex(nextIndex);
    setCircleProgress(progressInsideCard);
  });

  const activeCircle = circles[activeIndex];

  return (
    <Section ref={sectionRef}>
      <Sticky>
        <AnimatePresence mode="wait">
          {showIntro && (
            <IntroLayer
              key="intro"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <NearbyCirclesIntro circles={circles} progress={introProgress} />
            </IntroLayer>
          )}
        </AnimatePresence>

        {!showIntro && (
          <StackLayer
            key="stack"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <Header>
              <SmallTitle>Nearby circles</SmallTitle>
              <Title>Small circles for real motherhood moments.</Title>
            </Header>

            <Stage>
              <EditorialLines aria-hidden="true">
                <LineOne />
                <LineTwo />
                <LineThree />
                <HorizontalLine />
              </EditorialLines>

              <SideTextLeft>
                <ChangingText
                  key={activeCircle.sideLeft}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  {activeCircle.sideLeft}
                </ChangingText>
              </SideTextLeft>

              <CardStack>
                {circles.map((circle, index) => {
                  const isActive = index === activeIndex;
                  const isNext = index > activeIndex;
                  const distance = index - activeIndex;

                  return (
                    <CircleCard
                      key={circle.title}
                      animate={{
                        opacity: isActive ? 1 : isNext ? 0.14 : 0,
                        y: isActive ? 0 : isNext ? 34 * distance : 90,
                        scale: isActive ? 1 : 0.94,
                        rotate: isActive ? 0 : index % 2 === 0 ? -2 : 2,
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ zIndex: circles.length - index }}
                    >
                      <CardTop>
                        <CardIcon>{circle.icon}</CardIcon>
                        <CardTag>{circle.tag}</CardTag>
                      </CardTop>

                      <CardContent>
                        <CardNumber>
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(circles.length).padStart(2, "0")}
                        </CardNumber>

                        <CardTitle>{circle.title}</CardTitle>
                        <CardSubtitle>{circle.subtitle}</CardSubtitle>
                        <CardText>{circle.text}</CardText>
                      </CardContent>

                      <CardButton>
                        Join circle <span>→</span>
                      </CardButton>
                    </CircleCard>
                  );
                })}
              </CardStack>

              <SideTextRight>
                <ChangingText
                  key={activeCircle.sideRight}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  {activeCircle.sideRight}
                </ChangingText>

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
  height: 760vh;
  background: rgba(255, 248, 241, 0.3);
`;

const Sticky = styled.div`
  position: sticky;
  top: 52px;
  min-height: calc(100vh - 82px);
  padding: 2rem 1.5rem 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
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

const StackLayer = styled(motion.div)`
  position: relative;
  z-index: 10;
`;

const Header = styled.div`
  position: relative;
  z-index: 10;
  max-width: 900px;
  margin: 0 auto 3rem;
  text-align: center;
`;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
  color: #a96f5f;
  margin-bottom: 1rem;
  font-weight: 800;
`;

const Title = styled.h2`
  font-size: clamp(2.4rem, 5.3vw, 4.5rem);
  line-height: 0.92;
  letter-spacing: -0.065em;
  color: #2f2a25;
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
  gap: 3rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const EditorialLines = styled.div`
  position: absolute;
  inset: -4rem -2rem;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const HorizontalLine = styled.span`
  position: absolute;
  top: 48%;
  left: 5%;
  width: 90%;
  height: 1px;
  background: rgba(74, 59, 51, 0.16);
`;

const LineOne = styled.span`
  position: absolute;
  left: 4%;
  top: 8%;
  width: 360px;
  height: 520px;
  border: 1px solid rgba(150, 112, 90, 0.18);
  border-radius: 48% 52% 45% 55%;
  transform: rotate(24deg);
`;

const LineTwo = styled.span`
  position: absolute;
  right: 7%;
  top: 12%;
  width: 420px;
  height: 500px;
  border: 1px solid rgba(150, 112, 90, 0.2);
  border-radius: 55% 45% 52% 48%;
  transform: rotate(-32deg);
`;

const LineThree = styled.span`
  position: absolute;
  left: 38%;
  top: -4%;
  width: 340px;
  height: 620px;
  border: 1px solid rgba(150, 112, 90, 0.14);
  border-radius: 50%;
  transform: rotate(8deg);
`;

const SideTextLeft = styled.div`
  position: relative;
  z-index: 2;
  min-height: 120px;

  font-size: clamp(0.95rem, 1.45vw, 1.25rem);
  line-height: 1.35;
  font-weight: 500;
  letter-spacing: -0.02em;

  color: #2f2a25;
  text-transform: uppercase;

  @media (max-width: 950px) {
    display: none;
  }
`;

const SideTextRight = styled(SideTextLeft)`
  text-align: center;
`;

const ChangingText = styled(motion.p)`
  position: absolute;
  inset: 0;
`;

const CardStack = styled.div`
  position: relative;
  z-index: 3;
  height: 460px;

  @media (max-width: 950px) {
    height: 470px;
  }
`;

const CircleCard = styled(motion.article)`
  position: absolute;
  inset: 0;

  padding: 1.8rem;
  border-radius: 38px;
  overflow: hidden;

  background: radial-gradient(
      circle at 20% 10%,
      rgba(242, 140, 140, 0.22),
      transparent 34%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(168, 191, 163, 0.18),
      transparent 38%
    ),
    rgba(255, 255, 255, 0.68);

  border: 1px solid rgba(242, 140, 140, 0.18);
  backdrop-filter: blur(22px);

  box-shadow: 0 35px 110px rgba(74, 54, 44, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.85);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;

  display: grid;
  place-items: center;

  color: #f28c8c;
  font-size: 1.25rem;
  border: 2px solid rgba(244, 189, 189, 0.18);

  background: radial-gradient(
      circle at 30% 20%,
      rgba(255, 255, 255, 0.9),
      transparent 32%
    ),
    rgba(242, 140, 140, 0.13);
`;

const CardTag = styled.span`
  width: fit-content;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;

  background: rgba(255, 250, 246, 0.76);
  border: 1px solid rgba(242, 140, 140, 0.18);

  color: #8c6b5c;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.14em;
`;

const CardContent = styled.div``;

const CardNumber = styled.p`
  margin-bottom: 1rem;
  color: #c9896f;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.14em;
`;

const CardTitle = styled.h3`
  font-size: clamp(2.3rem, 4.5vw, 4rem);
  line-height: 0.86;
  letter-spacing: -0.07em;
  color: #4a3b33;
`;

const CardSubtitle = styled.p`
  margin-top: 1.1rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: #8d7663;
`;

const CardText = styled.p`
  margin-top: 0.9rem;
  line-height: 1.7;
  color: #5f554c;
`;

const CardButton = styled.button`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 0.45rem;

  border: none;
  padding: 0;
  background: transparent;

  color: #f07f88;
  font-weight: 900;
  font-size: 1rem;
  letter-spacing: -0.02em;

  cursor: pointer;

  span {
    font-size: 1.4rem;
    line-height: 1;
    transition: transform 0.35s ease;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;

const Counter = styled.div<{ $progress: number }>`
  position: absolute;
  left: 50%;
  bottom: -3.5rem;
  transform: translateX(-50%);

  width: 112px;
  height: 112px;
  border-radius: 50%;

  display: grid;
  place-items: center;

  color: #7a7978;
  font-size: 1.5rem;

  background: conic-gradient(
    rgba(130, 103, 89, 0.55) ${({ $progress }) => $progress * 360}deg,
    rgba(74, 59, 51, 0.1) 0deg
  );

  &::before {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    background: rgba(255, 248, 241, 0.92);
    border: 2px solid rgba(242, 140, 140, 0.16);
  }
`;

const CounterText = styled.span`
  position: relative;
  z-index: 2;
`;
