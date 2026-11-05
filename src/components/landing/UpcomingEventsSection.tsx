
import { useEffect, useState } from "react";
import styled from "styled-components";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { FiArrowUpRight, FiRefreshCw } from "react-icons/fi";

import EventCard from "./EventCard";
import EventComingSoon from "./EventComingSoon";

import type { MomsHubEvent } from "./EventCard";

/* =========================
   API CONFIGURATION
========================= */

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

const EVENTS_URL = `${API_BASE_URL}/api/events/`;

const FACEBOOK_URL =
  "https://www.facebook.com/groups/1924881931520212/";

/* =========================
   COMPONENT
========================= */

export default function UpcomingEventsSection() {
  const reduceMotion = useReducedMotion();

  const [events, setEvents] = useState<MomsHubEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  /* =========================
     FETCH EVENTS FROM DJANGO
  ========================= */

  useEffect(() => {
    const controller = new AbortController();

    async function fetchEvents() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(EVENTS_URL, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `API error: ${response.status}`
          );
        }

        const data: unknown = await response.json();

        if (!Array.isArray(data)) {
          throw new Error(
            "Unexpected response from events API"
          );
        }

        if (controller.signal.aborted) {
          return;
        }

        setEvents(data as MomsHubEvent[]);
      } catch (err) {
        if (controller.signal.aborted) {
          return;
        }

        console.error(
          "Error fetching MomsHub events:",
          err
        );

        setError(
          "We couldn't load the upcoming events right now."
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void fetchEvents();

    return () => {
      controller.abort();
    };
  }, [retryCount]);

  /* =========================
     RENDER
  ========================= */

  return (
    <Section id="events">
      <Container>

        {/* SECTION HEADER */}

        <Header
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
            duration: reduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <HeaderLeft>
            <SmallTitle>
              04 / UPCOMING EVENTS
            </SmallTitle>

            <Title>
              Let's meet.
              <Accent>
                Make memories.
              </Accent>
            </Title>
          </HeaderLeft>

          <Intro>
            Discover what's coming up at MomsHub,
            from coffee mornings to creative
            workshops and little adventures
            around Trondheim.
          </Intro>
        </Header>

        {/* =========================
            LOADING
        ========================= */}

        {isLoading ? (
          <MessagePanel role="status">
            <LoadingIcon
              aria-hidden="true"
            >
              <FiRefreshCw />
            </LoadingIcon>

            <MessageTitle>
              Finding our next moments together...
            </MessageTitle>

            <MessageDescription>
              Loading upcoming MomsHub events.
            </MessageDescription>
          </MessagePanel>
        ) : error ? (

          /* =========================
             ERROR
          ========================= */

          <MessagePanel role="alert">
            <MessageTitle>
              Something went wrong.
            </MessageTitle>

            <MessageDescription>
              {error}
            </MessageDescription>

            <RetryButton
              type="button"
              onClick={() =>
                setRetryCount((count) => count + 1)
              }
            >
              Try again
              <FiRefreshCw />
            </RetryButton>
          </MessagePanel>
        ) : events.length > 0 ? (

          /* =========================
             CONFIRMED EVENTS
          ========================= */

          <>
            <EventsList>
              {events.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </EventsList>

            <BottomCTA>
              <BottomText>
                <BottomTitle>
                  More moments together.
                </BottomTitle>

                <BottomDescription>
                  Join our community to hear about
                  new meetups, workshops and activities.
                </BottomDescription>
              </BottomText>

              <JoinButton
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our community
                <FiArrowUpRight />
              </JoinButton>
            </BottomCTA>
          </>
        ) : (

          /* =========================
             NO PUBLISHED EVENTS
          ========================= */

          <EventComingSoon />
        )}

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

  /* Keeps the global 3D flower visible */
  background: rgba(250, 245, 239, 0.72);

  scroll-margin-top: 90px;

  @media (max-width: 768px) {
    padding: 5rem 1.2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

/* =========================
   HEADER
========================= */

const Header = styled(motion.div)`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 3rem;

  margin-bottom: 4.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const HeaderLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

const SmallTitle = styled.p`
  margin: 0 0 1.5rem;

  color: #ad756b;

  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0;

  color: #624b41;

  font-size: clamp(3rem, 5.5vw, 5.2rem);
  font-weight: 750;
  line-height: 1.06;
  letter-spacing: -0.055em;
`;

const Accent = styled.span`
  display: block;
  margin-top: 0.2rem;

  color: #bb8178;

  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.04em;
`;

const Intro = styled.p`
  max-width: 350px;
  margin: 0 0 0.5rem;

  color: #62534c;

  font-size: 1rem;
  line-height: 1.85;
`;

/* =========================
   EVENT LIST
========================= */

const EventsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

/* =========================
   LOADING / ERROR PANEL
========================= */

const MessagePanel = styled.div`
  min-height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  padding: 3rem 1.5rem;

  border-radius: 28px;
  border: 1px solid #ead8cf;

  background: rgba(255, 250, 247, 0.8);

  text-align: center;
`;

const LoadingIcon = styled.div`
  color: #bb8178;
  font-size: 1.7rem;

  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const MessageTitle = styled.h3`
  margin: 0;

  color: #624b41;
  font-size: 1.5rem;
  letter-spacing: -0.04em;
`;

const MessageDescription = styled.p`
  margin: 0;
  color: #76645b;

  font-size: 0.93rem;
  line-height: 1.7;
`;

const RetryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;

  margin-top: 0.7rem;
  padding: 0.8rem 1.4rem;

  border: none;
  border-radius: 999px;

  background: #a96e66;
  color: white;

  font-size: 0.85rem;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    background: #946058;
  }
`;

/* =========================
   BOTTOM CTA
========================= */

const BottomCTA = styled.div`
  margin-top: 4rem;
  padding: 2.5rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  border-radius: 28px;
  background: #f4e8e1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 1.5rem;
  }
`;

const BottomText = styled.div`
  max-width: 560px;
`;

const BottomTitle = styled.h3`
  margin: 0 0 0.75rem;

  color: #624b41;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.04em;
`;

const BottomDescription = styled.p`
  margin: 0;

  color: #76645b;
  font-size: 0.93rem;
  line-height: 1.75;
`;

const JoinButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  min-height: 52px;
  padding: 0.9rem 1.4rem;

  border-radius: 999px;

  background: #a96e66;
  color: #ffffff;

  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 700;
  white-space: nowrap;

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #946058;
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 3px solid #624b41;
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
