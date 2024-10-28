"use client";

import { Header } from "@/components/header-footer";
import styled from "styled-components";

const Title = styled.div`
  padding-block: 6rem;
  text-align: center;
  font-stretch: expanded;

  h1 {
    background: linear-gradient(40deg, #00457d, #0096c5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 9rem;
    font-weight: 700;
  }

  p {
    font-size: 2rem;
  }
`;

const About = styled.div`
  background: #00457d;
  color: var(--background);
  display: grid;
  gap: 2rem;
  grid-template-columns: 60% auto;
  padding-block: 2rem;
  padding-inline: 10rem;
`;

const AboutImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    border-radius: 1rem;
  }
`;

const AboutText = styled.div`
  align-items: center;
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
    font-size: 1.5rem;
  }
`;

const HighlightedText = styled.span`
  font-stretch: expanded;
  font-weight: 700;
`;

const Gallery = styled.div`
  padding-block: 20rem;
  padding-inline: 10rem;
`;

export default function Home() {
  return (
    <>
      <Header />
      <Title>
        <h1>UniBand</h1>
        <p>Auckland's top tertiary-level Concert Band</p>
        {/* sign up button? */}
      </Title>
      <About>
        <AboutImage>
          <img
            src="img/2024-nzcba-fun.jpg"
            alt="UniBand at the NZCBA Concert Band Festival 2024"
          />
        </AboutImage>
        <AboutText>
          <h2>
            <HighlightedText>UniBand</HighlightedText> is the University of
            Auckland's leading Concert Band.
          </h2>
          <p>
            Comprised of wind, brass, and percussion musicians from all degrees,
            we rehearse weekly on Thursday evenings and perform in concerts and
            competitions throughout the year.
          </p>
        </AboutText>
      </About>
      <Gallery>Gallery here</Gallery>
    </>
  );
}
