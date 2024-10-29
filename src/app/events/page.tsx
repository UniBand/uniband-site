"use client";

import { Title } from "@/components/atomic";
import {
  Event,
  EventComponent,
  sortEventsByStartDate,
} from "@/components/Event";
import { UniBandEvents } from "@/config";
import styled from "styled-components";

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: var(--body-margins);
  margin-top: 2rem;
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid var(--foreground);
  margin-block: 3rem;
  opacity: 0.1;
`;

const EmptyEvents = styled.p`
  font-size: 2rem;
  font-style: italic;
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
      <Title>Events</Title>

      {currentEvents.length > 0 ? (
        <EventsList events={currentEvents} />
      ) : (
        <EmptyEvents>
          Keep an eye out for more events in the future!
        </EmptyEvents>
      )}

      <Title fontSize="4rem" background="var(--dark-blue)">
        Past Events
      </Title>

      <EventsList events={pastEvents} />
    </>
  );
}
