import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import DonateThreeBackground from "./DonateThreeBackground";

const steps = [
  {
    number: "01",
    title: "Choose what to donate",
    text: "Select clothes, toys or baby essentials in good condition.",
  },
  {
    number: "02",
    title: "Add details and photos",
    text: "Share size, condition, pickup area and a few clear images.",
  },
  {
    number: "03",
    title: "Connect nearby",
    text: "Another mother can request the item and arrange pickup.",
  },
];

export default function DonateHowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.45,
  });

  const headerY = useTransform(progress, [0, 0.25, 1], [0, -70, -120]);
  const headerOpacity = useTransform(progress, [0, 0.38, 0.6], [1, 1, 0.45]);

  const lineScale = useTransform(progress, [0.16, 0.72], [0, 1]);

  const step1Y = useTransform(progress, [0.08, 0.28, 1], [180, 0, 0]);
  const step2Y = useTransform(progress, [0.2, 0.44, 1], [220, 0, 0]);
  const step3Y = useTransform(progress, [0.32, 0.58, 1], [260, 0, 0]);

  const step1Opacity = useTransform(progress, [0.08, 0.24], [0, 1]);
  const step2Opacity = useTransform(progress, [0.2, 0.38], [0, 1]);
  const step3Opacity = useTransform(progress, [0.32, 0.52], [0, 1]);

  const step1Scale = useTransform(progress, [0.08, 0.28], [0.88, 1]);
  const step2Scale = useTransform(progress, [0.2, 0.44], [0.88, 1]);
  const step3Scale = useTransform(progress, [0.32, 0.58], [0.88, 1]);

  const yValues = [step1Y, step2Y, step3Y];
  const opacityValues = [step1Opacity, step2Opacity, step3Opacity];
  const scaleValues = [step1Scale, step2Scale, step3Scale];

  return (
    <Section ref={sectionRef}>
      <Sticky>
        <DonateThreeBackground />

        <GlowOne />
        <GlowTwo />

        <Header style={{ y: headerY, opacity: headerOpacity }}>
          <SmallTitle>How it works</SmallTitle>

          <Title>
            Donate in three
            <span>simple steps.</span>
          </Title>
        </Header>

        <Timeline>
          <Line>
            <LineProgress style={{ scaleX: lineScale }} />
          </Line>

          {steps.map((step, index) => (
            <Step
              key={step.number}
              style={{
                y: yValues[index],
                opacity: opacityValues[index],
                scale: scaleValues[index],
              }}
            >
              <Dot>{step.number}</Dot>

              <Content>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Content>
            </Step>
          ))}
        </Timeline>
      </Sticky>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  height: 300vh;
  background: #fffaf6;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;

  background: radial-gradient(
      circle at 50% 40%,
      rgba(242, 140, 140, 0.13),
      transparent 34%
    ),
    linear-gradient(180deg, #fffaf6 0%, #f8eee7 100%);
`;

const GlowOne = styled.div`
  position: absolute;
  width: 28rem;
  height: 28rem;
  left: -8rem;
  bottom: 6rem;
  border-radius: 50%;
  background: rgba(242, 140, 140, 0.12);
  filter: blur(40px);
`;

const GlowTwo = styled.div`
  position: absolute;
  width: 24rem;
  height: 24rem;
  right: -5rem;
  top: 10rem;
  border-radius: 50%;
  background: rgba(232, 190, 150, 0.14);
  filter: blur(42px);
`;

const Header = styled(motion.div)`
  position: absolute;
  top: 13vh;
  left: 19%;
  z-index: 4;

  width: min(900px, calc(100% - 2rem));

  transform: translateX(-50%);
  text-align: center;
`;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.34em;
  color: #a96f5f;
  font-size: 0.75rem;
  font-weight: 900;
`;

const Title = styled.h2`
  margin-top: 1rem;

  font-size: clamp(3rem, 5.8vw, 6.3rem);
  line-height: 0.84;
  letter-spacing: -0.06em;

  color: #2d2622;

  span {
    display: block;
    color: #8d7663;
  }
`;

const Timeline = styled.div`
  position: absolute;
  left: 50%;
  bottom: 14vh;
  z-index: 5;

  width: min(1120px, calc(100% - 4rem));

  transform: translateX(-50%);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 850px) {
    bottom: 5vh;
    width: calc(100% - 2rem);
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Line = styled.div`
  position: absolute;
  top: 2.25rem;
  left: 8%;
  right: 8%;

  height: 1px;

  background: rgba(169, 111, 95, 0.16);
  overflow: hidden;

  @media (max-width: 850px) {
    display: none;
  }
`;

const LineProgress = styled(motion.div)`
  width: 100%;
  height: 100%;

  transform-origin: left center;

  background: linear-gradient(
    90deg,
    rgba(242, 140, 140, 0.1),
    rgba(242, 140, 140, 0.85),
    rgba(169, 111, 95, 0.18)
  );
`;

const Step = styled(motion.article)`
  position: relative;

  min-height: 260px;
  padding-top: 0;

  text-align: center;
`;

const Dot = styled.div`
  position: relative;
  z-index: 3;

  width: 4.5rem;
  height: 4.5rem;

  margin: 0 auto 2rem;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: radial-gradient(
      circle at 35% 25%,
      rgba(255, 255, 255, 0.95),
      transparent 45%
    ),
    rgba(255, 255, 255, 0.72);

  border: 3px solid rgba(242, 140, 140, 0.25);

  color: #c9896f;

  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.18em;

  box-shadow: 0 22px 60px rgba(242, 140, 140, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
`;

const Content = styled.div`
  position: relative;

  min-height: 100px;

  padding: 2rem 1.5rem;

  border-radius: 34px;

  background: rgba(255, 255, 255, 0.58);
  border: 2px solid rgba(242, 140, 140, 0.16);

  backdrop-filter: blur(22px);

  box-shadow: 0 28px 80px rgba(72, 52, 42, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);

  h3 {
    color: #7f6150;
    font-size: 1.35rem;
    line-height: 1;
  }

  p {
    max-width: 280px;
    margin: 0.75rem auto 0;

    color: #675d56;
    line-height: 1.5;
    font-size: 0.98rem;
  }
`;
