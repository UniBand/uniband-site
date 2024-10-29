"use client";

import { Title } from "@/components/atomic";
import { HighlightImage, UniBandText } from "@/components/components";
import LinkIcons from "@/components/LinkIcons";
import styled from "styled-components";

const TitleBlock = styled.div`
  padding-block: 10rem;
  text-align: center;
  font-stretch: expanded;

  p {
    font-size: 2rem;
  }
`;

const JoinButton = styled.button`
  background: var(--blue-gradient);
  border-radius: 0.5rem;
  border: none;
  color: var(--background);
  cursor: pointer;
  font-size: 1.5rem;
  font-stretch: expanded;
  font-weight: 600;
  margin-top: 2rem;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  transition: transform 400ms ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const About = styled.div`
  background: var(--dark-blue);
  color: var(--background);
  display: grid;
  gap: 2rem;
  grid-template-columns: 60% auto;
  padding-block: 2rem;
  padding-inline: var(--body-margins);
`;

const AboutText = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  gap: 1.5rem;
  justify-content: center;

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }

  p {
    font-size: 1rem;
  }
`;

const Gallery = styled.div`
  padding-block: 20rem;
  padding-inline: var(--body-margins);
`;

export default function Home() {
  return (
    <>
      <TitleBlock>
        <Title fontSize="9rem">UniBand</Title>
        <p>Auckland’s top tertiary-level Concert Band</p>
        <JoinButton>
          <a href="/join">Join the band</a>
        </JoinButton>
      </TitleBlock>
      <About>
        <HighlightImage
          src="img/2024-nzcba-fun.jpg"
          alt="UniBand at the NZCBA Concert Band Festival 2024"
        />
        <AboutText>
          <h2>
            <UniBandText b /> is the University of Auckland’s leading Concert
            Band
          </h2>
          <p>
            Comprised of wind, brass, and percussion musicians from across the
            university, we rehearse weekly on Thursday evenings and perform in
            concerts and competitions throughout the year.
          </p>
          <LinkIcons />
        </AboutText>
      </About>
      <Gallery>Gallery here</Gallery>
    </>
  );
}
