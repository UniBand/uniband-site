"use client";

import { Title } from "@/components/atomic";
import styled from "styled-components";
import { HighlightImage, UniBandText } from "@/components/components";
import { PeopleList, Person } from "@/components/People";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  const executiveCommittee: Person[] = [
    {
      name: "Bianca Anderson",
      role: "President",
      image: "about/people/bianca.jpg",
      email: "president@uniband.nz",
    },
    {
      name: "Kate Le Lievre",
      role: "Vice President",
      image: "about/people/kate.jpg",
      email: "vicepresident@uniband.nz",
    },
    {
      name: "Josiah Grimmer",
      role: "Treasurer",
      image: "about/people/josiah.jpg",
      email: "treasurer@uniband.nz",
    },
    {
      name: "Cameron Burton",
      role: "Secretary",
      image: "about/people/cameron.jpg",
      email: "secretary@uniband.nz",
    },
    {
      name: "TBA",
      role: "Band Manager",
      image: "about/people/placeholder.jpg",
      email: "bandmanager@uniband.nz",
    },
  ];

  const generalCommittee: Person[] = [
    {
      name: "Adara Burns",
      role: "Librarian(?)",
      image: "about/people/adara.jpg",
    },
    {
      name: "Anna Haine",
      role: "TBA",
      image: "about/people/anna.jpg",
    },
    {
      name: "Anthony Wang",
      role: "TBA",
      image: "about/people/anthony.jpg",
    },
    {
      name: "Becky Cheng",
      role: "Social Media Manager(?)",
      image: "about/people/becky.jpg",
    },
    {
      name: "Bryn Klisky",
      role: "TBA",
      image: "about/people/bryn.jpg",
    },
  ];

  return (
    <>
      <Title>About</Title>
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
              annual NZCBA Concert Band Festival. We also have a strong social
              aspect, with regular social events and a tight-knit community.
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
            <h1>Jono Palmer</h1>
            <h2>Musical Director</h2>
            <p>
              Jono Palmer is a dynamic and enterprising conductor from Auckland,
              New Zealand. His choirs have won national and international
              acclaim, including two Gold Medals at the 2015 Grand Prix of
              Nations in Magdeburg, Germany, and many awards at regional and
              national festivals of the NZCF Big Sing festival. As a conductor,
              Jono has been selected for masterclasses at the 2017 World
              Symposium of Choral Music and the 2017 National Collegiate Choral
              Organization National Conference. In October 2018, he was a
              finalist in the inaugural London International Choral Conducting
              Competition.
            </p>
          </div>
        </Director>
      </ContentContainer>
    </>
  );
}
