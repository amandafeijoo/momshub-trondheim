import styled from "styled-components";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const moms = [
  {
    name: "Sofia",
    gradient: "linear-gradient(135deg, #f8b4ad, #f6dfcf)",
  },
  {
    name: "Emma",
    gradient: "linear-gradient(135deg, #b8c8aa, #f6dfcf)",
  },
  {
    name: "Maya",
    gradient: "linear-gradient(135deg, #d7b79f, #f08f8b)",
  },
];

const labels = [
  "MOMS NEARBY",
  "SAFE SPACE",
  "COFFEE MEETUPS",
  "FIRST-TIME MOMS",
  "SUPPORT",
  "TRONDHEIM",
  "WALKS",
  "PLAYDATES",
];

export default function CommunityHero() {
  return (
    <Hero>
      <FloatingLabels>
        {labels.map((label, index) => (
          <FloatingLabel key={label} $index={index}>
            {label}
          </FloatingLabel>
        ))}
      </FloatingLabels>

      <HeroContent
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Kicker>Community</Kicker>

        <Title>
          Find mothers
          <span>nearby.</span>
        </Title>

        <Subtitle>
          A softer way to build community in Trondheim — connect with moms who
          understand your journey.
        </Subtitle>

        <SearchBox>
          <FiSearch />
          <input placeholder="Search by stage, language, activity..." />
          <SearchButton>Find moms</SearchButton>
        </SearchBox>

        <OnlineMoms>
          <AvatarGroup>
            {moms.map((mom) => (
              <Avatar key={mom.name} $gradient={mom.gradient}>
                {mom.name.charAt(0)}
              </Avatar>
            ))}
          </AvatarGroup>

          <OnlineText>
            <strong>3 moms nearby</strong>
            <span>ready to connect this week</span>
          </OnlineText>
        </OnlineMoms>
      </HeroContent>
    </Hero>
  );
}

const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 10rem 1.5rem 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: radial-gradient(
      circle at 20% 20%,
      rgba(242, 140, 140, 0.22),
      transparent 32%
    ),
    radial-gradient(
      circle at 85% 30%,
      rgba(168, 191, 163, 0.22),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      rgba(255, 246, 241, 0.58),
      rgba(255, 250, 246, 0.28)
    );
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 3;
  max-width: 980px;
  text-align: center;
`;

const Kicker = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
  color: #a96f5f;
  font-weight: 800;
  margin-bottom: 1.3rem;
`;

const Title = styled.h1`
  font-size: clamp(4rem, 9vw, 7.4rem);
  line-height: 0.86;
  letter-spacing: -0.075em;
  color: #4a3b33;
  margin: 0 auto 1.8rem;

  span {
    display: block;
    color: #8d7663;
  }
`;

const Subtitle = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: clamp(1.08rem, 2vw, 1.35rem);
  line-height: 1.8;
  color: #5f554c;
`;

const SearchBox = styled.div`
  max-width: 680px;
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

  @media (max-width: 650px) {
    height: auto;
    border-radius: 30px;
    padding: 1rem;
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchButton = styled.button`
  height: 52px;
  border: none;
  border-radius: 999px;
  padding: 0 1.4rem;
  background: linear-gradient(135deg, #ff9a9f, #e76672);
  color: #fffaf8;
  font-weight: 850;
  cursor: pointer;
  box-shadow: 0 16px 38px rgba(242, 140, 140, 0.34);
`;

const OnlineMoms = styled.div`
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;

  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: rgba(255, 250, 246, 0.6);
  border: 1px solid rgba(242, 140, 140, 0.14);
  backdrop-filter: blur(16px);
`;

const AvatarGroup = styled.div`
  display: flex;
`;

const Avatar = styled.div<{ $gradient: string }>`
  width: 38px;
  height: 38px;
  margin-left: -0.6rem;
  border-radius: 50%;

  display: grid;
  place-items: center;

  background: ${({ $gradient }) => $gradient};
  color: white;
  font-weight: 900;
  border: 2px solid rgba(255, 250, 246, 0.9);

  &:first-child {
    margin-left: 0;
  }
`;

const OnlineText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  strong {
    color: #4a3b33;
    font-size: 0.9rem;
  }

  span {
    color: #7a6b5f;
    font-size: 0.78rem;
  }
`;

const FloatingLabels = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 900px) {
    display: none;
  }
`;

const FloatingLabel = styled.span<{ $index: number }>`
  position: absolute;
  top: ${({ $index }) => `${16 + (($index * 11) % 68)}%`};
  left: ${({ $index }) => ($index % 2 === 0 ? `${7 + $index * 3}%` : "auto")};
  right: ${({ $index }) => ($index % 2 !== 0 ? `${8 + $index * 2}%` : "auto")};

  padding: 0.48rem 0.72rem;
  border-radius: 999px;

  background: rgba(255, 250, 246, 0.58);
  border: 1px solid rgba(242, 140, 140, 0.18);
  backdrop-filter: blur(12px);

  color: #8c6b5c;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.16em;

  box-shadow: 0 12px 35px rgba(80, 65, 55, 0.06);
`;
