
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiCoffee,
  FiMapPin,
  FiFeather,
  FiRefreshCw,
  FiCalendar,
  FiClock,
  FiUsers,
  FiArrowUpRight,
} from "react-icons/fi";

/* =========================
   TYPES
========================= */

export type EventCategory =
  | "meetup"
  | "workshop"
  | "outing"
  | "swap";

export type EventStatus =
  | "confirmed"
  | "fully-booked";

export interface MomsHubEvent {
  id: string;
  title: string;
  description: string;
  category: EventCategory;

  // ISO date: YYYY-MM-DD
  date: string;

  // Local Norwegian time: HH:mm
  startTime: string;
  endTime?: string | null;
  location: string;
  address?: string;

  audience?: string;
  priceLabel?: string;

  status: EventStatus;
  registrationUrl?: string | null;
}

interface EventCardProps {
  event: MomsHubEvent;
  index?: number;
}

/* =========================
   CATEGORY DESIGN
========================= */

const categoryStyles = {
  meetup: {
    label: "COFFEE & CONNECTION",
    color: "#B77D70",
    background: "#FAF0EB",
    icon: FiCoffee,
  },
  workshop: {
    label: "WORKSHOPS & CULTURE",
    color: "#A486A6",
    background: "#F6F0F6",
    icon: FiFeather,
  },
  outing: {
    label: "MOMSHUB OUT",
    color: "#87987E",
    background: "#F0F2EA",
    icon: FiMapPin,
  },
  swap: {
    label: "MOMSHUB SWAPS",
    color: "#BC8A6B",
    background: "#FBF2EA",
    icon: FiRefreshCw,
  },
};

/* =========================
   DATE FORMATTER
========================= */

function formatEventDate(dateString: string) {
  const [year, month, day] = dateString
    .split("-")
    .map(Number);

  const date = new Date(
    Date.UTC(year, month - 1, day, 12)
  );

  return {
    day: String(day).padStart(2, "0"),

    month: new Intl.DateTimeFormat("en-GB", {
      month: "short",
      timeZone: "UTC",
    }).format(date),

    full: new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(date),
  };
}

/* =========================
   COMPONENT
========================= */

export default function EventCard({
  event,
  index = 0,
}: EventCardProps) {
  const reduceMotion = useReducedMotion();

  const category = categoryStyles[event.category];
  const Icon = category.icon;
  const formattedDate = formatEventDate(event.date);

  const eventTime = event.endTime
    ? `${event.startTime}–${event.endTime}`
    : event.startTime;

  return (
    <Card
      $accent={category.color}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 28 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* DATE */}

      <DateBox $background={category.background}>
        <Month>{formattedDate.month}</Month>
        <Day>{formattedDate.day}</Day>
      </DateBox>

      {/* CONTENT */}

      <Content>
        <Category>
          <Icon aria-hidden="true" />
          {category.label}
        </Category>

        <EventTitle>
          {event.title}
        </EventTitle>

        <Description>
          {event.description}
        </Description>

        <Details>
          <Detail>
            <FiCalendar aria-hidden="true" />
            <time dateTime={event.date}>
              {formattedDate.full}
            </time>
          </Detail>

          <Detail>
            <FiClock aria-hidden="true" />
            {eventTime}
          </Detail>

          <Detail>
            <FiMapPin aria-hidden="true" />
            {event.location}
          </Detail>

          {event.audience && (
            <Detail>
              <FiUsers aria-hidden="true" />
              {event.audience}
            </Detail>
          )}
        </Details>
      </Content>

      {/* ACTION */}

      <Actions>
        {event.priceLabel && (
          <Price>{event.priceLabel}</Price>
        )}

        {event.status === "fully-booked" && (
          <StatusLabel>
            Fully booked
          </StatusLabel>
        )}

        {event.registrationUrl ? (
          <ActionLink
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View details for ${event.title}`}
          >
            View details
            <FiArrowUpRight />
          </ActionLink>
        ) : event.status === "confirmed" ? (
          <MutedAction>
            Details coming soon
          </MutedAction>
        ) : null}
      </Actions>
    </Card>
  );
}

/* =========================
   STYLES
========================= */

const Card = styled(motion.article)<{
  $accent: string;
}>`
  --event-accent: ${({ $accent }) => $accent};

  display: grid;
  grid-template-columns: 100px minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(1.2rem, 3vw, 2.5rem);

  padding: 2rem 1.2rem;

  border-bottom: 1px solid #e9dcd4;
  border-radius: 16px;

  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;

  &:first-child {
    border-top: 1px solid #e9dcd4;
  }

  &:hover {
    background: rgba(255, 250, 247, 0.7);
    box-shadow: 0 15px 40px rgba(98, 75, 65, 0.04);
  }

  @media (max-width: 800px) {
    grid-template-columns: 76px minmax(0, 1fr);
    gap: 1.2rem;
    padding: 1.7rem 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const DateBox = styled.div<{
  $background: string;
}>`
  width: 100px;
  height: 105px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 22px;

  background: ${({ $background }) => $background};
  border: 1px solid rgba(98, 75, 65, 0.07);

  @media (max-width: 800px) {
    width: 76px;
    height: 84px;
    border-radius: 17px;
  }
`;

const Month = styled.span`
  color: var(--event-accent);

  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 750;
  letter-spacing: 0.12em;
`;

const Day = styled.span`
  margin-top: 0.3rem;

  color: #624b41;
  font-family: Georgia, serif;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1;

  @media (max-width: 800px) {
    font-size: 2.1rem;
  }
`;

const Content = styled.div`
  min-width: 0;
`;

const Category = styled.p`
  display: flex;
  align-items: center;
  gap: 0.55rem;

  margin: 0 0 0.8rem;

  color: var(--event-accent);
  font-size: 0.7rem;
  font-weight: 750;
  letter-spacing: 0.12em;

  svg {
    flex-shrink: 0;
    font-size: 1.1rem;
  }
`;

const EventTitle = styled.h3`
  margin: 0 0 0.7rem;

  color: #624b41;
  font-size: clamp(1.55rem, 2.5vw, 2.25rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.045em;
`;

const Description = styled.p`
  max-width: 620px;
  margin: 0;

  color: #62534c;
  font-size: 0.93rem;
  line-height: 1.75;
`;

const Details = styled.div`
  margin-top: 1.2rem;

  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.3rem;
`;

const Detail = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;

  color: #8c776a;
  font-size: 0.8rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    color: var(--event-accent);
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.85rem;

  @media (max-width: 800px) {
    grid-column: 2;
    align-items: flex-start;
  }
`;

const Price = styled.span`
  color: #87987e;
  font-size: 0.78rem;
  font-weight: 750;
`;

const StatusLabel = styled.span`
  display: inline-flex;

  padding: 0.5rem 0.85rem;
  border-radius: 999px;

  background: #f3e8e1;
  color: #9a796b;

  font-size: 0.72rem;
  font-weight: 700;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  color: #a96e66;
  font-size: 0.87rem;
  font-weight: 750;
  text-decoration: none;
  white-space: nowrap;

  transition:
    color 0.3s ease,
    gap 0.3s ease;

  svg {
    font-size: 1.15rem;
  }

  &:hover {
    gap: 1rem;
    color: #624b41;
  }

  &:focus-visible {
    outline: 2px solid #bb8178;
    outline-offset: 4px;
  }
`;

const MutedAction = styled.span`
  color: #987e71;
  font-size: 0.78rem;
  font-style: italic;
`;
