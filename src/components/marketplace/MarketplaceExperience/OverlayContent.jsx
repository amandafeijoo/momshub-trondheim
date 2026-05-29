import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OverlayContent({ items, activeIndex }) {
  const activeItem = items[activeIndex];

  return (
    <Wrapper>
      <SmallLabel>Marketplace Categories</SmallLabel>

      <NumbersRail>
        {items.map((item, index) => (
          <NumberItem key={item.number} $active={index === activeIndex}>
            <NumberGlow $active={index === activeIndex} />

            <span>{item.number}</span>
          </NumberItem>
        ))}
      </NumbersRail>

      <CenterContent>
        <AnimatePresence mode="wait">
          <ContentMotion
            key={activeItem.number}
            initial={{ opacity: 0, y: 90, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -70, scale: 1.03 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Tag>{activeItem.tag}</Tag>

            <Title>{activeItem.title}</Title>

            <Description>{activeItem.text}</Description>

            <CTAButton to={activeItem.path}>Explore category</CTAButton>
          </ContentMotion>
        </AnimatePresence>
      </CenterContent>
    </Wrapper>
  );
}

/* =========================
   STYLES
========================= */

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SmallLabel = styled.p`
  position: absolute;
  top: 3rem;
  left: 8vw;
  z-index: 12;

  margin: 0;

  text-transform: uppercase;
  letter-spacing: 0.42em;

  font-size: 0.76rem;
  font-weight: 900;

  color: rgba(76, 62, 55, 0.58);

  @media (max-width: 768px) {
    top: 2rem;
    left: 1.5rem;

    font-size: 0.64rem;
    letter-spacing: 0.28em;
  }
`;

const NumbersRail = styled.div`
  position: absolute;
  top: 24vh;
  left: 50%;
  z-index: 10;

  width: min(1380px, calc(100% - 4rem));

  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;

  &::before {
    content: "";

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;

    height: 1px;

    background: rgba(72, 60, 54, 0.13);
  }

  @media (max-width: 768px) {
    top: 18vh;
    width: calc(100% - 2rem);
  }
`;

const NumberItem = styled.div`
  position: relative;
  z-index: 2;

  width: clamp(72px, 8vw, 122px);
  height: clamp(72px, 8vw, 122px);

  border-radius: 50%;

  display: grid;
  place-items: center;

  background: transparent;

  border: 1px solid rgba(72, 60, 54, 0.17);

  transform: ${({ $active }) => ($active ? "scale(1.12)" : "scale(1)")};

  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.7s ease;

  span {
    position: relative;
    z-index: 2;

    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(2rem, 4vw, 4.3rem);

    line-height: 1;

    color: ${({ $active }) =>
      $active ? "rgba(44, 35, 31, 0.95)" : "rgba(44, 35, 31, 0.54)"};

    text-shadow: ${({ $active }) =>
      $active ? "0 12px 35px rgba(44, 35, 31, 0.16)" : "none"};

    transition: color 0.7s ease, text-shadow 0.7s ease;
  }

  &::after {
    content: "";

    position: absolute;
    inset: 12px;

    border-radius: 50%;

    border: 1px solid rgba(72, 60, 54, 0.11);
  }

  &::before {
    content: "";

    position: absolute;
    inset: -14px;

    border-radius: 50%;

    border: ${({ $active }) =>
      $active
        ? "1px solid rgba(242, 140, 140, 0.28)"
        : "1px solid transparent"};

    opacity: ${({ $active }) => ($active ? 1 : 0)};

    transition: opacity 0.7s ease;
  }
`;

const NumberGlow = styled.div`
  position: absolute;
  inset: -34px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(242, 140, 140, 0.24),
    rgba(242, 140, 140, 0.08) 34%,
    transparent 70%
  );

  opacity: ${({ $active }) => ($active ? 1 : 0)};

  transform: ${({ $active }) => ($active ? "scale(1)" : "scale(0.78)")};

  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
`;

const CenterContent = styled.div`
  position: absolute;
  inset: 0;

  width: min(1380px, calc(100% - 4rem));

  margin: 0 auto;

  display: flex;
  align-items: flex-end;

  padding-bottom: 7vh;

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    padding-bottom: 9vh;
  }
`;

const ContentMotion = styled(motion.div)`
  max-width: 1100px;
`;

const Tag = styled.div`
  margin-bottom: 1rem;

  text-transform: uppercase;
  letter-spacing: 0.28em;

  font-size: 0.72rem;
  font-weight: 900;

  color: rgba(90, 72, 64, 0.62);
`;

const Title = styled.h2`
  margin: 0;

  font-family: "Playfair Display", Georgia, serif;

  font-size: clamp(5rem, 15vw, 5.5rem);
  line-height: 0.76;
  letter-spacing: -0.095em;

  color: #2d2622;

  @media (max-width: 768px) {
    font-size: clamp(4rem, 21vw, 7rem);
    letter-spacing: -0.075em;
  }
`;

const Description = styled.p`
  max-width: 520px;

  margin-top: 1.8rem;

  font-size: 1.05rem;
  line-height: 1.85;

  color: rgba(72, 58, 50, 0.74);

  @media (max-width: 768px) {
    font-size: 0.96rem;
    line-height: 1.7;
  }
`;

const CTAButton = styled(Link)`
  margin-top: 2rem;

  height: 54px;
  width: fit-content;

  padding: 0 1.45rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  border: 1px solid rgba(242, 140, 140, 0.28);

  background: rgba(255, 246, 241, 0.58);
  color: #e98189;

  text-decoration: none;

  font-weight: 900;
  letter-spacing: 0.03em;

  cursor: pointer;

  backdrop-filter: blur(16px);

  box-shadow: 0 22px 50px rgba(242, 140, 140, 0.2);

  transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;

  &:hover {
    transform: translateY(-4px);

    background: rgba(255, 246, 241, 0.8);

    box-shadow: 0 30px 65px rgba(242, 140, 140, 0.28);
  }
`;
