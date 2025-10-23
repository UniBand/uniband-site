"use client";

import { Title, SpacedTitle } from "@/components/atomic";
import styled from "styled-components";
import { HighlightImage } from "@/components/components";
import { PeopleList } from "@/components/People";
import { UniBandCommittee, UniBandConfig } from "@/config";
import { ConfigText } from "@/components/ConfigText";
import logo from "@/assets/logo.png";

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
  margin-bottom: 2rem;
  padding-inline: var(--body-margins);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
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

const Directors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-block: 2rem;
  padding-inline: var(--body-margins);

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;

const Director = styled.div<{ imageOnLeft: boolean }>`
  display: grid;
  gap: 2rem;
  grid-template-columns: ${({ imageOnLeft }) =>
    imageOnLeft ? "3fr 2fr" : "2fr 3fr"};
  grid-template-areas: ${({ imageOnLeft }) =>
    imageOnLeft ? '"info img"' : '"img info"'};

  & > .director-img {
    grid-area: img;
  }
  & > .director-info {
    grid-area: info;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    grid-template-areas:
      "img"
      "info";
  }
`;

export default function About() {
  const { executiveCommittee, generalCommittee, directors } = UniBandCommittee;
  const aboutImage = UniBandConfig.about.aboutImage;

  return (
    <>
      <SpacedTitle>About</SpacedTitle>
      <ContentContainer>
        <Blurb>
          <HighlightImage src={aboutImage.path} alt={aboutImage.alt} />
          <BlurbContent>
            <ConfigText text={UniBandConfig.about.aboutText} />
          </BlurbContent>
        </Blurb>
        <People>
          <Title $background="var(--background)" $responsiveSize="12vw">
            Executive Committee
          </Title>
          <PeopleList people={executiveCommittee} />
          <Title
            $background="var(--background)"
            $fontSize="3rem"
            $responsiveSize="10vw"
          >
            General Committee
          </Title>
          <PeopleList people={generalCommittee} />
        </People>
        <Directors>
          {directors.map((director, idx) => (
            <Director imageOnLeft={idx % 2 === 1} key={director.person.name}>
              <HighlightImage
                className="director-img"
                src={director.person.image || logo.src}
                alt={director.person.name}
              />
              <div className="director-info">
                <h1>{director.person.name}</h1>
                <h2>{director.person.role}</h2>
                <ConfigText text={director.text} />
              </div>
            </Director>
          ))}
        </Directors>
      </ContentContainer>
    </>
  );
}
