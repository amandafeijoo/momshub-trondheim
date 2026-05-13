import styled from "styled-components";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <Hero>
      <Content
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Kicker>MomsHub Trondheim</Kicker>

        <Title>
          Motherhood feels
          <span>better together.</span>
        </Title>

        <Subtitle>
          A local space where international moms in Trondheim can connect, share
          experiences, discover meetups, and exchange baby items easily.
        </Subtitle>

        <Actions>
          <PrimaryButton>
            <span>Join the community</span>
            <ButtonIcon>→</ButtonIcon>
          </PrimaryButton>

          <SecondaryButton>
            <span>Explore marketplace</span>
            <ButtonIcon>↗</ButtonIcon>
          </SecondaryButton>
        </Actions>
      </Content>
    </Hero>
  );
}

const Hero = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 2;

  background:
    radial-gradient(
      circle at top left,
      rgba(255, 170, 170, 0.24),
      transparent 34%
    ),
    radial-gradient(
      circle at 85% 20%,
      rgba(210, 200, 255, 0.1),
      transparent 28%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(168, 191, 163, 0.18),
      transparent 36%
    ),
    linear-gradient(
      135deg,
      rgba(255, 246, 241, 0.62) 0%,
      rgba(254, 244, 239, 0.5) 35%,
      rgba(249, 244, 239, 0.42) 65%,
      rgba(243, 246, 242, 0.56) 100%
    );

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem 2rem;

  @media (max-width: 768px) {
    padding: 9.5rem 1.2rem 3rem;
  }
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 3;
  max-width: 920px;
  text-align: center;
`;

const Kicker = styled.p`
  color: #a96f5f;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 1.4rem;
`;

const Title = styled.h1`
  font-size: clamp(3.6rem, 7.7vw, 5.3rem);
  line-height: 0.88;
  max-width: 820px;
  margin: 0 auto 1.8rem;

  letter-spacing: -0.055em;
  color: #6a5e54;

  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.35),
    0 14px 45px rgba(255, 248, 241, 0.55);

  span {
    display: block;
    color: #8d7663;
  }

  @media (max-width: 768px) {
    font-size: clamp(3rem, 14vw, 4.5rem);
  }
`;

const Subtitle = styled.p`
  max-width: 760px;
  margin: 0 auto;
  font-size: clamp(1.08rem, 2vw, 1.45rem);
  line-height: 1.8;
  color: #5f554c;
`;

const Actions = styled.div`
  margin-top: 3.2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const BaseButton = styled.button`
  position: relative;
  min-width: 210px;
  height: 58px;
  border: none;
  border-radius: 999px;
  padding: 0 1.35rem 0 1.65rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;

  font-size: 0.92rem;
  font-weight: 850;
  letter-spacing: -0.02em;

  cursor: pointer;
  overflow: hidden;
  isolation: isolate;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  span {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: linear-gradient(
      120deg,
      transparent 20%,
      rgba(255, 255, 255, 0.65) 45%,
      transparent 70%
    );
    transform: translateX(-120%);
    transition: transform 0.75s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
  }

  &:hover::before {
    transform: translateX(120%);
  }
`;

const ButtonIcon = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  transition: transform 0.35s ease;
`;

const PrimaryButton = styled(BaseButton)`
  color: #fffaf8;
  background:
    radial-gradient(
      circle at 25% 10%,
      rgba(255, 255, 255, 0.38),
      transparent 26%
    ),
    linear-gradient(135deg, #ff9a9f 0%, #f2777f 48%, #e76672 100%);

  box-shadow:
    0 18px 45px rgba(242, 140, 140, 0.38),
    0 6px 16px rgba(226, 105, 115, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.38);

  ${ButtonIcon} {
    background: rgba(255, 255, 255, 0.22);
    color: white;
  }

  &:hover {
    box-shadow:
      0 24px 58px rgba(242, 140, 140, 0.48),
      0 10px 22px rgba(226, 105, 115, 0.22),
      inset 0 1px 0 rgba(255, 255, 255, 0.48);
  }

  &:hover ${ButtonIcon} {
    transform: translateX(4px);
  }
`;

const SecondaryButton = styled(BaseButton)`
  color: #4a3b33;
  background: rgba(255, 255, 255, 0.66);
  border: 1px solid rgba(242, 140, 140, 0.22);
  backdrop-filter: blur(18px);

  box-shadow:
    0 18px 42px rgba(83, 65, 54, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.78);

  ${ButtonIcon} {
    background: rgba(242, 140, 140, 0.13);
    color: #e97880;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.88);
    border-color: rgba(242, 140, 140, 0.38);
    box-shadow:
      0 22px 50px rgba(83, 65, 54, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.95);
  }

  &:hover ${ButtonIcon} {
    transform: translate(3px, -3px);
  }
`;
