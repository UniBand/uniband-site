"use client";

import { Button, Title } from "@/components/atomic";
import { HighlightImage } from "@/components/components";
import LinkIcons from "@/components/LinkIcons";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UniBandConfig } from "@/config";
import { useEffect, useState } from "react";
import { ConfigText } from "@/components/ConfigText";
import { AudioFile, AudioPlayer } from "@/components/AudioPlayer";
import FloatingPNGs from "@/components/FloatingPNGs";
import Image from "next/image";

interface FileData {
  path: string;
  width: number;
  height: number;
}

const TitleBlock = styled.div`
  padding-block: 10rem;
  text-align: center;
  font-stretch: expanded;
  position: relative;

  p {
    font-size: clamp(2vw, 6vw, 2rem);
  }
`;

const TitleText = styled(Title)`
  font-size: clamp(10vw, 20vw, 9rem);
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

const AudioPlayerContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

const About = styled.div`
  background: var(--dark-blue);
  color: var(--background);
  display: grid;
  gap: 2rem;
  grid-template-columns: 60% auto;
  padding-block: 4rem;
  padding-inline: var(--body-margins);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
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
    font-size: 2rem;
    font-weight: 400;
  }
`;

const Gallery = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    margin-top: 2rem;
    margin-bottom: 0rem;
  }
`;

const SliderStyle = styled(Slider)`
  .slick-track,
  .slick-list {
    height: clamp(0px, 30rem, min(80vh, 50rem));
  }

  .slick-slide {
    opacity: 0.8;
    transition: all 1000ms ease;
    transform: scale(0.95);
  }

  .slick-center {
    color: #e67e22;
    opacity: 1;
    transform: scale(1);
  }
`;

const GalleryImageWrapper = styled.div`
  align-items: center;
  display: flex;
  height: clamp(0px, 30rem, min(80vh, 50rem));
  justify-content: center;
  max-width: 80vw;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const GalleryImage = styled(Image)`
  border-radius: 1rem;
  max-height: 100%;
  max-width: 100%;
  width: auto;
`;

function GalleryComponent() {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    variableWidth: true,
    pauseOnHover: true,
  };

  const [files, setFiles] = useState<FileData[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/files");
        if (!response.ok) {
          throw new Error("Failed to fetch files");
        }
        const data: FileData[] = await response.json();
        data.sort(() => Math.random() - 0.5);
        setFiles(data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  console.log(files);
  files.map((file) =>
    console.log(`/${UniBandConfig.galleryPath}/${file.path}`)
  );

  return (
    <Gallery>
      <SliderStyle {...settings}>
        {files.map((file, i) => (
          <div key={file.path}>
            <GalleryImageWrapper>
              <GalleryImage
                key={file.path}
                src={`/${UniBandConfig.galleryPath}/${file.path}`}
                alt={`Gallery image ${i + 1}`}
                width={file.width}
                height={file.height}
              />
            </GalleryImageWrapper>
          </div>
        ))}
      </SliderStyle>
    </Gallery>
  );
}

export default function Home() {
  const configText = UniBandConfig.home;
  const infoImage = UniBandConfig.home.infoImage;

  const [currentAudio, setCurrentAudio] = useState<AudioFile | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  return (
    <>
      <TitleBlock>
        <TitleText>UniBand</TitleText>
        <ConfigText text={configText.subtitle} />
        <JoinButton>
          <a href="/join">Join the band</a>
        </JoinButton>
        <AudioPlayerContainer>
          <AudioPlayer
            currentAudio={currentAudio}
            setCurrentAudio={setCurrentAudio}
            isFadingOut={isFadingOut}
            setIsFadingOut={setIsFadingOut}
          />
        </AudioPlayerContainer>
        <FloatingPNGs
          frequency={100}
          opacity={currentAudio && !isFadingOut ? 0.2 : 0}
        />
      </TitleBlock>
      <About>
        <HighlightImage src={infoImage.path} alt={infoImage.alt} />
        <AboutText>
          <ConfigText text={configText.infoHeader} wrapper="h2" />
          <ConfigText text={configText.infoContent} />
          <Button background="var(--dark-blue)" color="var(--background)">
            <a href="/about">Learn more</a>
          </Button>
          <LinkIcons />
        </AboutText>
      </About>
      <GalleryComponent />
    </>
  );
}
