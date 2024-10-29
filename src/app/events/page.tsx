"use client";

import { Title } from "@/components/atomic";
import {
  Event,
  EventComponent,
  sortEventsByStartDate,
} from "@/components/Event";
import styled from "styled-components";

const EventsContainer = styled.div`
  display: flex;
  // gap: 4rem;
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

export default function Events() {
  let events: Event[] = [
    {
      title: "Glorious Heights",
      startDate: "2024-10-12",
      description:
        "The 2024 Semester 2 concert, performed by UniBand and AUSC. Directed by Jono Palmer with guest conductors Sue Lynn Leong, Athena Shiu, and Jennifer Yuan.",
      imagePath: "events/glorious-heights.png",
      location: "St. Paul's Church",
      locationUrl: "https://maps.app.goo.gl/nycGm4TsT3TcsUMs5",
      urls: [
        {
          name: "Givealittle",
          url: "https://givealittle.co.nz/cause/glorious-heights",
          hideWhenComplete: true,
        },
      ],
      youtubeCodes: ["EVVWa5orsvs", "JCSIT45_dX4"],
    },
    {
      title: "A Night At The Movies",
      startDate: "2024-05-18",
      description:
        "The 2024 Semester 1 concert, performed by UniBand and AUSC. Directed by Jono Palmer.",
      imagePath: "events/a-night-at-the-movies.png",
      location: "UOA School of Music",
      locationUrl: "https://maps.app.goo.gl/CnUqPeCbFpZ6ka4aA",
      urls: [
        {
          name: "Givealittle",
          url: "https://givealittle.co.nz/cause/uniband-and-ausc-concert",
          hideWhenComplete: true,
        },
      ],
    },
  ];

  events = sortEventsByStartDate(events);

  return (
    <>
      <Title>Events</Title>
      <EventsContainer>
        {events.map((event, index) => (
          <>
            <EventComponent
              key={event.title}
              {...event}
              imageFirst={index % 2 === 0}
            />
            <HorizontalLine key={`${event.title}-line`} />
          </>
        ))}
      </EventsContainer>
    </>
  );
}
