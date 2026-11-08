
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiGift,
  FiHeart,
  FiInstagram,
  FiMapPin,
  FiStar,
} from "react-icons/fi";

const INSTAGRAM_URL =
  "https://www.instagram.com/momshubtrondheim/";

// Norwegian winter time (CET, UTC+01:00).
// Hide decorating from 21 November.
// Hide the entire announcement from 30 November.
const DECORATING_CUTOFF = new Date(
  "2026-11-21T00:00:00+01:00"
).getTime();

const CHRISTMAS_CUTOFF = new Date(
  "2026-11-30T00:00:00+01:00"
).getTime();

export default function ChristmasVolunteeringBanner() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timerIds: number[] = [];

    for (const deadline of [
      DECORATING_CUTOFF,
      CHRISTMAS_CUTOFF,
    ]) {
      const delay = deadline - Date.now();

      if (delay > 0) {
        const timerId = window.setTimeout(() => {
          setNow(Date.now());
        }, delay);

        timerIds.push(timerId);
      }
    }

    return () => {
      timerIds.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  // Automatically hide the announcement after 29 November.
  if (now >= CHRISTMAS_CUTOFF) {
    return null;
  }

  const showDecorating = now < DECORATING_CUTOFF;

  return (
    <Banner aria-labelledby="christmas-title">
      <TopLine>
        <Organizer>
          <FiStar aria-hidden="true" />
          MOMSHUB × BØKER & BYLAB
        </Organizer>

        <VolunteerTag>VOLUNTEERS WANTED</VolunteerTag>
      </TopLine>

      <ChristmasVisual>
        <VisualContent>
          <FiGift aria-hidden="true" />

          <span>A LITTLE CHRISTMAS MAGIC</span>

          <strong>
            Made with love,
            <br />
            made together.
          </strong>
        </VisualContent>

        {/* PHOTO CREDIT */}
        <PhotoCredit
          href="https://www.pexels.com/photo/a-hand-holding-the-christmas-decoration-on-the-table-6063136/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Photo: cottonbro studio / Pexels
        </PhotoCredit>
      </ChristmasVisual>

      <Intro>
        <SectionLabel>
          COMMUNITY & VOLUNTEERING
        </SectionLabel>

        <Heading id="christmas-title">
          Let's make Christmas
          <Accent>special, together.</Accent>
        </Heading>

        <IntroText>
          Bøker & Bylab has invited MomsHub Trondheim
          and other local groups to help bring two
          Christmas celebrations to life.
          We'd love to have you involved!
        </IntroText>
      </Intro>

      <EventList>
        {showDecorating && (
          <EventItem>
            <DateBox>
              <strong>20</strong>
              <span>NOV</span>
            </DateBox>

            <EventContent>
              <EventTitle>
                Christmas Decorating Day
              </EventTitle>

              <EventMeta>
                <FiCalendar aria-hidden="true" />
                <time dateTime="2026-11-20">
                  Friday, 20 November
                </time>
              </EventMeta>

              <EventMeta>
                <FiClock aria-hidden="true" />
                13:00–16:00
              </EventMeta>

              <EventDescription>
                Help decorate the space, meet volunteers
                from other local groups and make a MomsHub
                card for the community Christmas tree.
              </EventDescription>

              <SmallNote>
                Please note: the timing may change.
              </SmallNote>
            </EventContent>
          </EventItem>
        )}

        <EventItem>
          <DateBox>
            <strong>29</strong>
            <span>NOV</span>
          </DateBox>

          <EventContent>
            <EventTitle>
              Community Christmas Party
            </EventTitle>

            <EventMeta>
              <FiCalendar aria-hidden="true" />
              <time dateTime="2026-11-29">
                Sunday, 29 November
              </time>
            </EventMeta>

            <EventMeta>
              <FiClock aria-hidden="true" />
              12:00–16:00
            </EventMeta>

            <EventDescription>
              Help plan the party, lead an activity,
              volunteer as Santa, contribute to the
              children's gift bags, or help with
              setup and cleanup.
            </EventDescription>

            <SmallNote>
              Teknobyen's Christmas tree lighting
              follows outdoors at 16:00.
            </SmallNote>
          </EventContent>
        </EventItem>
      </EventList>

      <LocationLine>
        <FiMapPin aria-hidden="true" />
        <span>Bøker & Bylab · Trondheim</span>
      </LocationLine>

      <VolunteerBox>
        <HeartIcon>
          <FiHeart aria-hidden="true" />
        </HeartIcon>

        <VolunteerInfo>
          <strong>Want to volunteer?</strong>

          <p>
            Send us a message on Instagram telling us
            which event you'd like to help with.
            We'll forward you the appropriate sign-up form.
            Please complete the form to register as a volunteer.
          </p>
        </VolunteerInfo>
      </VolunteerBox>

      <Actions>
        <InstagramButton
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram aria-hidden="true" />
          Message MomsHub on Instagram
          <FiArrowUpRight aria-hidden="true" />
        </InstagramButton>
      </Actions>

      <Credit>
        Hosted by Bøker & Bylab, with support from
        MomsHub Trondheim and other local community groups.
      </Credit>
    </Banner>
  );
}

/* =========================
   MAIN BANNER
========================= */

const Banner = styled.article`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto 3rem;
  padding: clamp(1.4rem, 3vw, 2.5rem);

  border-radius: 30px;
  background: rgba(255, 250, 247, 0.97);
  border: 1px solid #ead8cf;

  box-shadow: 0 20px 60px rgba(98, 75, 65, 0.07);

  color: #624b41;

  @media (max-width: 600px) {
    border-radius: 23px;
    padding: 1.25rem;
  }
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.35rem;
`;

const Organizer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;

  color: #a96e66;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;

  svg {
    font-size: 1rem;
  }
`;

const VolunteerTag = styled.span`
  padding: 0.55rem 0.85rem;
  border-radius: 100px;

  background: #f4e4dd;
  color: #a96e66;

  font-size: 0.65rem;
  font-weight: 750;
  letter-spacing: 0.08em;
`;

/* =========================
   CHRISTMAS VISUAL
========================= */

const ChristmasVisual = styled.div`
  position: relative;
  min-height: 230px;
  overflow: hidden;
  border-radius: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image:
    linear-gradient(
      110deg,
      rgba(77, 64, 54, 0.78),
      rgba(129, 95, 83, 0.35)
    ),
    url("/images/christmas-volunteering.jpg");

  background-size: cover;
  background-position: center;
  background-color: #9d877b;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 270px;
    height: 270px;
    left: -90px;
    top: -150px;
  }

  &::after {
    width: 230px;
    height: 230px;
    right: -70px;
    bottom: -150px;
  }

  @media (max-width: 600px) {
    min-height: 210px;
    border-radius: 17px;
  }
`;

const VisualContent = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;

  padding: 2rem;
  text-align: center;
  color: #fffaf7;

  > svg {
    font-size: 1.9rem;
  }

  span {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.2em;
  }

  strong {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.8rem, 4vw, 3.1rem);
    font-style: italic;
    font-weight: 400;
    line-height: 1.2;
  }
`;

/* =========================
   PHOTO CREDIT
========================= */

const PhotoCredit = styled.a`
  position: absolute;
  right: 14px;
  bottom: 12px;
  z-index: 2;

  padding: 0.35rem 0.55rem;
  border-radius: 7px;

  background: rgba(53, 42, 35, 0.42);
  color: rgba(255, 255, 255, 0.93);

  font-size: 0.65rem;
  line-height: 1.3;
  text-decoration: none;
  backdrop-filter: blur(4px);

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }
`;

/* =========================
   INTRO
========================= */

const Intro = styled.div`
  padding: 2rem 0 1.5rem;
`;

const SectionLabel = styled.p`
  margin: 0 0 1rem;

  font-size: 0.68rem;
  font-weight: 750;
  letter-spacing: 0.16em;
  color: #ad756b;
`;

const Heading = styled.h3`
  margin: 0 0 1.25rem;

  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.12;
  letter-spacing: -0.05em;
  font-weight: 750;
  color: #624b41;
`;

const Accent = styled.span`
  display: block;
  margin-top: 0.2rem;

  color: #bb8178;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-weight: 400;
`;

const IntroText = styled.p`
  max-width: 730px;
  margin: 0;

  font-size: 1rem;
  line-height: 1.8;
  color: #76645b;
`;

/* =========================
   EVENTS
========================= */

const EventList = styled.div`
  display: grid;
  gap: 0;
`;

const EventItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;

  padding: 1.65rem 0;
  border-top: 1px solid #eaded6;

  @media (max-width: 600px) {
    gap: 0.9rem;
  }
`;

const DateBox = styled.div`
  width: 74px;
  min-width: 74px;
  height: 78px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  background: #f4e6df;

  strong {
    color: #624b41;
    font-size: 1.8rem;
    line-height: 1.1;
  }

  span {
    margin-top: 0.25rem;
    color: #ad756b;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.1em;
  }

  @media (max-width: 600px) {
    width: 58px;
    min-width: 58px;
    height: 65px;

    strong {
      font-size: 1.5rem;
    }
  }
`;

const EventContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const EventTitle = styled.h4`
  margin: 0 0 0.8rem;

  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: #624b41;
`;

const EventMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.4rem;

  color: #a96e66;
  font-size: 0.83rem;
  font-weight: 600;

  svg {
    flex-shrink: 0;
  }
`;

const EventDescription = styled.p`
  margin: 0.8rem 0 0;

  color: #76645b;
  font-size: 0.9rem;
  line-height: 1.75;
`;

const SmallNote = styled.p`
  margin: 0.65rem 0 0;

  color: #ad756b;
  font-size: 0.78rem;
  font-style: italic;
  line-height: 1.5;
`;

const LocationLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  padding: 1.2rem 0;
  border-top: 1px solid #eaded6;

  color: #a96e66;
  font-size: 0.84rem;
  font-weight: 700;
`;

/* =========================
   VOLUNTEERING CTA
========================= */

const VolunteerBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 20px;

  background: #f6ede7;

  @media (max-width: 600px) {
    padding: 1.1rem;
  }
`;

const HeartIcon = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 13px;
  background: #f0ded8;
  color: #a96e66;

  font-size: 1.2rem;
`;

const VolunteerInfo = styled.div`
  strong {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #624b41;
  }

  p {
    margin: 0;

    font-size: 0.87rem;
    line-height: 1.75;
    color: #76645b;
  }
`;

const Actions = styled.div`
  margin-top: 1.6rem;
`;

const InstagramButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.7rem;

  max-width: 100%;
  min-height: 52px;
  padding: 0.9rem 1.4rem;

  border-radius: 999px;

  background: #a96e66;
  color: #fff;

  font-size: 0.86rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #946058;
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 3px solid #bb8178;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Credit = styled.p`
  margin: 1.5rem 0 0;

  color: #a48b7e;
  font-size: 0.76rem;
  line-height: 1.7;
`;
