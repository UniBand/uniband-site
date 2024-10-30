"use client";

import { Title } from "@/components/atomic";
import { HighlightImage, UniBandText } from "@/components/components";
import LinkIcons from "@/components/LinkIcons";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const AboutUsButton = styled.button`
  background: var(--dark-blue);
  border-radius: 0.5rem;
  border: var(--background) 2px solid;
  color: var(--background);
  cursor: pointer;
  font-size: 1.25rem;
  font-stretch: expanded;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  transition: background 400ms ease, color 400ms ease;

  &:hover {
    background: var(--background);
    color: var(--dark-blue);
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
`;

const Gallery = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
  padding-inline: var(--body-margins);
`;

const SliderStyle = styled(Slider)`
  .slick-slide {
    opacity: 0.8;
    transition: all 300ms ease;
    transform: scale(0.9);
  }

  .slick-center {
    color: #e67e22;
    opacity: 1;
    transform: scale(1);
  }
`;

const GalleryImageWrapper = styled.div`
  align-items: center;
  border-radius: 1rem;
  display: flex;
  height: 50rem;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

const GalleryImage = styled.img`
  border-radius: 1rem;
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  transition: transform 400ms ease;

  &:hover {
    transform: scale(0.99);
  }
`;

function GalleryComponent() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    arrows: false,
  };

  return (
    <Gallery>
      <SliderStyle {...settings}>
        {Array.from({ length: 10 }).map((_, i) => (
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <div>
            <GalleryImageWrapper>
              <GalleryImage
                key={i}
                src="img/2024-nzcba-fun.jpg"
                alt="UniBand at the NZCBA Concert Band Festival 2024"
              />
            </GalleryImageWrapper>
          </div>
        ))}
      </SliderStyle>
    </Gallery>
  );
}

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
            <UniBandText /> provides an opportunity for wind, brass, and
            percussion musicians from all across the university to come together
            and make music.
          </p>
          <p>
            We rehearse weekly on Thursday evenings and perform in concerts and
            competitions throughout the year.
          </p>
          <AboutUsButton>
            <a href="/about">Learn more</a>
          </AboutUsButton>
          <LinkIcons />
        </AboutText>
      </About>
      <GalleryComponent />
    </>
  );
}
