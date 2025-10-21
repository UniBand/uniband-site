"use client";

import { SpacedTitle, Title } from "@/components/atomic";
import { BodyContent } from "@/components/components";
import {
  Event,
  EventComponent,
  sortEventsByStartDate,
} from "@/components/Event";
import { UniBandEvents } from "@/config";
import styled from "styled-components";

const EventsContent = styled(BodyContent)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid var(--foreground);
  margin-block: 3rem;
  opacity: 0.1;

  @media (max-width: 1200px) {
    margin-block: 2rem;
  }
`;

const EmptyEvents = styled.p`
  font-size: 2rem;
  font-variation-settings: "slnt" -10;
  margin-block: 2rem;
  text-align: center;
`;

function EventsList({ events }: { events: Event[] }) {
  return (
    <EventsContainer>
      {events.map((event, index) => (
        <>
          <EventComponent
            key={event.title}
            {...event}
            imageFirst={index % 2 === 0}
          />
          {index !== events.length - 1 && <HorizontalLine />}
        </>
      ))}
    </EventsContainer>
  );
}

export default function Events() {
  let events: Event[] = UniBandEvents;

  events = sortEventsByStartDate(events);

  const currentDate = new Date();

  const currentEvents = events.filter(
    (event) => new Date(event.startDate) >= currentDate
  );
  const pastEvents = events.filter(
    (event) => new Date(event.startDate) < currentDate
  );

  return (
    <>
      <SpacedTitle>Events</SpacedTitle>

      <EventsContent>
        {currentEvents.length > 0 ? (
          <EventsList events={currentEvents} />
        ) : (
          <EmptyEvents>
            Keep an eye out for more events in the future!
          </EmptyEvents>
        )}

        <Title
          $fontSize="4rem"
          $background="var(--dark-blue)"
          $responsiveSize="12vw"
        >
          Past Events
        </Title>

        <EventsList events={pastEvents} />
      </EventsContent>
    </>
  );
}
