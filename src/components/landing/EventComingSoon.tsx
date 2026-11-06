
import styled from "styled-components";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  FiArrowUpRight,
  FiCoffee,
  FiFeather,
  FiMapPin,
  FiRefreshCw,
} from "react-icons/fi";

import MeetupGraphic from "./MeetupGraphic";

/* =========================
   LINKS
========================= */

const FACEBOOK_URL =
  "https://www.facebook.com/groups/1924881931520212/";

/* =========================
   ACTIVITIES
========================= */

const activities = [
  {
    label: "Coffee meetups",
    icon: FiCoffee,
    color: "#B77D70",
  },
  {
    label: "Creative workshops",
    icon: FiFeather,
    color: "#A486A6",
  },
  {
    label: "MomsHub Out",
    icon: FiMapPin,
    color: "#87987E",
  },
  {
    label: "Community swaps",
    icon: FiRefreshCw,
    color: "#BC8A6B",
  },
];

/* =========================
   MAIN COMPONENT
========================= */

export default function EventComingSoon() {
  const reduceMotion = useReducedMotion();

  return (
    <Wrapper
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 35 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >

      {/* =====================
          LEFT — MAIN CONTENT
      ===================== */}

      
<Content>
  <Eyebrow>
    <Dot />
    OUR NEXT GATHERINGS
  </Eyebrow>

  <Title>
    Good things are
    <Accent>coming together</Accent>
  </Title>

  <Description>
    We're creating more opportunities for international moms
    to connect, share and feel at home in Trondheim.
  </Description>

  <WednesdayCard>
    <WednesdayIcon>
      <FiCoffee aria-hidden="true" />
    </WednesdayIcon>

    <WednesdayInfo>
      <strong>Wednesday Meetups</strong>
      <span>Wednesdays · 11:00–13:00</span>
      <small>Bøker & Bylab, Trondheim</small>
      <WednesdayStatus>
        First meetup date to be confirmed
      </WednesdayStatus>
    </WednesdayInfo>
  </WednesdayCard>

  <Description>
    As soon as dates are confirmed, you'll find all our
    upcoming meetups, creative workshops and community
    events right here.
  </Description>

  <PrimaryLink
    href={FACEBOOK_URL}
    target="_blank"
    rel="noopener noreferrer"
  >
    Join our community
    <FiArrowUpRight aria-hidden="true" />
  </PrimaryLink>
</Content>


      {/* =====================
          RIGHT — ANIMATED
          MEETUP GRAPHIC
      ===================== */}

      <GraphicColumn>
        <MeetupGraphic />
      </GraphicColumn>

      {/* =====================
          BOTTOM — ACTIVITIES
      ===================== */}

      <Activities>

        <ActivitiesLabel>
          A LITTLE OF WHAT'S IN THE MAKING
        </ActivitiesLabel>

        <ActivitiesGrid>
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <Activity key={activity.label}>

                <ActivityIcon
                  $color={activity.color}
                >
                  <Icon aria-hidden="true" />
                </ActivityIcon>

                <ActivityName>
                  {activity.label}
                </ActivityName>

              </Activity>
            );
          })}
        </ActivitiesGrid>

      </Activities>

    </Wrapper>
  );
}

/* =========================
   WRAPPER
========================= */

const Wrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  display: grid;

  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(0, 0.85fr);

  align-items: center;

  column-gap: clamp(1.5rem, 3vw, 3.5rem);
  row-gap: 3rem;

  padding: clamp(2rem, 4vw, 4rem);

  border-radius: 32px;

  background:
    radial-gradient(
      circle at 85% 20%,
      rgba(232, 180, 169, 0.12),
      transparent 38%
    ),
    linear-gradient(
      125deg,
      rgba(255, 250, 247, 0.96),
      rgba(247, 233, 226, 0.95)
    );

  border: 1px solid #ead8cf;

  box-shadow:
    0 20px 60px rgba(98, 75, 65, 0.07);

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;

    row-gap: 2rem;
  }

  @media (max-width: 600px) {
    padding: 1.7rem;

    border-radius: 24px;

    row-gap: 1.5rem;
  }
`;

/* =========================
   LEFT CONTENT
========================= */

const Content = styled.div`
  position: relative;
  z-index: 2;

  min-width: 0;
  max-width: 650px;

  padding: 1rem 0;

  @media (max-width: 1050px) {
    max-width: 720px;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

/* =========================
   EYEBROW
========================= */

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin: 0 0 1.8rem;

  color: #ad756b;

  font-size: 0.72rem;
  font-weight: 750;

  letter-spacing: 0.16em;
  text-transform: uppercase;

  @media (max-width: 600px) {
    margin-bottom: 1.3rem;

    font-size: 0.65rem;
  }
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;

  flex-shrink: 0;

  border-radius: 50%;
  background: #bb8178;

  box-shadow:
    0 0 0 5px rgba(187, 129, 120, 0.12);
`;

/* =========================
   TITLE
========================= */

const Title = styled.h3`
  margin: 0 0 1.5rem;

  color: #624b41;

  font-size: clamp(2.5rem, 4vw, 4.6rem);
  font-weight: 750;

  line-height: 1.08;
  letter-spacing: -0.055em;

  @media (max-width: 600px) {
    font-size: clamp(2.3rem, 9vw, 3.4rem);
    margin-bottom: 1.3rem;
  }
`;

const Accent = styled.span`
  display: block;

  margin-top: 0.2rem;

  color: #bb8178;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-style: italic;
  font-weight: 400;

  letter-spacing: -0.045em;
`;

/* =========================
   DESCRIPTION
========================= */

const Description = styled.p`
  max-width: 500px;

  margin: 0 0 2rem;

  color: #62534c;

  font-size: 1rem;
  line-height: 1.8;

  @media (max-width: 600px) {
    font-size: 0.93rem;

    margin-bottom: 1.7rem;
  }
`;


const WednesdayCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  margin: 0 0 1.8rem;
  padding: 1.4rem;

  border-radius: 20px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(187, 129, 120, 0.22);

  box-shadow: 0 8px 28px rgba(98, 75, 65, 0.04);

  @media (max-width: 600px) {
    padding: 1.1rem;
    gap: 0.85rem;
  }
`;

const WednesdayIcon = styled.div`
  width: 46px;
  height: 46px;
  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 14px;
  background: #f5e5df;
  color: #a96e66;
  font-size: 1.3rem;
`;

const WednesdayInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  min-width: 0;

  strong {
    color: #624b41;
    font-size: 1rem;
  }

  span {
    color: #a96e66;
    font-size: 0.92rem;
    font-weight: 700;
  }

  small {
    color: #76645b;
    font-size: 0.8rem;
  }
`;

const WednesdayStatus = styled.p`
  margin: 0.35rem 0 0;

  color: #ad756b;
  font-size: 0.75rem;
  font-weight: 600;
  font-style: italic;
`;


/* =========================
   MAIN BUTTON
========================= */

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 0.85rem;

  min-height: 54px;
  padding: 0.9rem 1.5rem;

  border-radius: 999px;

  background: #a96e66;
  color: #ffffff;

  font-size: 0.88rem;
  font-weight: 700;

  text-decoration: none;

  box-shadow:
    0 12px 30px rgba(169, 110, 102, 0.16);

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  svg {
    font-size: 1.1rem;

    transition: transform 0.3s ease;
  }

  &:hover {
    background: #946058;
    transform: translateY(-3px);

    box-shadow:
      0 18px 35px rgba(169, 110, 102, 0.22);
  }

  &:hover svg {
    transform: translate(3px, -3px);
  }

  &:focus-visible {
    outline: 3px solid #624b41;
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    svg {
      transition: none;
    }

    &:hover,
    &:hover svg {
      transform: none;
    }
  }
`;

/* =========================
   RIGHT GRAPHIC COLUMN
========================= */

const GraphicColumn = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;

  @media (max-width: 1050px) {
    max-width: 490px;

    margin: 0 auto;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

/* =========================
   BOTTOM ACTIVITIES
========================= */

const Activities = styled.div`
  position: relative;
  z-index: 2;

  /* Occupies both grid columns */
  grid-column: 1 / -1;

  padding-top: 2rem;

  border-top:
    1px solid rgba(98, 75, 65, 0.13);

  @media (max-width: 600px) {
    padding-top: 1.7rem;
  }
`;

const ActivitiesLabel = styled.p`
  margin: 0 0 1.6rem;

  color: #ad756b;

  font-size: 0.68rem;
  font-weight: 750;

  letter-spacing: 0.17em;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 0.62rem;

    margin-bottom: 1.2rem;
  }
`;

/* =========================
   ACTIVITIES GRID
========================= */

const ActivitiesGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;

    gap: 0.75rem;
  }
`;

const Activity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  min-width: 0;

  padding: 0.6rem 0;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const ActivityIcon = styled.span<{
  $color: string;
}>`
  width: 44px;
  height: 44px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.68);

  border:
    1px solid rgba(255, 255, 255, 0.8);

  color: ${({ $color }) => $color};

  font-size: 1.2rem;
`;

const ActivityName = styled.span`
  color: #624b41;

  font-size: 0.78rem;
  font-weight: 700;

  line-height: 1.4;
`;
