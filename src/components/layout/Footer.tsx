
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiInstagram,
  FiFacebook,
  FiArrowUpRight,
  FiMapPin,
  FiHeart,
} from "react-icons/fi";

/* =========================
   CONSTANTS
========================= */

const LOGO_URL =
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1778759848/logoMomhub_Trondheim_1_ofkrpe.png";

const FACEBOOK_URL =
  "https://www.facebook.com/groups/1924881931520212/";

const INSTAGRAM_URL =
  "https://www.instagram.com/momshubtrondheim/";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Professor+Brochs+gate+2+Trondheim";

const footerLinks = [
  { label: "Back to top", href: "#home" },
  { label: "Our story", href: "#about" },
  { label: "What we do", href: "#activities" },
  { label: "Upcoming events", href: "#events" },
  { label: "Get involved", href: "#get-involved" },
];

/* =========================
   FOOTER COMPONENT
========================= */

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <FooterSection>
      <Inner>

        {/* TOP EDITORIAL DETAIL */}

        <TopLine>
          <TopLabel>
            MOMSHUB TRONDHEIM / COMMUNITY
          </TopLabel>

          <TopRight>
            <span>TRONDHEIM, NORWAY</span>
            <SmallFlower
              src={LOGO_URL}
              alt=""
              aria-hidden="true"
            />
          </TopRight>
        </TopLine>

        {/* MAIN FOOTER */}

        <MainGrid>

          {/* BRAND COLUMN */}

          <BrandColumn
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 28 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <BrandTitle>
              Local roots
              <BrandAccent>
                Global stories
              </BrandAccent>
            </BrandTitle>

            <BrandDescription>
              A welcoming community bringing
              international mothers together
              through friendship, connection
              and shared experiences in Trondheim.
            </BrandDescription>

            {/* SOCIAL LINKS */}

            <SocialLinks>
              <SocialLink
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MomsHub Trondheim on Instagram"
              >
                <FiInstagram />
              </SocialLink>

              <SocialLink
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="International Moms in Trondheim Facebook group"
              >
                <FiFacebook />
              </SocialLink>

              <SocialHandle>
                @momshubtrondheim
              </SocialHandle>
            </SocialLinks>
          </BrandColumn>

          {/* EXPLORE COLUMN */}

          <LinksColumn>
            <ColumnLabel>EXPLORE</ColumnLabel>

            <LinkList>
              {footerLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                  <FiArrowUpRight />
                </FooterLink>
              ))}
            </LinkList>
          </LinksColumn>

          {/* COMMUNITY SPACE COLUMN */}

          <SpaceColumn>
            <ColumnLabel>
              OUR COMMUNITY SPACE
            </ColumnLabel>

            <VenueName>
              Bøker & Bylab
            </VenueName>

            <VenueDescription>
              Our community meeting space,
              made possible through collaboration.
            </VenueDescription>

            <Address>
              <FiMapPin />
              <span>
                Professor Brochs gate 2
                <br />
                7030 Trondheim, Norway
              </span>
            </Address>

            <DirectionsLink
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find us on the map
              <FiArrowUpRight />
            </DirectionsLink>
          </SpaceColumn>

        </MainGrid>

        {/* BOTTOM BAR */}

        <BottomBar>
          <Copyright>
            © {year} MomsHub Trondheim.
            All rights reserved.
          </Copyright>

          <BottomMessage>
            Made with
            <FiHeart aria-label="love" />
            in Trondheim
          </BottomMessage>

          <BottomMotto>
            Moms need moms
          </BottomMotto>
        </BottomBar>

      </Inner>
    </FooterSection>
  );
}

/* =========================
   FOOTER BACKGROUND
========================= */

const FooterSection = styled.footer`
  position: relative;
  z-index: 3;
  isolation: isolate;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 8% 5%,
      rgba(238, 184, 171, 0.13),
      transparent 34%
    ),
    radial-gradient(
      circle at 96% 90%,
      rgba(175, 192, 169, 0.12),
      transparent 35%
    ),
    #f8f1ea;

  border-radius: 38px 38px 0 0;

  padding: 3.5rem 1.5rem 1.8rem;

  @media (max-width: 768px) {
    border-radius: 26px 26px 0 0;
    padding: 2.5rem 1.25rem 1.5rem;
  }
`;

const Inner = styled.div`
  max-width: 1220px;
  margin: 0 auto;
`;

/* =========================
   TOP LINE
========================= */

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid
    rgba(98, 75, 65, 0.16);
`;

const TopLabel = styled.span`
  color: #a96e66;

  font-size: 0.67rem;
  font-weight: 750;
  letter-spacing: 0.19em;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  color: #987e71;

  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.13em;

  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`;

const SmallFlower = styled.img`
  width: 42px;
  height: 42px;

  object-fit: contain;
  opacity: 0.85;
`;

/* =========================
   GRID
========================= */

const MainGrid = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1.45fr)
    minmax(0, 0.65fr)
    minmax(0, 0.85fr);

  gap: clamp(2.5rem, 5vw, 6rem);

  padding: 5rem 0 5.5rem;

  @media (max-width: 950px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 3.5rem;

    padding: 4rem 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 3rem;

    padding: 3rem 0;
  }
`;

/* =========================
   BRAND
========================= */

const BrandColumn = styled(motion.div)`
  min-width: 0;

  @media (max-width: 950px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 600px) {
    grid-column: auto;
  }
`;

const BrandTitle = styled.h2`
  margin: 0 0 1.8rem;

  color: #624b41;

  font-size: clamp(3rem, 4.2vw, 5rem);
  font-weight: 750;

  line-height: 1.08;
  letter-spacing: -0.06em;
`;

const BrandAccent = styled.span`
  display: block;
  margin-top: 0.1em;

  color: #bb8178;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-style: italic;
  font-weight: 400;

  letter-spacing: -0.045em;
`;

const BrandDescription = styled.p`
  max-width: 440px;
  margin: 0;

  color: #62534c;

  font-size: 1rem;
  line-height: 1.85;
`;

/* =========================
   SOCIALS
========================= */

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 0.75rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 44px;
  height: 44px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: #f1dfd7;
  color: #a96e66;

  border: 1px solid
    rgba(169, 110, 102, 0.1);

  font-size: 1.15rem;
  text-decoration: none;

  transition:
    transform 0.3s ease,
    color 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: #a96e66;
    color: #ffffff;
  }

  &:focus-visible {
    outline: 3px solid #bb8178;
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const SocialHandle = styled.span`
  margin-left: 0.5rem;

  color: #987e71;

  font-size: 0.8rem;
  font-weight: 600;

  @media (max-width: 380px) {
    margin-left: 0;
  }
`;

/* =========================
   LINKS COLUMN
========================= */

const LinksColumn = styled.div`
  min-width: 0;
`;

const ColumnLabel = styled.h3`
  margin: 0 0 2rem;

  color: #a96e66;

  font-size: 0.7rem;
  font-weight: 800;

  letter-spacing: 0.17em;
  text-transform: uppercase;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.2rem;
`;

const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;

  color: #624b41;

  font-size: 0.93rem;
  font-weight: 600;

  text-decoration: none;

  transition:
    color 0.3s ease,
    gap 0.3s ease;

  svg {
    opacity: 0;
    color: #bb8178;

    transform: translate(-5px, 5px);

    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  &:hover {
    color: #a96e66;
    gap: 0.95rem;
  }

  &:hover svg,
  &:focus-visible svg {
    opacity: 1;
    transform: translate(0, 0);
  }

  &:focus-visible {
    outline: 2px solid #bb8178;
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    svg {
      opacity: 1;
      transform: none;
    }
  }
`;

/* =========================
   COMMUNITY SPACE
========================= */

const SpaceColumn = styled.div`
  min-width: 0;
`;

const VenueName = styled.h3`
  margin: 0 0 1rem;

  color: #624b41;

  font-size: 1.3rem;
  font-weight: 750;
  letter-spacing: -0.035em;
`;

const VenueDescription = styled.p`
  margin: 0 0 1.6rem;

  color: #76645b;

  font-size: 0.88rem;
  line-height: 1.8;
`;

const Address = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 0.75rem;

  color: #62534c;

  font-size: 0.85rem;
  line-height: 1.8;

  svg {
    margin-top: 0.25rem;

    flex-shrink: 0;

    color: #bb8178;
    font-size: 1.15rem;
  }
`;

const DirectionsLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;

  margin-top: 1.5rem;
  padding-bottom: 0.35rem;

  color: #a96e66;

  font-size: 0.85rem;
  font-weight: 700;

  text-decoration: none;

  border-bottom: 1px solid
    rgba(169, 110, 102, 0.3);

  transition:
    gap 0.3s ease,
    color 0.3s ease;

  &:hover {
    gap: 0.95rem;
    color: #624b41;
  }

  &:focus-visible {
    outline: 2px solid #bb8178;
    outline-offset: 4px;
  }
`;

/* =========================
   BOTTOM BAR
========================= */

const BottomBar = styled.div`
  padding-top: 1.6rem;

  border-top: 1px solid
    rgba(98, 75, 65, 0.16);

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.85rem;
  }
`;

const Copyright = styled.span`
  color: #987e71;

  font-size: 0.77rem;
  line-height: 1.5;
`;

const BottomMessage = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  color: #987e71;

  font-size: 0.77rem;

  svg {
    color: #bb8178;
    font-size: 0.85rem;
  }
`;

const BottomMotto = styled.span`
  color: #bb8178;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-style: italic;
  font-size: 1.02rem;
`;
