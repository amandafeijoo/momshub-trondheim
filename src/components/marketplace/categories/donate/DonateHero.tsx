import styled from "styled-components";
import { FiGift } from "react-icons/fi";
import DonateParticleImage from "./DonateParticleImage";

const HERO_IMAGE =
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1779659809/DONATEPAGE__b40gau.png";

export default function DonateHero() {
  return (
    <Section>
      <BackgroundImage src={HERO_IMAGE} alt="" />

      <Overlay />
      <GlowOne />
      <GlowTwo />

      <DonateParticleImage image={HERO_IMAGE} />

      <Grain />

      <Content>
        <TagWrapper>
          <FiGift />
          <Tag>Donation circle</Tag>
        </TagWrapper>

        <Title>
          Give little things
          <br />
          a beautiful
          <br />
          second life.
        </Title>

        <Text>
          Share baby clothes, toys and everyday essentials with another family
          nearby — with care, trust and a little kindness.
        </Text>

        <Actions>
          <Button>Donate an item</Button>
          <GhostButton>Browse donations</GhostButton>
        </Actions>
      </Content>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  min-height: 100vh;

  display: flex;
  align-items: center;

  background: #f8f2eb;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center right;

  opacity: 0.48;
  z-index: 0;

  transform: scale(1.03);

  filter: saturate(0.92) contrast(0.96);

  @media (max-width: 768px) {
    opacity: 0.36;
    object-position: 62% center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  background: radial-gradient(
      circle at 72% 42%,
      rgba(255, 206, 198, 0.24),
      transparent 34%
    ),
    radial-gradient(
      circle at 24% 38%,
      rgba(255, 255, 255, 0.9),
      transparent 36%
    ),
    linear-gradient(
      90deg,
      rgba(250, 243, 235, 0.98) 0%,
      rgba(250, 243, 235, 0.88) 34%,
      rgba(250, 243, 235, 0.42) 64%,
      rgba(250, 243, 235, 0.14) 100%
    );

  @media (max-width: 768px) {
    background: linear-gradient(
      180deg,
      rgba(250, 243, 235, 0.96) 0%,
      rgba(250, 243, 235, 0.82) 50%,
      rgba(250, 243, 235, 0.98) 100%
    );
  }
`;

const GlowOne = styled.div`
  position: absolute;
  z-index: 2;

  width: 34rem;
  height: 34rem;

  left: -12rem;
  top: 14%;

  background: radial-gradient(
    circle,
    rgba(255, 190, 185, 0.38),
    transparent 68%
  );

  filter: blur(20px);
  pointer-events: none;
`;

const GlowTwo = styled.div`
  position: absolute;
  z-index: 2;

  width: 30rem;
  height: 30rem;

  right: 12%;
  bottom: 8%;

  background: radial-gradient(
    circle,
    rgba(232, 181, 128, 0.22),
    transparent 70%
  );

  filter: blur(28px);
  pointer-events: none;
`;

const Grain = styled.div`
  position: absolute;
  inset: 0;
  z-index: 5;

  pointer-events: none;

  opacity: 0.11;

  background-image: linear-gradient(
      rgba(255, 255, 255, 0.28) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.22) 1px, transparent 1px);

  background-size: 42px 42px;

  mask-image: linear-gradient(to right, black, transparent 78%);
`;

const Content = styled.div`
  position: relative;
  z-index: 7;

  max-width: 820px;
  padding: 9rem 5.5rem;

  pointer-events: none;

  @media (max-width: 768px) {
    padding: 7rem 1.6rem;
  }
`;

const TagWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0.65rem 1rem;

  border: 1px solid rgba(177, 120, 112, 0.18);
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.36);
  backdrop-filter: blur(16px);

  box-shadow: 0 18px 50px rgba(100, 70, 55, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);

  svg {
    color: #d9858d;
    font-size: 1.1rem;
  }
`;

const Tag = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.22em;

  color: #a86d66;

  font-size: 0.72rem;
  font-weight: 800;
`;

const Title = styled.h1`
  margin-top: 1.7rem;
  margin-bottom: 0;

  font-family: "Playfair Display", serif;

  font-size: clamp(4rem, 7vw, 7.6rem);
  line-height: 0.86;
  letter-spacing: -0.075em;

  color: #2d2622;

  max-width: 860px;

  text-shadow: 0 24px 60px rgba(80, 55, 42, 0.12);

  @media (max-width: 768px) {
    font-size: clamp(3.25rem, 14vw, 5.4rem);
    line-height: 0.9;
  }
`;

const Text = styled.p`
  max-width: 530px;

  margin-top: 1.7rem;

  color: #675d56;

  line-height: 1.85;

  font-size: 1.05rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-top: 2.4rem;

  pointer-events: auto;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 999px;

  padding: 1rem 1.7rem;

  background: linear-gradient(135deg, #f6aaa8, #d9757f);

  color: white;

  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  cursor: pointer;

  box-shadow: 0 24px 60px rgba(217, 117, 127, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.45);

  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-3px);

    box-shadow: 0 34px 80px rgba(217, 117, 127, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.55);
  }
`;

const GhostButton = styled.button`
  border: 1px solid rgba(177, 120, 112, 0.26);
  border-radius: 999px;

  padding: 1rem 1.5rem;

  background: rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(14px);

  color: #7c5b55;

  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  cursor: pointer;

  box-shadow: 0 18px 45px rgba(100, 70, 55, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.45);

  transition: transform 0.35s ease, background 0.35s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.52);
  }
`;
