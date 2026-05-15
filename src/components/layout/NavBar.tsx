import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Container>
        <LogoWrapper
          initial={{ opacity: 1, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <LogoImage
            src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778759848/logoMomhub_Trondheim_1_ofkrpe.png"
            alt="MomsHub Logo"
          />
          <LogoText>MomsHub Trondheim</LogoText>
        </LogoWrapper>

        <Links>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/community">Community</NavLink>
          <NavLink href="/">Events</NavLink>
          <NavLink href="/">Marketplace</NavLink>
          <NavLink href="/">About</NavLink>
        </Links>

        <CTAButton>Join MomsHub</CTAButton>

        <MenuButton onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </MenuButton>
      </Container>

      <AnimatePresence>
        {open && (
          <MobileMenu
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {["Home", "Community", "Events", "Marketplace", "About"].map(
              (item, index) => (
                <MobileLink
                  key={item}
                  href={item === "Community" ? "/community" : "/"}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.72)";
                    e.currentTarget.style.transform =
                      "translateX(6px) scale(1.015)";
                    e.currentTarget.style.color = "#3f342d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.28)";
                    e.currentTarget.style.transform = "translateX(0) scale(1)";
                    e.currentTarget.style.color = "#5c5046";
                  }}
                  onClick={() => setOpen(false)}
                  as={motion.a}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045 }}
                >
                  {item}
                </MobileLink>
              )
            )}
            <MobileCTA onClick={() => setOpen(false)}>Join MomsHub</MobileCTA>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);

  background: linear-gradient(
    to bottom,
    rgba(247, 228, 210, 0.88),
    rgba(245, 236, 228, 0.72)
  );

  border-bottom: 1px solid rgba(65, 53, 44, 0.08);

  box-shadow: 0 10px 35px rgba(80, 71, 63, 0.06),
    0 1px 0 rgba(255, 255, 255, 0.28) inset;
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
  color: #6d5c4f;
  letter-spacing: -0.045em;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 120px;
    line-height: 1.05;
  }
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
  background: linear-gradient(135deg, #f59797, #ee7f89);
  color: white;
  padding: 0.95rem 1.5rem;
  border-radius: 999px;
  font-weight: 800;
  cursor: pointer;
  overflow: hidden;

  box-shadow: 0 16px 40px rgba(242, 140, 140, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);

  @media (max-width: 768px) {
    display: none;
  }
`;
const MenuButton = styled.button`
  display: none;
  width: 54px;
  height: 54px;

  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 50%;

  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.9),
    rgba(250, 226, 213, 0.72)
  );

  box-shadow: 0 18px 38px rgba(80, 71, 63, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);

  cursor: pointer;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: #6d5c4f;
    margin: 5px auto;
    border-radius: 999px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 94px;
    left: 1rem;
    right: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.45rem;

    padding: 1rem;

    border-radius: 28px;

    background: linear-gradient(
      145deg,
      rgba(255, 250, 245, 0.94),
      rgba(245, 223, 211, 0.88)
    );

    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);

    border: 1px solid rgba(255, 255, 255, 0.62);

    box-shadow: 0 24px 70px rgba(81, 63, 52, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);

    overflow: hidden;
  }
`;

const MobileLink = styled.a`
  position: relative;

  padding: 1rem 1.1rem 1rem 1.25rem;
  border-radius: 20px;

  color: #5c5046;
  font-size: 1.05rem;
  font-weight: 850;

  background: rgba(255, 255, 255, 0.28);

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: transform 0.35s ease, background 0.35s ease, color 0.35s ease,
    box-shadow 0.35s ease;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background: #f28c8c;

    opacity: 0;
    transform: scale(0.4);
    transition: 0.35s ease;
  }

  &::after {
    content: "→";
    font-size: 1rem;
    color: #f28c8c;

    opacity: 0;
    transform: translateX(-8px);
    transition: 0.35s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.72);
    color: #3f342d;
    transform: translateX(6px) scale(1.015);

    box-shadow: 0 12px 28px rgba(80, 71, 63, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.75);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MobileCTA = styled.button`
  margin-top: 0.7rem;

  border: none;
  background: linear-gradient(135deg, #ff9aa0, #ef7f89);

  color: white;

  padding: 1rem;
  border-radius: 22px;

  font-size: 1rem;
  font-weight: 850;

  cursor: pointer;

  box-shadow: 0 18px 42px rgba(242, 140, 140, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.38);
`;
