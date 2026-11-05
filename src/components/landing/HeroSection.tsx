
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowDown,
} from "react-icons/fi";

const FACEBOOK_URL =
  "https://www.facebook.com/groups/1924881931520212/";

export default function HeroSection() {
  return (
    <Hero id="home">

      {/* Soft overlay for text readability */}
      <BackgroundWash aria-hidden="true" />

      <Inner>

        {/* MAIN EDITORIAL CONTENT */}

        <Content
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <Eyebrow>
            <SmallDot />
            <span>AN INTERNATIONAL MOMS COMMUNITY</span>
          </Eyebrow>

          <Title>
            Moms need
            <Accent>moms</Accent>
          </Title>

          <Tagline>
            A LITTLE CLOSER TO HOME
          </Tagline>

          <Subtitle>
            A welcoming community for international
            moms in Trondheim. Find your people,
            share the little moments and feel
            more at home in Norway.
          </Subtitle>

          <Actions>
            <PrimaryButton
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Find your people</span>
              <ArrowCircle>
                <FiArrowUpRight />
              </ArrowCircle>
            </PrimaryButton>

            <SecondaryLink href="#events">
              See upcoming events
              <FiArrowUpRight />
            </SecondaryLink>
          </Actions>
        </Content>

        {/* RIGHT AREA RESERVED FOR THE 3D FLOWER */}

        <VisualSpace aria-hidden="true">
          <SideNote>
            <SideLine />
            <SideText>
              REAL PEOPLE.
              <br />
              REAL CONNECTIONS.
            </SideText>
          </SideNote>
        </VisualSpace>

        {/* BOTTOM EDITORIAL DETAILS */}

        <BottomRail>
          <ScrollLink href="#about">
            <ScrollIcon>
              <FiArrowDown />
            </ScrollIcon>

            <span>DISCOVER OUR STORY</span>
          </ScrollLink>

          <RailText>
            COFFEE · CREATIVITY · CONNECTION
          </RailText>
        </BottomRail>

      </Inner>
    </Hero>
  );
}

/* =========================
   HERO LAYOUT
========================= */

const Hero = styled.section`
  position: relative;
  z-index: 2;
  isolation: isolate;

  min-height: calc(100svh - 84px);
  padding: 5rem 2rem 2rem;

  display: flex;
  align-items: center;

  overflow: hidden;
  background: transparent;

  @media (max-width: 900px) {
    min-height: calc(100svh - 76px);
    padding: 5rem 1.5rem 2rem;
  }

  @media (max-width: 600px) {
    padding: 4rem 1.3rem 2rem;
  }
`;

/* =========================
   SOFT GRADIENT OVERLAY
========================= */

const BackgroundWash = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  pointer-events: none;

  background: linear-gradient(
    90deg,
    rgba(255, 250, 246, 0.88) 0%,
    rgba(255, 250, 246, 0.63) 30%,
    rgba(255, 250, 246, 0.12) 63%,
    transparent 100%
  );

  @media (max-width: 900px) {
    background: linear-gradient(
      90deg,
      rgba(255, 250, 246, 0.88),
      rgba(255, 250, 246, 0.48)
    );
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;

  display: grid;
  grid-template-columns:
    minmax(0, 1.12fr)
    minmax(0, 0.88fr);

  align-items: center;
  column-gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* =========================
   MAIN CONTENT
========================= */

const Content = styled(motion.div)`
  position: relative;
  z-index: 3;

  padding: 2rem 0 3rem;

  @media (max-width: 900px) {
    max-width: 680px;
    padding: 2rem 0 4rem;
  }
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-bottom: 2.2rem;

  color: #ad756b;
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.18em;

  @media (max-width: 600px) {
    font-size: 0.62rem;
    letter-spacing: 0.12em;
  }
`;

const SmallDot = styled.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;

  border-radius: 50%;
  background: #bb8178;

  box-shadow: 0 0 0 5px rgba(187, 129, 120, 0.12);
`;

/* =========================
   EDITORIAL HEADLINE
========================= */

const Title = styled.h1`
  margin: 0;

  max-width: 760px;

  color: #624b41;

  font-size: clamp(4rem, 7.2vw, 7.8rem);
  font-weight: 750;

  line-height: 0.98;
  letter-spacing: -0.075em;

  @media (max-width: 900px) {
    font-size: clamp(4rem, 10vw, 6.5rem);
  }

  @media (max-width: 600px) {
    font-size: clamp(3.25rem, 12vw, 4.7rem);
  }
`;

const Accent = styled.span`
  display: block;

  margin-top: 0.05em;
  margin-left: 0.08em;

  color: #bb8178;

  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  font-style: italic;

  letter-spacing: -0.065em;
  line-height: 1.05;
`;

/* =========================
   INTRO TEXT
========================= */

const Tagline = styled.p`
  margin: 2.5rem 0 1rem;

  color: #ad756b;

  font-size: 0.75rem;
  font-weight: 750;
  letter-spacing: 0.2em;
`;

const Subtitle = styled.p`
  max-width: 520px;
  margin: 0;

  color: #62534c;

  font-size: clamp(1.04rem, 1.5vw, 1.2rem);
  line-height: 1.85;
  font-weight: 400;

  @media (max-width: 600px) {
    line-height: 1.75;
  }
`;

/* =========================
   CTA BUTTONS
========================= */

const Actions = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  min-height: 58px;
  padding: 0.5rem 0.55rem 0.5rem 1.6rem;

  border-radius: 999px;

  background: #a96e66;
  color: #ffffff;

  font-size: 0.9rem;
  font-weight: 750;
  text-decoration: none;

  box-shadow: 0 15px 35px rgba(169, 110, 102, 0.2);

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: #946058;
    transform: translateY(-4px);

    box-shadow: 0 22px 45px rgba(169, 110, 102, 0.27);
  }

  &:focus-visible {
    outline: 3px solid #624b41;
    outline-offset: 4px;
  }
`;

const ArrowCircle = styled.span`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 50%;
  background: rgba(255, 255, 255, 0.17);

  font-size: 1.15rem;

  transition: transform 0.3s ease;

  ${PrimaryButton}:hover & {
    transform: rotate(45deg);
  }
`;

const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;

  color: #624b41;

  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;

  border-bottom: 1px solid rgba(98, 75, 65, 0.3);
  padding-bottom: 0.45rem;

  transition:
    gap 0.3s ease,
    color 0.3s ease;

  svg {
    color: #a96e66;
    font-size: 1.1rem;
  }

  &:hover {
    gap: 1rem;
    color: #a96e66;
  }

  &:focus-visible {
    outline: 3px solid #bb8178;
    outline-offset: 4px;
  }
`;

/* =========================
   RIGHT VISUAL SPACE
========================= */

const VisualSpace = styled.div`
  position: relative;
  min-height: 480px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  pointer-events: none;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SideNote = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  margin-bottom: 1.5rem;
  margin-right: 0.5rem;
`;

const SideLine = styled.span`
  display: block;
  width: 32px;
  height: 1px;
  margin-top: 0.55rem;

  background: #bb8178;
`;

const SideText = styled.span`
  color: #9e8073;

  font-size: 0.68rem;
  font-weight: 750;

  line-height: 1.7;
  letter-spacing: 0.14em;
`;

/* =========================
   BOTTOM EDITORIAL RAIL
========================= */

const BottomRail = styled.div`
  grid-column: 1 / -1;

  margin-top: 2rem;
  padding-top: 1.5rem;

  border-top: 1px solid rgba(169, 110, 102, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

const ScrollLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;

  color: #9a766a;

  font-size: 0.68rem;
  font-weight: 750;
  letter-spacing: 0.15em;

  text-decoration: none;

  transition: color 0.3s ease;

  &:hover {
    color: #624b41;
  }
`;

const ScrollIcon = styled.span`
  width: 34px;
  height: 34px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(169, 110, 102, 0.3);
  border-radius: 50%;

  font-size: 1rem;
`;

const RailText = styled.span`
  color: #ad9083;

  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;

  @media (max-width: 768px) {
    display: none;
  }
`;
