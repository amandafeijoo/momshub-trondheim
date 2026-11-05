
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

/* =========================
   CONSTANTS
========================= */

const FACEBOOK_URL =
  "https://www.facebook.com/groups/1924881931520212/";

const LOGO_URL =
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778759848/logoMomhub_Trondheim_1_ofkrpe.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Events", href: "#events" },
  { label: "Get Involved", href: "#get-involved" },
];

/* =========================
   NAVBAR COMPONENT
========================= */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    const handleResize = () => {
      if (window.innerWidth > 950) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Nav $scrolled={scrolled} aria-label="Main navigation">
      <Container $scrolled={scrolled}>
        {/* LOGO */}

        <LogoWrapper
          href="#home"
          onClick={() => setOpen(false)}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          aria-label="MomsHub Trondheim - Back to home"
        >
          <LogoImage
            src={LOGO_URL}
            alt=""
          />

          <LogoText>MomsHub Trondheim</LogoText>
        </LogoWrapper>

        {/* DESKTOP NAVIGATION */}

        <Links>
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Links>

        {/* DESKTOP CTA */}

        <CTAButton
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Join Us</span>
          <FiArrowUpRight />
        </CTAButton>

        {/* MOBILE TOGGLE */}

        <MenuButton
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="momshub-mobile-menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </MenuButton>
      </Container>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {open && (
          <MobileMenu
            id="momshub-mobile-menu"
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <MobileMenuLabel>
              EXPLORE MOMSHUB
            </MobileMenuLabel>

            {navItems.map((item, index) => (
              <MobileLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.045,
                }}
              >
                <span>{item.label}</span>
                <FiArrowUpRight />
              </MobileLink>
            ))}

            <MobileCTA
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <span>Join our community</span>
              <FiArrowUpRight />
            </MobileCTA>

            <MobileFooter>
              Moms need moms.
            </MobileFooter>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
}

/* =========================
   NAVBAR BACKGROUND
========================= */

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background: ${({ $scrolled }) =>
    $scrolled
      ? "rgba(255, 249, 245, 0.92)"
      : "rgba(255, 249, 245, 0.74)"};

  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(28px)" : "blur(18px)"};

  -webkit-backdrop-filter: blur(24px);

  border-bottom: 1px solid
    rgba(169, 110, 102, 0.13);

  box-shadow: ${({ $scrolled }) =>
    $scrolled
      ? "0 12px 35px rgba(98, 75, 65, 0.09)"
      : "0 2px 18px rgba(98, 75, 65, 0.025)"};

  transition:
    background 0.4s ease,
    box-shadow 0.4s ease,
    backdrop-filter 0.4s ease;
`;

/* =========================
   MAIN CONTAINER
========================= */

const Container = styled.div<{ $scrolled: boolean }>`
  max-width: 1350px;
  margin: 0 auto;

  height: ${({ $scrolled }) =>
    $scrolled ? "68px" : "82px"};

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  transition: height 0.4s ease;

  @media (max-width: 950px) {
    height: ${({ $scrolled }) =>
      $scrolled ? "68px" : "76px"};

    padding: 0 1.3rem;
  }
`;

/* =========================
   BRAND / LOGO
========================= */

const LogoWrapper = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;

  flex-shrink: 0;
  text-decoration: none;

  &:focus-visible {
    outline: 3px solid #bb8178;
    outline-offset: 5px;
    border-radius: 8px;
  }
`;

const LogoImage = styled.img`
  width: 43px;
  height: 43px;

  object-fit: contain;
  flex-shrink: 0;

  transition: transform 0.45s ease;

  ${LogoWrapper}:hover & {
    transform: rotate(-12deg) scale(1.06);
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
  }
`;

const LogoText = styled.span`
  color: #624b41;

  font-size: 1.1rem;
  font-weight: 750;
  letter-spacing: -0.045em;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.98rem;
  }
`;

/* =========================
   DESKTOP LINKS
========================= */

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(1.3rem, 2vw, 2rem);

  @media (max-width: 950px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;

  display: inline-flex;
  align-items: center;

  color: #624b41;

  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;

  transition: color 0.3s ease;

  &::after {
    content: "";

    position: absolute;
    bottom: -9px;
    left: 0;

    width: 100%;
    height: 2px;
    border-radius: 999px;

    background: #bb8178;

    transform: scaleX(0);
    transform-origin: left center;

    transition: transform 0.35s ease;
  }

  &:hover {
    color: #a96e66;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid #bb8178;
    outline-offset: 5px;
  }
`;

/* =========================
   DESKTOP CTA
========================= */

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;

  flex-shrink: 0;

  min-height: 45px;
  padding: 0.75rem 1.3rem;

  border-radius: 999px;

  background: #a96e66;
  color: #ffffff;

  font-size: 0.87rem;
  font-weight: 700;
  text-decoration: none;

  box-shadow: 0 8px 24px
    rgba(169, 110, 102, 0.17);

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  svg {
    font-size: 1.05rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #946058;
    transform: translateY(-2px);

    box-shadow: 0 12px 28px
      rgba(169, 110, 102, 0.24);
  }

  &:hover svg {
    transform: translate(2px, -2px);
  }

  &:focus-visible {
    outline: 3px solid #bb8178;
    outline-offset: 4px;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

/* =========================
   MOBILE MENU BUTTON
========================= */

const MenuButton = styled.button`
  display: none;

  width: 45px;
  height: 45px;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 50%;

  border: 1px solid #ead7cc;
  background: rgba(255, 255, 255, 0.68);

  color: #624b41;

  font-size: 1.45rem;
  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #f7e8e1;
    transform: rotate(5deg);
  }

  &:focus-visible {
    outline: 3px solid #bb8178;
    outline-offset: 3px;
  }

  @media (max-width: 950px) {
    display: inline-flex;
  }
`;

/* =========================
   MOBILE MENU
========================= */

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.6rem);

  left: 1rem;
  right: 1rem;

  display: none;

  padding: 1.35rem;
  border-radius: 24px;

  background: rgba(255, 250, 247, 0.97);

  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);

  border: 1px solid #efddd4;

  box-shadow: 0 24px 65px
    rgba(98, 75, 65, 0.16);

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  @media (max-width: 480px) {
    left: 0.75rem;
    right: 0.75rem;

    padding: 1rem;
    border-radius: 22px;
  }
`;

const MobileMenuLabel = styled.p`
  margin: 0.4rem 0 1rem 0.7rem;

  color: #ad756b;

  font-size: 0.66rem;
  font-weight: 750;
  letter-spacing: 0.2em;
`;

/* =========================
   MOBILE LINKS
========================= */

const MobileLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 1.15rem;

  border-radius: 14px;

  color: #624b41;

  font-size: 1rem;
  font-weight: 650;
  text-decoration: none;

  transition:
    background 0.3s ease,
    color 0.3s ease;

  svg {
    font-size: 1.1rem;
    color: #bb8178;

    transition: transform 0.3s ease;
  }

  &:hover {
    background: #f7ece7;
    color: #a96e66;
  }

  &:hover svg {
    transform: translate(3px, -3px);
  }

  &:focus-visible {
    outline: 2px solid #bb8178;
    outline-offset: -2px;
  }
`;

/* =========================
   MOBILE JOIN BUTTON
========================= */

const MobileCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  margin-top: 1rem;

  padding: 1.15rem 1.3rem;
  border-radius: 16px;

  background: #a96e66;
  color: #ffffff;

  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;

  transition: background 0.3s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: #946058;
  }

  &:focus-visible {
    outline: 3px solid #bb8178;
    outline-offset: 3px;
  }
`;

/* =========================
   MOBILE SIGNATURE
========================= */

const MobileFooter = styled.p`
  margin: 1.4rem 0 0.3rem;

  text-align: center;

  color: #bb8178;

  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.05rem;
  font-style: italic;
`;
