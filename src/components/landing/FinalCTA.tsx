
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiMapPin, FiArrowUpRight } from "react-icons/fi";

export default function FinalCTA() {
  return (
    <Section id="our-space">
      <Container
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT — REAL VENUE PHOTO */}
        <ImageColumn>
          <ImageWrapper>
            <VenueImage
              src="/images/boker-bylab-floral.png"
              alt="The children's reading and community area at Bøker & Bylab in Trondheim"
              loading="lazy"
            />

            <PhotoLabel>
              <span className="dot" />
              OUR LITTLE CORNER IN TRONDHEIM
            </PhotoLabel>
          </ImageWrapper>

          <ImageCaption>
            <span>BØKER & BYLAB</span>
            <span>TRONDHEIM, NORWAY</span>
          </ImageCaption>
        </ImageColumn>

        {/* RIGHT — CONTENT */}
        <ContentColumn>
          <SmallTitle>
            03 / OUR COMMUNITY SPACE
          </SmallTitle>

          <Title>
            A place to meet
            <Accent>A space to belong</Accent>
          </Title>

          <Description>
            We're excited to have a welcoming space for
            MomsHub through our collaboration with
            Bøker & Bylab.
          </Description>

          <Description>
            A place where international moms can come
            together, build friendships, share experiences,
            and enjoy creative workshops and family-friendly
            activities with their little ones.
          </Description>

          <LocationBlock>
            <LocationIcon>
              <FiMapPin />
            </LocationIcon>

            <LocationInfo>
              <LocationName>Bøker & Bylab</LocationName>
              <Address>
                Professor Brochs gate 2, 7030 Trondheim
              </Address>
            </LocationInfo>
          </LocationBlock>

          <Actions>
            <PrimaryButton href="#events">
              Explore upcoming events
              <FiArrowUpRight />
            </PrimaryButton>

            <SecondaryLink
              href="https://www.google.com/maps/search/?api=1&query=Professor+Brochs+gate+2+Trondheim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
              <FiArrowUpRight />
            </SecondaryLink>
          </Actions>

          <Acknowledgement>
            With thanks to Bøker & Bylab and Trondheim
            Kommune for supporting community connections.
          </Acknowledgement>
        </ContentColumn>
      </Container>
    </Section>
  );
}

/* =========================
   SECTION
========================= */


const Section = styled.section`
  position: relative;
  z-index: 2;

  padding: 8rem 1.5rem;

  /* Let the 3D flower show through */
  background: rgba(250, 245, 239, 0.72);

  scroll-margin-top: 90px;

  @media (max-width: 768px) {
    padding: 5rem 1.2rem;
  }
`;


const Container = styled(motion.div)`
  max-width: 1220px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: clamp(3rem, 6vw, 7rem);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

/* =========================
   IMAGE
========================= */

const ImageColumn = styled.div`
  min-width: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  border-radius: 30px;

  background: #e9ddd3;
  box-shadow: 0 24px 65px rgba(98, 75, 65, 0.12);

  @media (max-width: 900px) {
    max-width: 620px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    border-radius: 22px;
  }
`;

const VenueImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;

  transition: transform 0.8s ease;

  ${ImageWrapper}:hover & {
    transform: scale(1.035);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const PhotoLabel = styled.div`
  position: absolute;
  left: 1.4rem;
  bottom: 1.4rem;

  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  max-width: calc(100% - 2.8rem);
  padding: 0.85rem 1.1rem;
  border-radius: 999px;

  background: rgba(255, 250, 246, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);

  color: #624b41;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.08em;

  .dot {
    width: 7px;
    height: 7px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #bb8178;
  }
`;

const ImageCaption = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  margin-top: 1rem;

  font-size: 0.68rem;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: #a48b7e;
`;

/* =========================
   RIGHT CONTENT
========================= */

const ContentColumn = styled.div`
  min-width: 0;
`;

const SmallTitle = styled.p`
  margin: 0 0 1.8rem;

  text-transform: uppercase;
  letter-spacing: 0.2em;

  color: #ad756b;
  font-size: 0.75rem;
  font-weight: 700;
`;

const Title = styled.h2`
  max-width: 650px;
  margin: 0 0 2rem;

  color: #624b41;

  font-size: clamp(3rem, 5vw, 5.2rem);
  font-weight: 750;
  line-height: 1.08;
  letter-spacing: -0.055em;

  @media (max-width: 600px) {
    font-size: clamp(2.7rem, 10vw, 3.8rem);
  }
`;

const Accent = styled.span`
  display: block;

  margin-top: 0.25rem;

  color: #bb8178;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.045em;
`;

const Description = styled.p`
  max-width: 540px;
  margin: 0 0 1rem;

  font-size: 1.03rem;
  line-height: 1.85;
  color: #62534c;
`;

/* =========================
   LOCATION
========================= */

const LocationBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-top: 2.3rem;
  padding: 1.35rem 0;

  border-top: 1px solid #e9dcd4;
  border-bottom: 1px solid #e9dcd4;
`;

const LocationIcon = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 15px;

  display: grid;
  place-items: center;

  background: #f5e5df;
  color: #a96e66;
  font-size: 1.3rem;
`;

const LocationInfo = styled.div`
  display: grid;
  gap: 0.4rem;
`;

const LocationName = styled.p`
  margin: 0;

  font-size: 1.05rem;
  font-weight: 700;
  color: #624b41;
`;

const Address = styled.p`
  margin: 0;

  font-size: 0.88rem;
  line-height: 1.5;
  color: #76645b;
`;

/* =========================
   ACTIONS
========================= */

const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  margin-top: 2.2rem;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  min-height: 54px;
  padding: 0.9rem 1.5rem;
  border-radius: 999px;

  background: #a96e66;
  color: #ffffff;

  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;

  box-shadow: 0 14px 32px rgba(169, 110, 102, 0.2);

  transition:
    transform 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: #946058;
  }

  &:focus-visible {
    outline: 3px solid #bb8178;
    outline-offset: 3px;
  }
`;

const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  color: #a96e66;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;

  border-bottom: 1px solid #d9b8aa;
  padding-bottom: 0.4rem;

  transition: color 0.3s ease;

  &:hover {
    color: #624b41;
  }

  &:focus-visible {
    outline: 3px solid #bb8178;
    outline-offset: 4px;
  }
`;

const Acknowledgement = styled.p`
  margin: 2rem 0 0;
  max-width: 500px;

  color: #9d877b;
  font-size: 0.78rem;
  line-height: 1.7;
`;
