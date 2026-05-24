import styled from "styled-components";
import { motion } from "framer-motion";
import { FiGift, FiHeart, FiArrowRight, FiUsers } from "react-icons/fi";

export default function MarketplaceDonationSection() {
  return (
    <Section>
      <Container
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <Left>
          <Icon>
            <FiGift />
          </Icon>

          <SmallTitle>Donation circle</SmallTitle>

          <Title>Some baby things deserve a second little story.</Title>

          <Text>
            Donate clothes, toys or essentials your baby has outgrown and help
            another mom nearby feel supported.
          </Text>

          <Button>
            Donate an item <FiArrowRight />
          </Button>
        </Left>

        <Right>
          <StatCard>
            <FiHeart />
            <strong>Free items</strong>
            <span>for moms who need support</span>
          </StatCard>

          <StatCard>
            <FiUsers />
            <strong>Community first</strong>
            <span>shared locally in Trondheim</span>
          </StatCard>

          <Quote>
            “A small item you no longer use can make another mother’s week feel
            lighter.”
          </Quote>
        </Right>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: 8rem 1.5rem 9rem;
  background: rgba(255, 248, 241, 0.36);
`;

const Container = styled(motion.div)`
  max-width: 1180px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 44px;

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.5rem;

  background: radial-gradient(
      circle at 18% 10%,
      rgba(242, 140, 140, 0.22),
      transparent 34%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(168, 191, 163, 0.18),
      transparent 38%
    ),
    rgba(255, 255, 255, 0.62);

  border: 1px solid rgba(242, 140, 140, 0.17);
  backdrop-filter: blur(22px);

  box-shadow: 0 36px 120px rgba(74, 54, 44, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.86);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  padding: 2rem;

  @media (max-width: 650px) {
    padding: 1rem;
  }
`;

const Right = styled.div`
  display: grid;
  gap: 1rem;
`;

const Icon = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 50%;

  display: grid;
  place-items: center;

  color: #f28c8c;
  font-size: 1.45rem;

  background: rgba(242, 140, 140, 0.13);
  border: 1px solid rgba(242, 140, 140, 0.18);
`;

const SmallTitle = styled.p`
  margin-top: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
  color: #a96f5f;
  font-weight: 900;
`;

const Title = styled.h2`
  max-width: 650px;
  margin-top: 1.2rem;

  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 0.9;
  letter-spacing: -0.07em;
  color: #2f2a25;
`;

const Text = styled.p`
  max-width: 520px;
  margin-top: 1.5rem;

  color: #5f554c;
  font-size: 1.05rem;
  line-height: 1.8;
`;

const Button = styled.button`
  margin-top: 2.2rem;

  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  border: none;
  border-radius: 999px;
  padding: 1rem 1.35rem;

  background: linear-gradient(135deg, #ff9a9f, #e76672);
  color: #fffaf8;

  font-weight: 900;
  cursor: pointer;

  box-shadow: 0 18px 45px rgba(242, 140, 140, 0.32);

  svg {
    transition: transform 0.35s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const StatCard = styled.article`
  padding: 1.5rem;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(255, 250, 246, 0.62);
  border: 1px solid rgba(242, 140, 140, 0.14);

  svg {
    color: #f28c8c;
    font-size: 1.35rem;
    margin-bottom: 1.4rem;
  }

  strong {
    color: #4a3b33;
    font-size: 1.4rem;
    letter-spacing: -0.04em;
  }

  span {
    margin-top: 0.45rem;
    color: #6f6258;
    line-height: 1.6;
  }
`;

const Quote = styled.blockquote`
  padding: 1.7rem;
  border-radius: 30px;

  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(242, 140, 140, 0.14);

  color: #4a3b33;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  line-height: 1.15;
  letter-spacing: -0.055em;
`;
