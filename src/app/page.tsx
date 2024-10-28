"use client";

import Title from "@/components/atomic/Title";
import { EmailOutlined, YouTube } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
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
  background: linear-gradient(40deg, #00457d, #0096c5);
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
  background: #00457d;
  color: var(--background);
  display: grid;
  gap: 2rem;
  grid-template-columns: 60% auto;
  padding-block: 2rem;
  padding-inline: var(--body-margins);
`;

const AboutImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    border-radius: 1rem;
    height: auto;
    max-height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;

const AboutText = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  gap: 1.5rem;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-size: 1rem;
  }
`;

const AboutIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  * {
    color: var(--background);
    height: 1.5rem;
    width: auto;
    transition: opacity 100ms ease;

    &:hover {
      opacity: 0.9;
  }
`;

const HighlightedText = styled.span`
  font-stretch: expanded;
  font-weight: 700;
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
        <p>Auckland's top tertiary-level Concert Band</p>
        <JoinButton>
          <a href="/join">Join the band</a>
        </JoinButton>
      </TitleBlock>
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
          <AboutIcons>
            <a href="https://www.instagram.com/uoa_uniband">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/UniBandNZ">
              <FacebookIcon />
            </a>
            <a href="https://www.youtube.com/channel/UCy_Eez7ZamDM31jOTRvqrWw">
              <YouTube />
            </a>
            <a href="mailto:info@uniband.nz">
              <EmailOutlined />
            </a>
          </AboutIcons>
        </AboutText>
      </About>
      <Gallery>Gallery here</Gallery>
    </>
  );
}
