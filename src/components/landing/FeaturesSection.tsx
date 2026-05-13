import styled from "styled-components";
import { motion } from "framer-motion";
import { FiUsers, FiCalendar, FiShoppingBag, FiHeart } from "react-icons/fi";

const features = [
  {
    number: "01",
    icon: <FiUsers />,
    title: "Community",
    text: "A space to connect with other international moms and feel part of something close.",
    items: ["Meetups", "Support groups", "Moms nearby"],
  },
  {
    number: "02",
    icon: <FiShoppingBag />,
    title: "Marketplace",
    text: "Exchange baby and motherhood items locally in a simple, trusted and community-first way.",
    items: ["Baby clothes", "Strollers", "Second-hand items"],
  },
  {
    number: "03",
    icon: <FiCalendar />,
    title: "Events",
    text: "Discover simple ways to get out, meet other families and enjoy Trondheim together.",
    items: ["Coffee meetups", "Walks", "Baby activities"],
  },
  {
    number: "04",
    icon: <FiHeart />,
    title: "Support",
    text: "Find answers, recommendations and emotional support while navigating motherhood abroad.",
    items: ["Questions", "Recommendations", "Motherhood abroad"],
  },
];

export default function FeaturesSection() {
  return (
    <Section>
      <Header
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <SmallTitle>What you can do</SmallTitle>

        <Title>
          Everything mothers need, gathered in one local hub.
        </Title>
      </Header>

      <Grid>
        {features.map((feature, index) => (
          <Card
            key={feature.title}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <Top>
              <Number>{feature.number}</Number>
              <Icon>{feature.icon}</Icon>
            </Top>

            <CardContent>
              <CardTitle>{feature.title}</CardTitle>
              <CardText>{feature.text}</CardText>

              <Tags>
                {feature.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </Tags>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: 9rem 1.5rem;
  background: rgba(255, 248, 241, 0.34);
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
  font-weight: 800;
`;

const Title = styled.h2`
  font-size: clamp(3rem, 6vw, 5.6rem);
  line-height: 0.92;
  letter-spacing: -0.065em;
  color: #2f2a25;
`;

const Grid = styled.div`
  max-width: 1250px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.article)`
  min-height: 390px;
  padding: 1.8rem;
  border-radius: 34px;

  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(242, 140, 140, 0.16);
  backdrop-filter: blur(18px);

  box-shadow:
    0 28px 80px rgba(74, 54, 44, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease,
    background 0.35s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(242, 140, 140, 0.34);
    background: rgba(255, 255, 255, 0.72);

    box-shadow:
      0 38px 110px rgba(74, 54, 44, 0.13),
      inset 0 1px 0 rgba(255, 255, 255, 0.85);
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Number = styled.span`
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  color: #c9896f;
`;

const Icon = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;

  display: grid;
  place-items: center;

  color: #f28c8c;
  font-size: 1.3rem;

  background:
    radial-gradient(
      circle at 30% 20%,
      rgba(255, 255, 255, 0.9),
      transparent 32%
    ),
    rgba(242, 140, 140, 0.13);

  box-shadow:
    0 14px 35px rgba(242, 140, 140, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
`;

const CardContent = styled.div``;

const CardTitle = styled.h3`
  margin-top: 4rem;
  font-size: clamp(1.85rem, 2.4vw, 2.7rem);
  line-height: 0.95;
  letter-spacing: -0.055em;
  color: #4a3b33;
`;

const CardText = styled.p`
  margin-top: 1.2rem;
  font-size: 0.98rem;
  line-height: 1.75;
  color: #5f554c;
`;

const Tags = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

const Tag = styled.span`
  padding: 0.48rem 0.72rem;
  border-radius: 999px;

  background: rgba(255, 250, 246, 0.72);
  border: 1px solid rgba(242, 140, 140, 0.18);

  color: #8c6b5c;
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.04em;
`;