import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiUsers, FiCalendar, FiShoppingBag, FiHeart } from "react-icons/fi";

const features = [
  {
    number: "01",
    icon: <FiUsers />,
    title: "Community",
    text: "A space to connect with other international moms and feel part of something close.",
    preview:
      "Find nearby moms, join small circles, discover support groups and start building real connections in Trondheim.",
    items: ["Meetups", "Support groups", "Moms nearby"],
    previewItems: [
      "Find nearby moms",
      "Join small circles",
      "Start conversations",
    ],
    path: "/community",
    cta: "Explore Community",
  },
  {
    number: "02",
    icon: <FiShoppingBag />,
    title: "Marketplace",
    text: "Exchange baby and motherhood items locally in a simple, trusted and community-first way.",
    preview:
      "Browse baby clothes, strollers, toys and second-hand essentials from local families.",
    items: ["Baby clothes", "Strollers", "Second-hand items"],
    previewItems: ["Browse essentials", "Sell locally", "Exchange safely"],
    path: "/marketplace",
    cta: "Explore Marketplace",
  },
  {
    number: "03",
    icon: <FiCalendar />,
    title: "Events",
    text: "Discover simple ways to get out, meet other families and enjoy Trondheim together.",
    preview:
      "Find coffee meetups, stroller walks, playdates and baby-friendly activities around the city.",
    items: ["Coffee meetups", "Walks", "Baby activities"],
    previewItems: ["Coffee mornings", "Stroller walks", "Playdates"],
    path: "/events",
    cta: "Explore Events",
  },
  {
    number: "04",
    icon: <FiHeart />,
    title: "Support",
    text: "Find answers, recommendations and emotional support while navigating motherhood abroad.",
    preview:
      "Ask questions, find trusted recommendations and feel supported through motherhood abroad.",
    items: ["Questions", "Recommendations", "Motherhood abroad"],
    previewItems: ["Ask questions", "Get recommendations", "Feel supported"],
    path: "/support",
    cta: "Explore Support",
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
        <Title>Everything mothers need, gathered in one local hub.</Title>
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

              <Preview>{feature.preview}</Preview>

              <Tags>
                {feature.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </Tags>

              <MiniPreview>
                {feature.previewItems.map((item) => (
                  <MiniPreviewItem key={item}>{item}</MiniPreviewItem>
                ))}
              </MiniPreview>

              <CardLink to={feature.path}>
                {feature.cta}
                <span>→</span>
              </CardLink>
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
  min-height: 470px;
  padding: 1.8rem;
  border-radius: 34px;

  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(242, 140, 140, 0.16);
  backdrop-filter: blur(18px);

  box-shadow: 0 28px 80px rgba(74, 54, 44, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: transform 0.35s ease, box-shadow 0.35s ease,
    border-color 0.35s ease, background 0.35s ease;

  &:hover {
    transform: translateY(-12px);
    border-color: rgba(242, 140, 140, 0.34);
    background: rgba(255, 255, 255, 0.76);

    box-shadow: 0 42px 120px rgba(74, 54, 44, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.88);
  }

  &:hover ${"" /* injected below */} {
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

  background: radial-gradient(
      circle at 30% 20%,
      rgba(255, 255, 255, 0.9),
      transparent 32%
    ),
    rgba(242, 140, 140, 0.13);

  box-shadow: 0 14px 35px rgba(242, 140, 140, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);

  transition: transform 0.35s ease;

  ${Card}:hover & {
    transform: rotate(-8deg) scale(1.08);
  }
`;

const CardContent = styled.div``;

const CardTitle = styled.h3`
  margin-top: 3.5rem;
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

const Preview = styled.p`
  margin-top: 1.1rem;
  padding-top: 1.1rem;
  border-top: 1px solid rgba(242, 140, 140, 0.14);

  font-size: 0.9rem;
  line-height: 1.7;
  color: #7a6b5f;
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

const MiniPreview = styled.div`
  margin-top: 1.4rem;
  padding: 1rem;
  border-radius: 22px;

  background: radial-gradient(
      circle at 20% 10%,
      rgba(242, 140, 140, 0.16),
      transparent 38%
    ),
    rgba(255, 250, 246, 0.58);

  border: 1px solid rgba(242, 140, 140, 0.14);

  display: grid;
  gap: 0.55rem;

  opacity: 0;
  transform: translateY(12px);
  max-height: 0;
  overflow: hidden;

  transition: opacity 0.35s ease, transform 0.35s ease, max-height 0.45s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
    max-height: 190px;
  }

  @media (max-width: 700px) {
    opacity: 1;
    transform: none;
    max-height: 190px;
  }
`;

const MiniPreviewItem = styled.div`
  padding: 0.55rem 0.7rem;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.62);
  color: #5f554c;

  font-size: 0.78rem;
  font-weight: 800;
`;

const CardLink = styled(Link)`
  margin-top: 1.8rem;

  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  width: fit-content;

  color: #e97880;
  font-size: 0.9rem;
  font-weight: 900;
  text-decoration: none;

  span {
    width: 28px;
    height: 28px;
    border-radius: 50%;

    display: grid;
    place-items: center;

    background: rgba(242, 140, 140, 0.13);
    transition: transform 0.3s ease;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;
