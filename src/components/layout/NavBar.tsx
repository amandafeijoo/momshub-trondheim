import styled from "styled-components";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <LogoWrapper
          initial={{ opacity: 1, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <LogoImage
            src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778522688/momhub_m4txkx.png"
            alt="MomsHub Logo"
          />

          <LogoText>MomsHub Trondheim</LogoText>
        </LogoWrapper>

        <Links>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Community</NavLink>
          <NavLink href="/">Events</NavLink>
          <NavLink href="/">Marketplace</NavLink>
          <NavLink href="/">About</NavLink>
        </Links>

        <CTAButton>Join MomsHub</CTAButton>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;

  backdrop-filter: blur(22px);

  background:
    linear-gradient(
      to bottom,
      rgba(255, 248, 241, 0.72),
      rgba(255, 248, 241, 0.42)
    );

  border-bottom: 1px solid rgba(255, 255, 255, 0.34);

  box-shadow:
    0 8px 30px rgba(80, 71, 63, 0.04);

  isolation: isolate;
`;

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;

  height: 82px;

  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoImage = styled.img`
  width: 42px;
  height: 42px;

  object-fit: contain;

  filter: drop-shadow(0 4px 12px rgba(242, 140, 140, 0.18));
`;
const LogoText = styled.h2`
  font-size: 1.15rem;

  font-weight: 800;

  color: #7b6858;

  letter-spacing: -0.045em;

  margin: 0;
`;
const Links = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 950px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;

  color: #66584c;

  font-size: 0.95rem;
  font-weight: 600;

  transition: 0.3s ease;

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 0%;
    height: 1.5px;

    background: #f28c8c;

    transition: 0.35s ease;
  }

  &:hover {
    color: #3f342d;
  }

  &:hover::after {
    width: 100%;
  }
`;

const CTAButton = styled.button`
  position: relative;

  border: none;

  background:
    linear-gradient(
      135deg,
      #f59797,
      #ee7f89
    );

  color: white;

  padding: 0.95rem 1.5rem;

  border-radius: 999px;

  font-weight: 800;

  letter-spacing: -0.01em;

  cursor: pointer;

  overflow: hidden;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;

  box-shadow:
    0 16px 40px rgba(242, 140, 140, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);

  &::before {
    content: "";

    position: absolute;

    inset: 1px;

    border-radius: inherit;

    background:
      linear-gradient(
        135deg,
        rgba(255,255,255,0.28),
        transparent 38%
      );
  }

  &:hover {
    transform: translateY(-2px);

    box-shadow:
      0 22px 55px rgba(242, 140, 140, 0.38),
      inset 0 1px 0 rgba(255, 255, 255, 0.45);
  }
`;