
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiFeather,
  FiHeart,
  FiArrowUpRight,
  FiInstagram,
} from "react-icons/fi";

const INSTAGRAM_URL =
  "https://www.instagram.com/momshubtrondheim/";

const opportunities = [
  {
    number: "01",
    icon: <FiUsers />,
    title: "Join the Creative Team",
    description:
      "Love bringing people together? Help us plan meetups, organise activities and bring new ideas to life.",
    note: "For moms who want to get involved in organising.",
    color: "#B77D70",
    background: "#FAF0EB",
    border: "#EEDCD4",
  },
  {
    number: "02",
    icon: <FiFeather />,
    title: "Share Your Talent",
    description:
      "Have a hobby, passion or skill you'd love to share? Host a workshop, lead an activity or inspire other moms.",
    note: "One workshop or activity is more than welcome!",
    color: "#A486A6",
    background: "#F6F0F6",
    border: "#E8DDE9",
  },
  {
    number: "03",
    icon: <FiHeart />,
    title: "Collaborate With Us",
    description:
      "Are you a local organisation, business or professional? Let's explore how we can create something meaningful together.",
    note: "Community partnerships & local collaborations.",
    color: "#87987E",
    background: "#F0F2EA",
    border: "#DCE4D6",
  },
];

export default function GetInvolvedSection() {
  return (
    <Section id="get-involved">
      <Container>
        {/* LEFT — INTRO */}

        <IntroColumn
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SmallTitle>05 / GET INVOLVED</SmallTitle>

          <Title>
            Good things grow
            <Accent>together</Accent>
          </Title>

          <Description>
            MomsHub is more than a place to meet.
            It's a community shaped by the people
            who are part of it.
          </Description>

          <Description>
            Every mom brings something special.
            Whether it's a creative idea, a skill
            to share or a little time to help,
            there's room for you here.
          </Description>

          <Signature>
            <FlowerMark aria-hidden="true">✳</FlowerMark>
            <span>Moms need moms</span>
          </Signature>
        </IntroColumn>

        {/* RIGHT — WAYS TO GET INVOLVED */}

        <Opportunities>
          {opportunities.map((item, index) => (
            <OpportunityCard
              key={item.number}
              $background={item.background}
              $border={item.border}
              $color={item.color}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardTop>
                <CardNumber>{item.number}</CardNumber>

                <IconCircle aria-hidden="true">
                  {item.icon}
                </IconCircle>
              </CardTop>

              <CardTitle>{item.title}</CardTitle>

              <CardDescription>
                {item.description}
              </CardDescription>

              <CardBottom>
                <CardNote>{item.note}</CardNote>

                <CardLink
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contact MomsHub about ${item.title}`}
                >
                  <FiArrowUpRight />
                </CardLink>
              </CardBottom>
            </OpportunityCard>
          ))}
        </Opportunities>
      </Container>

      {/* BOTTOM — CONTACT INVITATION */}

      <BottomCTA>
        <BottomText>
          <BottomTitle>
            Have an idea? We'd love to hear it.
          </BottomTitle>

          <BottomDescription>
            You don't need to be a professional
            or commit every week. Even a small
            contribution can make a difference.
          </BottomDescription>
        </BottomText>

        <ContactButton
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
          Send us a message
          <FiArrowUpRight />
        </ContactButton>
      </BottomCTA>
    </Section>
  );
}

/* =========================
   SECTION & LAYOUT
========================= */


const Section = styled.section`
  position: relative;
  z-index: 2;

  padding: 8rem 1.5rem;

  /* Let the 3D flower show through */
  background: rgba(250, 245, 239, 0.72);

  scroll-margin-top: 90px;

  @media (max-width: 768px) {
    padding: 5rem 1.2rem;
  }
`;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  align-items: start;

  gap: clamp(3rem, 6vw, 7rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

/* =========================
   INTRO
========================= */

const IntroColumn = styled(motion.div)`
  position: sticky;
  top: 140px;

  @media (max-width: 900px) {
    position: static;
  }
`;

const SmallTitle = styled.p`
  margin: 0 0 1.8rem;

  color: #ad756b;
  font-size: 0.75rem;
  font-weight: 700;

  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0 0 2rem;

  color: #624b41;

  font-size: clamp(3.3rem, 5vw, 5.3rem);
  font-weight: 750;
  line-height: 1.05;
  letter-spacing: -0.055em;

  @media (max-width: 600px) {
    font-size: clamp(2.9rem, 10vw, 4rem);
  }
`;

const Accent = styled.span`
  display: block;

  color: #bb8178;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-weight: 400;

  letter-spacing: -0.045em;
`;

const Description = styled.p`
  max-width: 440px;
  margin: 0 0 1.2rem;

  color: #62534c;
  font-size: 1.04rem;
  line-height: 1.85;
`;

const Signature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;

  margin-top: 2.5rem;

  color: #a96e66;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-size: 1.25rem;
`;

const FlowerMark = styled.span`
  color: #bb8178;
  font-family: inherit;
  font-style: normal;
  font-size: 2rem;
  line-height: 1;
`;

/* =========================
   OPPORTUNITIES
========================= */

const Opportunities = styled.div`
  display: grid;
  gap: 1.2rem;
`;

const OpportunityCard = styled(motion.article)<{
  $background: string;
  $border: string;
  $color: string;
}>`
  --accent: ${({ $color }) => $color};

  position: relative;
  overflow: hidden;

  padding: clamp(1.6rem, 3vw, 2.3rem);
  border-radius: 28px;

  background: ${({ $background }) => $background};
  border: 1px solid ${({ $border }) => $border};

  box-shadow: 0 12px 35px rgba(98, 75, 65, 0.045);

  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    box-shadow: 0 22px 48px rgba(98, 75, 65, 0.1);
  }

  &:nth-child(2) {
    margin-left: 2.5rem;

    @media (max-width: 600px) {
      margin-left: 0;
    }
  }

  @media (max-width: 600px) {
    border-radius: 22px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`;

const CardNumber = styled.span`
  color: var(--accent);

  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.18em;
`;

const IconCircle = styled.div`
  width: 48px;
  height: 48px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.72);
  color: var(--accent);

  font-size: 1.35rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem;

  color: #624b41;
  font-size: clamp(1.6rem, 2.4vw, 2.1rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.045em;
`;

const CardDescription = styled.p`
  max-width: 490px;
  margin: 0;

  color: #62534c;
  font-size: 0.96rem;
  line-height: 1.8;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  margin-top: 1.8rem;
  padding-top: 1.3rem;

  border-top: 1px solid rgba(98, 75, 65, 0.1);
`;

const CardNote = styled.span`
  color: #876e62;
  font-size: 0.79rem;
  line-height: 1.6;
`;

const CardLink = styled.a`
  width: 42px;
  height: 42px;
  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.8);
  color: var(--accent);

  font-size: 1.25rem;
  text-decoration: none;

  transition:
    transform 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: rotate(45deg);
    background: #ffffff;
  }

  &:focus-visible {
    outline: 3px solid var(--accent);
    outline-offset: 3px;
  }
`;

/* =========================
   BOTTOM CTA
========================= */

const BottomCTA = styled.div`
  max-width: 1200px;
  margin: 6rem auto 0;

  padding: 2.5rem 3rem;
  border-radius: 28px;

  background: #f3e7e1;
  border: 1px solid #ead5cc;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
    padding: 2rem 1.5rem;

    flex-direction: column;
    align-items: stretch;
  }
`;

const BottomText = styled.div`
  max-width: 600px;
`;

const BottomTitle = styled.h3`
  margin: 0 0 0.75rem;

  color: #624b41;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.04em;
`;

const BottomDescription = styled.p`
  margin: 0;

  color: #76645b;
  font-size: 0.93rem;
  line-height: 1.75;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  min-height: 54px;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;

  background: #a96e66;
  color: #ffffff;

  font-size: 0.88rem;
  font-weight: 700;
  white-space: nowrap;
  text-decoration: none;

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #946058;
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 3px solid #624b41;
    outline-offset: 3px;
  }
`;
