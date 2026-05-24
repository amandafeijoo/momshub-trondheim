import styled from "styled-components";
import { motion } from "framer-motion";
import { FiSearch, FiGift, FiHeart, FiRefreshCw } from "react-icons/fi";

const labels = [
  "DONATE",
  "SECOND LIFE",
  "HANDMADE",
  "EXCHANGE",
  "LOCAL MOMS",
  "TRONDHEIM",
];

export default function MarketplaceHero() {
  return (
    <Hero>
      <Orb aria-hidden="true">
        <PetalOne />
        <PetalTwo />
        <PetalThree />
        <PetalFour />
        <PetalCenter />
      </Orb>

      <FloatingLabels>
        {labels.map((label, index) => (
          <FloatingLabel key={label} $index={index}>
            {label}
          </FloatingLabel>
        ))}
      </FloatingLabels>

      <Content
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Kicker>Marketplace</Kicker>

        <Title>
          Pass baby things
          <span>forward.</span>
        </Title>

        <Subtitle>
          Buy, donate, exchange or discover handmade items from moms nearby —
          helping each other as babies grow.
        </Subtitle>

        <SearchBox>
          <FiSearch />
          <input placeholder="Search strollers, baby clothes, handmade..." />
          <button>Explore items</button>
        </SearchBox>

        <MiniStats>
          <Stat>
            <FiGift />
            <span>Free donations</span>
          </Stat>
          <Stat>
            <FiRefreshCw />
            <span>Circular exchange</span>
          </Stat>
          <Stat>
            <FiHeart />
            <span>Handmade by moms</span>
          </Stat>
        </MiniStats>
      </Content>
    </Hero>
  );
}

const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 10rem 1.5rem 7rem;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: radial-gradient(
      circle at 18% 24%,
      rgba(242, 140, 140, 0.16),
      transparent 32%
    ),
    radial-gradient(
      circle at 86% 72%,
      rgba(168, 191, 163, 0.16),
      transparent 34%
    ),
    linear-gradient(
      135deg,
      rgba(255, 250, 246, 0.78),
      rgba(255, 248, 241, 0.38)
    );
`;

const Orb = styled.div`
  position: absolute;
  z-index: 1;
  width: min(560px, 75vw);
  height: min(560px, 75vw);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -46%);
  opacity: 0.72;
  filter: blur(0.2px);
  pointer-events: none;
`;

const PetalOne = styled.span`
  position: absolute;
  width: 42%;
  height: 58%;
  left: 31%;
  top: -2%;
  border-radius: 50%;
  background: rgba(242, 140, 140, 0.42);
  transform: rotate(-16deg);
`;

const PetalTwo = styled.span`
  position: absolute;
  width: 58%;
  height: 34%;
  right: -2%;
  top: 34%;
  border-radius: 50%;
  background: rgba(168, 191, 163, 0.34);
  transform: rotate(-8deg);
`;

const PetalThree = styled.span`
  position: absolute;
  width: 42%;
  height: 58%;
  left: 34%;
  bottom: -4%;
  border-radius: 50%;
  background: rgba(222, 166, 139, 0.36);
  transform: rotate(8deg);
`;

const PetalFour = styled.span`
  position: absolute;
  width: 58%;
  height: 34%;
  left: -4%;
  top: 38%;
  border-radius: 50%;
  background: rgba(214, 199, 184, 0.38);
  transform: rotate(-18deg);
`;

const PetalCenter = styled.span`
  position: absolute;
  width: 34%;
  height: 34%;
  left: 33%;
  top: 33%;
  border-radius: 50%;
  background: rgba(255, 250, 246, 0.56);
`;

const FloatingLabels = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;

  @media (max-width: 900px) {
    display: none;
  }
`;

const FloatingLabel = styled.span<{ $index: number }>`
  position: absolute;

  ${({ $index }) =>
    $index === 0 &&
    `
      left: 10%;
      top: 30%;
    `}

  ${({ $index }) =>
    $index === 1 &&
    `
      right: 10%;
      top: 30%;
    `}

  ${({ $index }) =>
    $index === 2 &&
    `
      left: 13%;
      bottom: 22%;
    `}

  ${({ $index }) =>
    $index === 3 &&
    `
      right: 13%;
      bottom: 23%;
    `}

  ${({ $index }) =>
    $index === 4 &&
    `
      left: 50%;
      top: 22%;
      transform: translateX(-50%);
    `}

  ${({ $index }) =>
    $index === 5 &&
    `
      right: 20%;
      bottom: 11%;
    `}

  padding: 0.5rem 0.8rem;
  border-radius: 999px;

  background: rgba(255, 250, 246, 0.62);
  border: 1px solid rgba(242, 140, 140, 0.18);
  backdrop-filter: blur(14px);

  color: #8c6b5c;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.16em;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 4;
  max-width: 980px;
  text-align: center;
`;

const Kicker = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.78rem;
  color: #a96f5f;
  font-weight: 900;
  margin-bottom: 1.3rem;
`;

const Title = styled.h1`
  max-width: 880px;
  margin: 0 auto;

  font-size: clamp(4rem, 8vw, 6.7rem);
  line-height: 0.86;
  letter-spacing: -0.078em;
  color: #2f2a25;

  span {
    display: block;
    color: #8d7663;
  }
`;

const Subtitle = styled.p`
  max-width: 720px;
  margin: 2rem auto 0;

  font-size: clamp(1.08rem, 2vw, 1.28rem);
  line-height: 1.75;
  color: #5f554c;
`;

const SearchBox = styled.div`
  max-width: 720px;
  height: 66px;
  margin: 3rem auto 0;
  padding: 0 0.5rem 0 1.4rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(242, 140, 140, 0.18);
  backdrop-filter: blur(18px);

  box-shadow: 0 25px 80px rgba(74, 54, 44, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.85);

  svg {
    color: #c9896f;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: #4a3b33;
    font-size: 1rem;
  }

  input::placeholder {
    color: rgba(95, 85, 76, 0.65);
  }

  button {
    height: 52px;
    border: none;
    border-radius: 999px;
    padding: 0 1.4rem;
    background: linear-gradient(135deg, #ff9a9f, #e76672);
    color: #fffaf8;
    font-weight: 850;
    cursor: pointer;
    box-shadow: 0 16px 38px rgba(242, 140, 140, 0.34);
  }

  @media (max-width: 650px) {
    height: auto;
    border-radius: 30px;
    padding: 1rem;
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;

const MiniStats = styled.div`
  margin: 2rem auto 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const Stat = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;

  padding: 0.65rem 0.9rem;
  border-radius: 999px;

  background: rgba(255, 250, 246, 0.64);
  border: 1px solid rgba(242, 140, 140, 0.16);
  backdrop-filter: blur(14px);

  color: #7a6b5f;
  font-size: 0.82rem;
  font-weight: 850;

  svg {
    color: #f28c8c;
  }
`;
