import styled from "styled-components";
import { motion } from "framer-motion";
import { FiHeart, FiScissors, FiUser, FiStar } from "react-icons/fi";

const makers = [
  {
    name: "Maria",
    origin: "Spain",
    craft: "Knitted baby sets",
    detail: "Soft handmade pieces for newborns and winter days.",
    icon: <FiScissors />,
  },
  {
    name: "Amina",
    origin: "Morocco",
    craft: "Crochet blankets",
    detail: "Warm textures made slowly, with care and patience.",
    icon: <FiHeart />,
  },
  {
    name: "Sofia",
    origin: "Chile",
    craft: "Baby room decor",
    detail: "Small handmade details for calm motherhood spaces.",
    icon: <FiStar />,
  },
];

export default function MarketplaceHandmadeSection() {
  return (
    <Section>
      <Header
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <SmallTitle>Handmade by moms</SmallTitle>
        <Title>Soft pieces made with time, care and motherhood in mind.</Title>
      </Header>

      <Grid>
        <FeatureCard
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <FeatureIcon>
            <FiHeart />
          </FeatureIcon>

          <FeatureTitle>Support local mom makers.</FeatureTitle>

          <FeatureText>
            Discover handmade baby pieces created by mothers in Trondheim — from
            knitted sets to crochet blankets and soft nursery details.
          </FeatureText>

          <FeatureButton>
            Explore handmade <span>→</span>
          </FeatureButton>
        </FeatureCard>

        <MakersList>
          {makers.map((maker, index) => (
            <MakerCard
              key={maker.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <MakerAvatar>
                <FiUser />
              </MakerAvatar>

              <MakerInfo>
                <MakerName>
                  {maker.name} <span>— {maker.origin}</span>
                </MakerName>

                <MakerCraft>{maker.craft}</MakerCraft>
                <MakerDetail>{maker.detail}</MakerDetail>
              </MakerInfo>

              <MakerIcon>{maker.icon}</MakerIcon>
            </MakerCard>
          ))}
        </MakersList>
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: 8rem 1.5rem;

  background: radial-gradient(
      circle at 15% 20%,
      rgba(242, 140, 140, 0.14),
      transparent 34%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(168, 191, 163, 0.14),
      transparent 36%
    ),
    rgba(255, 250, 246, 0.42);
`;

const Header = styled(motion.div)`
  max-width: 980px;
  margin: 0 auto 5rem;
  text-align: center;
`;

const SmallTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
  color: #a96f5f;
  margin-bottom: 1.2rem;
  font-weight: 900;
`;

const Title = styled.h2`
  max-width: 980px;
  margin: 0 auto;

  font-size: clamp(3rem, 6vw, 5.4rem);
  line-height: 0.92;
  letter-spacing: -0.065em;
  color: #2f2a25;
`;

const Grid = styled.div`
  max-width: 1180px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1.3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.article)`
  min-height: 520px;
  padding: 2rem;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: radial-gradient(
      circle at 20% 10%,
      rgba(242, 140, 140, 0.22),
      transparent 34%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(168, 191, 163, 0.16),
      transparent 38%
    ),
    rgba(255, 255, 255, 0.64);

  border: 1px solid rgba(242, 140, 140, 0.17);
  backdrop-filter: blur(20px);

  box-shadow: 0 32px 95px rgba(74, 54, 44, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.82);

  @media (max-width: 900px) {
    min-height: 420px;
  }
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  display: grid;
  place-items: center;

  color: #f28c8c;
  font-size: 1.35rem;

  background: rgba(242, 140, 140, 0.13);
  border: 1px solid rgba(242, 140, 140, 0.18);
`;

const FeatureTitle = styled.h3`
  max-width: 420px;
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 0.9;
  letter-spacing: -0.07em;
  color: #4a3b33;
`;

const FeatureText = styled.p`
  max-width: 420px;
  font-size: 1rem;
  line-height: 1.75;
  color: #5f554c;
`;

const FeatureButton = styled.button`
  width: fit-content;

  display: inline-flex;
  align-items: center;
  gap: 0.45rem;

  border: none;
  padding: 0;
  background: transparent;

  color: #f07f88;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;

  span {
    font-size: 1.4rem;
    transition: transform 0.35s ease;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;

const MakersList = styled.div`
  display: grid;
  gap: 1rem;
`;

const MakerCard = styled(motion.article)`
  min-height: 160px;
  padding: 1.2rem;
  border-radius: 30px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;

  background: rgba(255, 255, 255, 0.64);
  border: 1px solid rgba(242, 140, 140, 0.15);
  backdrop-filter: blur(18px);

  box-shadow: 0 24px 70px rgba(74, 54, 44, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.78);

  transition: transform 0.35s ease, border-color 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(242, 140, 140, 0.32);
    box-shadow: 0 34px 100px rgba(74, 54, 44, 0.13),
      inset 0 1px 0 rgba(255, 255, 255, 0.86);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const MakerAvatar = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 24px;

  display: grid;
  place-items: center;

  color: #f28c8c;
  font-size: 1.3rem;

  background: radial-gradient(
      circle at 30% 20%,
      rgba(255, 255, 255, 0.9),
      transparent 32%
    ),
    rgba(242, 140, 140, 0.13);

  border: 1px solid rgba(242, 140, 140, 0.16);

  @media (max-width: 620px) {
    margin: 0 auto;
  }
`;

const MakerInfo = styled.div``;

const MakerName = styled.h3`
  font-size: 1.25rem;
  color: #4a3b33;

  span {
    color: #8d7663;
    font-weight: 700;
  }
`;

const MakerCraft = styled.p`
  margin-top: 0.35rem;
  color: #c9896f;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const MakerDetail = styled.p`
  margin-top: 0.45rem;
  color: #5f554c;
  line-height: 1.6;
`;

const MakerIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  display: grid;
  place-items: center;

  color: #f28c8c;
  background: rgba(242, 140, 140, 0.12);

  @media (max-width: 620px) {
    margin: 0 auto;
  }
`;
