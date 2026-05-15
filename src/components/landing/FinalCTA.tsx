import styled from "styled-components";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <Section>
      <Container
        initial={{ opacity: 0, y: 45, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <Glow />

        <Content>
          <SmallTitle>Join the first circle</SmallTitle>

          <Title>Start building your motherhood village in Trondheim.</Title>

          <Description>
            Connect with international moms, discover local meetups, and be part
            of a community made to feel close, warm and supportive.
          </Description>

          <Actions>
            <PrimaryButton>
              <span>Join MomsHub</span>
              <ButtonIcon>→</ButtonIcon>
            </PrimaryButton>

            <SecondaryButton>Explore first</SecondaryButton>
          </Actions>
        </Content>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: 9rem 1.5rem;
  background: rgba(255, 250, 246, 0.28);
`;

const Container = styled(motion.div)`
  position: relative;
  overflow: hidden;

  max-width: 1050px;
  margin: 0 auto;
  padding: 6rem 2rem;

  border-radius: 46px;
  text-align: center;

  background: radial-gradient(
      circle at 20% 10%,
      rgba(242, 140, 140, 0.28),
      transparent 34%
    ),
    radial-gradient(
      circle at 85% 90%,
      rgba(168, 191, 163, 0.24),
      transparent 38%
    ),
    rgba(255, 255, 255, 0.58);

  border: 1px solid rgba(242, 140, 140, 0.16);
  backdrop-filter: blur(20px);

  box-shadow: 0 35px 110px rgba(74, 54, 44, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.78);
`;

const Glow = styled.div`
  position: absolute;
  inset: auto auto -35% 50%;
  transform: translateX(-50%);

  width: 520px;
  height: 520px;
  border-radius: 50%;

  background: rgba(242, 140, 140, 0.18);
  filter: blur(80px);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
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
  max-width: 820px;
  margin: 0 auto 1.5rem;

  font-size: clamp(3rem, 6vw, 5.8rem);
  line-height: 0.92;
  letter-spacing: -0.065em;

  color: #4a3b33;
`;

const Description = styled.p`
  max-width: 670px;
  margin: 0 auto;

  line-height: 1.8;
  color: #5f554c;
  font-size: 1.1rem;
`;

const Actions = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const BaseButton = styled.button`
  height: 58px;
  min-width: 190px;
  border: none;
  border-radius: 999px;
  padding: 0 1.35rem 0 1.65rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;

  font-size: 0.92rem;
  font-weight: 850;
  cursor: pointer;
  transition: 0.35s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ButtonIcon = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const PrimaryButton = styled(BaseButton)`
  color: #fffaf8;
  background: linear-gradient(135deg, #ff9a9f, #e76672);

  box-shadow: 0 20px 55px rgba(242, 140, 140, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);

  ${ButtonIcon} {
    background: rgba(255, 255, 255, 0.22);
  }
`;

const SecondaryButton = styled(BaseButton)`
  color: #4a3b33;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(242, 140, 140, 0.2);
`;
