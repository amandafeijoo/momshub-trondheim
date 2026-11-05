
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiCoffee,
  FiMapPin,
  FiFeather,
  FiRefreshCw,
  FiArrowUpRight,
} from "react-icons/fi";

/* ========================
   FEATURES DATA
======================== */

const features = [
  {
    number: "01",
    icon: <FiCoffee />,
    title: "Coffee & Connection",
    text:
      "Relaxed coffee meetups where moms can connect, share experiences and make new friends. Babies are always welcome!",
    tags: ["Coffee meetups", "Baby-friendly"],
    color: "#B77D70",
    background: "#FAF0EB",
    border: "#EEDCD4",
  },
  {
    number: "02",
    icon: <FiMapPin />,
    title: "MomsHub Out",
    text:
      "Exploring Trondheim together through stroller walks, baby singing sessions, library visits and creative outings like baby-print ceramics.",
    tags: ["Stroller walks", "Baby activities"],
    color: "#87987E",
    background: "#F0F2EA",
    border: "#DCE4D6",
  },
  {
    number: "03",
    icon: <FiFeather />,
    title: "Workshops & Culture",
    text:
      "Creative workshops, wellbeing activities and cultural experiences. From sharing talents to celebrating our traditions through future Country Days.",
    tags: ["Creative workshops", "Country Days"],
    color: "#A486A6",
    background: "#F6F0F6",
    border: "#E8DDE9",
  },
  {
    number: "04",
    icon: <FiRefreshCw />,
    title: "MomsHub Swaps",
    text:
      "We're planning community swap events where moms can exchange pre-loved baby clothes, toys and essentials, giving them a new home.",
    tags: ["Clothing swaps", "Toy swaps"],
    color: "#BC8A6B",
    background: "#FBF2EA",
    border: "#EDDED1",
  },
];

/* ========================
   MAIN COMPONENT
======================== */

export default function FeaturesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="activities">
      {/* SECTION HEADER */}

      <Header
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 36 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <SmallTitle>
          02 / WHAT WE DO
        </SmallTitle>

        <Title>
          Little moments
          <Accent>
            Meaningful connections
          </Accent>
        </Title>

        <Intro>
          From coffee dates to creative afternoons,
          little adventures and community swaps.
          Discover different ways to connect,
          share and grow together in Trondheim.
        </Intro>
      </Header>

      {/* FEATURES GRID */}

      <Grid>
        {features.map((feature, index) => (
          <Card
            key={feature.number}
            $background={feature.background}
            $border={feature.border}
            $accent={feature.color}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 40 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -7 }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion
                ? 0
                : index * 0.1,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {/* CARD TOP */}

            <Top>
              <Number>
                {feature.number}
              </Number>

              <IconCircle aria-hidden="true">
                {feature.icon}
              </IconCircle>
            </Top>

            {/* CARD CONTENT */}

            <CardContent>
              <CardTitle>
                {feature.title}
              </CardTitle>

              <CardText>
                {feature.text}
              </CardText>
            </CardContent>

            {/* TAGS */}

            <Tags>
              {feature.tags.map((tag) => (
                <Tag key={tag}>
                  {tag}
                </Tag>
              ))}
            </Tags>
          </Card>
        ))}
      </Grid>

      {/* BOTTOM LINK */}

      <Bottom>
        <ExploreLink href="#events">
          <span>
            Explore upcoming events
          </span>

          <FiArrowUpRight />
        </ExploreLink>
      </Bottom>
    </Section>
  );
}

/* ========================
   SECTION
======================== */

const Section = styled.section`
  position: relative;
  z-index: 2;

  padding: 8rem 1.5rem;

  /* Keeps the global 3D flower visible */
  background: rgba(250, 245, 239, 0.72);

  scroll-margin-top: 90px;

  @media (max-width: 768px) {
    padding: 5rem 1.2rem;
  }
`;

/* ========================
   HEADER
======================== */

const Header = styled(motion.div)`
  max-width: 980px;
  margin: 0 auto 4.5rem;

  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SmallTitle = styled.p`
  margin: 0 0 1.5rem;

  color: #ad756b;

  text-transform: uppercase;
  letter-spacing: 0.22em;

  font-size: 0.75rem;
  font-weight: 700;
`;

const Title = styled.h2`
  margin: 0 auto;

  color: #624b41;

  font-size: clamp(3rem, 5.5vw, 5.2rem);
  line-height: 1.08;
  letter-spacing: -0.055em;
  font-weight: 750;
`;

const Accent = styled.span`
  display: block;

  margin-top: 0.25rem;

  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-weight: 400;

  letter-spacing: -0.04em;
  color: #bb8178;
`;

const Intro = styled.p`
  max-width: 620px;
  margin: 2rem auto 0;

  color: #62534c;

  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
`;

/* ========================
   GRID
======================== */

const Grid = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 1.2rem;
  align-items: stretch;

  /* Subtle editorial stagger */

  @media (min-width: 1151px) {
    & > :nth-child(even) {
      margin-top: 24px;
    }
  }

  @media (max-width: 1150px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

/* ========================
   FEATURE CARD
======================== */

const Card = styled(motion.article)<{
  $background: string;
  $border: string;
  $accent: string;
}>`
  --card-accent: ${({ $accent }) => $accent};

  position: relative;
  overflow: hidden;

  min-height: 345px;
  padding: 1.8rem;

  border-radius: 28px;

  background: ${({ $background }) => $background};
  border: 1px solid ${({ $border }) => $border};

  display: flex;
  flex-direction: column;

  box-shadow:
    0 12px 36px rgba(98, 75, 65, 0.05);

  transition:
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  &:hover {
    box-shadow:
      0 22px 50px rgba(98, 75, 65, 0.12);
  }

  @media (max-width: 650px) {
    min-height: 300px;
    padding: 1.6rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* ========================
   CARD TOP
======================== */

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Number = styled.span`
  color: var(--card-accent);

  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
`;

const IconCircle = styled.div`
  width: 52px;
  height: 52px;

  border-radius: 50%;

  display: grid;
  place-items: center;

  color: var(--card-accent);
  font-size: 1.4rem;

  background: rgba(255, 255, 255, 0.62);

  border: 1px solid
    rgba(255, 255, 255, 0.65);

  transition:
    transform 0.35s ease,
    background 0.35s ease;

  ${Card}:hover & {
    transform: rotate(-8deg) scale(1.07);
    background: rgba(255, 255, 255, 0.9);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${Card}:hover & {
      transform: none;
    }
  }
`;

/* ========================
   CARD CONTENT
======================== */

const CardContent = styled.div`
  margin-top: 2rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem;

  color: #624b41;

  font-size: clamp(1.55rem, 2vw, 2rem);
  font-weight: 700;

  line-height: 1.15;
  letter-spacing: -0.045em;
`;

const CardText = styled.p`
  margin: 0;

  color: #62534c;

  font-size: 0.92rem;
  line-height: 1.75;
`;

/* ========================
   TAGS
======================== */

const Tags = styled.div`
  margin-top: auto;
  padding-top: 1.8rem;

  display: flex;
  flex-wrap: wrap;

  gap: 0.45rem;
`;

const Tag = styled.span`
  padding: 0.4rem 0.7rem;
  border-radius: 999px;

  color: var(--card-accent);

  background: rgba(255, 255, 255, 0.72);

  border: 1px solid
    rgba(255, 255, 255, 0.8);

  font-size: 0.67rem;
  font-weight: 650;
  letter-spacing: 0.02em;
`;

/* ========================
   BOTTOM CTA
======================== */

const Bottom = styled.div`
  margin-top: 4.5rem;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const ExploreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;

  color: #a96e66;

  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;

  padding-bottom: 0.5rem;

  border-bottom: 1px solid
    rgba(169, 110, 102, 0.35);

  transition:
    gap 0.3s ease,
    color 0.3s ease;

  svg {
    font-size: 1.2rem;

    transition: transform 0.3s ease;
  }

  &:hover {
    gap: 1.15rem;
    color: #624b41;
  }

  &:hover svg {
    transform: translate(3px, -3px);
  }

  &:focus-visible {
    outline: 3px solid #bb8178;
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    svg {
      transition: none;
    }
  }
`;
