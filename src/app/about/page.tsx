"use client";

import { Title, SpacedTitle } from "@/components/atomic";
import styled from "styled-components";
import { HighlightImage, UniBandText } from "@/components/components";
import { PeopleList } from "@/components/People";
import { UniBandCommittee } from "@/config";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Blurb = styled.div`
  display: grid;
  font-size: 1.5rem;
  gap: 2rem;
  grid-template-columns: 3fr 2fr;
  padding-inline: var(--body-margins);
`;

const BlurbContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;
  margin-top: 0.5rem;
`;

const People = styled.div`
  background-color: var(--dark-blue);
  color: var(--background);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-inline: var(--body-margins);
  padding-block: 4rem;
  justify-content: center;
`;

const Director = styled.div`
  padding-inline: var(--body-margins);
  display: grid;
  gap: 2rem;
  grid-template-columns: 3fr 2fr;

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;

export default function About() {
  const { executiveCommittee, generalCommittee, director } = UniBandCommittee;

  return (
    <>
      <SpacedTitle>About</SpacedTitle>
      <ContentContainer>
        <Blurb>
          <HighlightImage src="about/blurb-img.jpg" alt="UniBand performing" />
          <BlurbContent>
            <p>
              <UniBandText b /> is a student-founded and student-run concert
              band in Auckland. Founded in 2013,{" "}
              <UniBandText fontWeight={400} /> has been providing university
              students an opportunity to play challenging, yet fulfilling music
              with peers.
            </p>
            <p>
              Unlike most other university music groups which strongly
              prioritise students studying Music, <UniBandText /> is an
              all-comers band; open to musicians studying any degree, with many
              members studying degrees such as Engineering and Law.
            </p>
            <p>
              <UniBandText /> performs at a variety of events throughout the
              year, including self-hosted concerts, university events, and the
              annual NZCBA Concert Band Festival.
            </p>
            <p>
              The heart of <UniBandText /> is the tight social community at its
              core. With a welcoming social environment and multiple casual
              events throughout the year, members form lasting friendships and
              connections.
            </p>
            <p>
              Rehearsals are held weekly on Thursdays evenings from 7-9pm on
              campus during the University of Auckland semester.
            </p>
          </BlurbContent>
        </Blurb>
        <People>
          <Title background="var(--background)">Executive Committee</Title>
          <PeopleList people={executiveCommittee} />
          <Title background="var(--background)" fontSize="3rem">
            General Committee
          </Title>
          <PeopleList people={generalCommittee} />
        </People>
        <Director>
          <HighlightImage src="about/people/jono.jpg" alt="Jono Palmer" />
          <div>
            <h1>{director.person.name}</h1>
            <h2>{director.person.role}</h2>
            <p>{director.text}</p>
          </div>
        </Director>
      </ContentContainer>
    </>
  );
}
