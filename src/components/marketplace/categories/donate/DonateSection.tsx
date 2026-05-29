import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGift, FiHeart, FiUsers } from "react-icons/fi";

const cards = [
  {
    icon: <FiGift />,
    label: "Reuse",
    title: "Give items a second life",
    text: "Clothes, toys and essentials your baby has outgrown can help another family again.",
  },
  {
    icon: <FiUsers />,
    label: "Support",
    title: "Support moms nearby",
    text: "Make it easier for another mother in Trondheim to feel seen, supported and cared for.",
  },
  {
    icon: <FiHeart />,
    label: "Community",
    title: "Build community care",
    text: "A softer, kinder way to share what families already have with trust and warmth.",
  },
];

export default function DonateSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = scrollYProgress;

  const titleY = useTransform(progress, [0, 0.16, 0.28], [0, -90, -180]);
  const titleScale = useTransform(progress, [0, 0.2, 0.3], [1, 0.92, 0.84]);
  const titleOpacity = useTransform(progress, [0, 0.14, 0.24], [1, 0.45, 0]);

  const card1Y = useTransform(progress, [0, 0.18, 0.45, 1], [260, 30, 0, 0]);
  const card2Y = useTransform(progress, [0, 0.22, 0.5, 1], [340, 50, 0, 0]);
  const card3Y = useTransform(progress, [0, 0.26, 0.55, 1], [420, 70, 0, 0]);

  const card1Opacity = useTransform(progress, [0.08, 0.22, 0.36], [0, 1, 1]);
  const card2Opacity = useTransform(progress, [0.14, 0.28, 0.42], [0, 1, 1]);
  const card3Opacity = useTransform(progress, [0.2, 0.34, 0.48], [0, 1, 1]);

  const card1Scale = useTransform(progress, [0.08, 0.32, 0.72], [0.86, 1, 1]);
  const card2Scale = useTransform(progress, [0.14, 0.38, 0.76], [0.86, 1, 1]);
  const card3Scale = useTransform(progress, [0.2, 0.44, 0.8], [0.86, 1, 1]);

  return (
    <Section ref={sectionRef}>
      <StickyScene>
        <SoftOrbOne />
        <SoftOrbTwo />

        <Header style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}>
          <SmallTitle>Why donate</SmallTitle>

          <Title>
            Give baby items
            <span>a second life.</span>
          </Title>

          <Text>A softer way to support another mother nearby.</Text>
        </Header>

        <CardsScene>
          <FloatingCard
            style={{
              y: card1Y,
              opacity: card1Opacity,
              scale: card1Scale,
            }}
          >
            <CardInner card={cards[0]} />
          </FloatingCard>

          <FloatingCard
            style={{
              y: card2Y,
              opacity: card2Opacity,
              scale: card2Scale,
            }}
          >
            <CardInner card={cards[1]} />
          </FloatingCard>

          <FloatingCard
            style={{
              y: card3Y,
              opacity: card3Opacity,
              scale: card3Scale,
            }}
          >
            <CardInner card={cards[2]} />
          </FloatingCard>
        </CardsScene>
      </StickyScene>
    </Section>
  );
}

function CardInner({ card }: { card: (typeof cards)[number] }) {
  return (
    <>
      <CardGlow />

      <CardTop>
        <IconBubble>{card.icon}</IconBubble>
      </CardTop>

      <CardBody>
        <CardLabel>{card.label}</CardLabel>
        <h3>{card.title}</h3>
        <p>{card.text}</p>
      </CardBody>

      <CardBottomLine />
    </>
  );
}

const Section = styled.section`
  position: relative;
  height: 190vh;
  background: #fff8f1;
`;

const StickyScene = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;

  background: radial-gradient(
      circle at 22% 18%,
      rgba(255, 196, 190, 0.22),
      transparent 28%
    ),
    radial-gradient(
      circle at 78% 72%,
      rgba(232, 190, 150, 0.16),
      transparent 34%
    ),
    linear-gradient(180deg, #fff8f1 0%, #f9eee7 100%);
`;

const SoftOrbOne = styled.div`
  position: absolute;
  width: 18rem;
  height: 18rem;
  left: 7%;
  bottom: 10%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  filter: blur(28px);
`;

const SoftOrbTwo = styled.div`
  position: absolute;
  width: 22rem;
  height: 22rem;
  right: 6%;
  top: 18%;
  border-radius: 50%;
  background: rgba(242, 140, 140, 0.12);
  filter: blur(32px);
`;

const Header = styled(motion.div)`
  position: absolute;
  z-index: 5;
  top: 12vh;
  left: 15%;

  width: min(1100px, calc(100% - 2rem));

  transform: translateX(-50%);
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
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

const Text = styled.p`
  max-width: 670px;
  margin: 1.8rem auto 0;
  color: #675d56;
  line-height: 1.85;
  font-size: 1.05rem;
`;

const CardsScene = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5vh;
  z-index: 8;

  width: min(1180px, calc(100% - 4rem));

  transform: translateX(-50%);

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  align-items: start;

  gap: 1.4rem;

  pointer-events: none;

  @media (max-width: 850px) {
    bottom: 6vh;

    width: calc(100% - 2rem);

    grid-template-columns: 1fr;

    gap: 1rem;
  }
`;

const FloatingCard = styled(motion.article)`
  position: relative;

  height: 430px;

  padding: 1.65rem;

  border-radius: 38px;

  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.92),
    rgba(255, 248, 241, 0.66)
  );

  border: 1px solid rgba(242, 140, 140, 0.2);

  box-shadow: 0 34px 100px rgba(72, 52, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);

  backdrop-filter: blur(24px);

  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    height: 360px;
  }
`;

const CardGlow = styled.div`
  position: absolute;
  width: 16rem;
  height: 16rem;
  right: -7rem;
  top: -7rem;

  background: radial-gradient(
    circle,
    rgba(242, 140, 140, 0.2),
    transparent 68%
  );
  filter: blur(10px);
`;

const CardTop = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconBubble = styled.div`
  width: 3.35rem;
  height: 3.35rem;

  display: grid;
  place-items: center;

  border-radius: 999px;

  background: radial-gradient(
      circle at 35% 25%,
      rgba(255, 255, 255, 0.92),
      transparent 45%
    ),
    rgba(242, 140, 140, 0.12);

  border: 1px solid rgba(242, 140, 140, 0.26);

  color: #ef7f86;

  svg {
    font-size: 1.35rem;
  }
`;

const CardBody = styled.div`
  position: relative;
  z-index: 2;

  margin-top: 4.8rem;

  h3 {
    max-width: 310px;
    font-size: clamp(2rem, 2.8vw, 2.65rem);
    line-height: 0.88;
    letter-spacing: -0.075em;
    color: #3f332d;
  }

  p {
    max-width: 315px;
    margin-top: 1.25rem;
    color: #675d56;
    line-height: 1.75;
    font-size: 0.98rem;
  }
`;

const CardLabel = styled.span`
  display: block;
  margin-bottom: 0.9rem;

  color: #a96f5f;

  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`;

const CardBottomLine = styled.div`
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1.45rem;

  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(242, 140, 140, 0.48),
    rgba(255, 255, 255, 0.1)
  );
`;
