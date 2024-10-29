"use client";

import { Title } from "@/components/atomic";
import styled from "styled-components";

import blurbimg from "../../assets/about/blurbimg.jpg";
import { HighlightImage, UniBandText } from "@/components/components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 2rem;
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

export default function About() {
  return (
    <>
      <Title>About</Title>
      <ContentContainer>
        <Blurb>
          <HighlightImage src={blurbimg.src} alt="UniBand performing" />
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
              annual NZCBA Concert Band Festival. We also have a strong social
              aspect, with regular social events and a tight-knit community.
            </p>
            <p>
              Rehearsals are held weekly on Thursdays evenings from 7-9pm on
              campus during the University of Auckland semester.
            </p>
          </BlurbContent>
        </Blurb>
      </ContentContainer>
    </>
  );
}
