"use client";

import { SpacedTitle } from "@/components/atomic";
import VideosComponent from "@/components/Videos";
import styled from "styled-components";

const VideoContainer = styled.div`
  padding-inline: var(--body-margins);
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const YouTubeButton = styled.button`
  background: var(--background);
  border-radius: 0.5rem;
  border: var(--dark-blue) 2px solid;
  color: var(--dark-blue);
  cursor: pointer;
  font-size: 1.25rem;
  font-stretch: expanded;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  transition: background 400ms ease, color 400ms ease;
  width: fit-content;

  &:hover {
    background: var(--dark-blue);
    color: var(--background);
  }
`;

export default function Videos() {
  return (
    <>
      <SpacedTitle>Videos</SpacedTitle>
      <ButtonWrap>
        <YouTubeButton>
          <a href="https://www.youtube.com/channel/UCy_Eez7ZamDM31jOTRvqrWw">
            Find us on YouTube
          </a>
        </YouTubeButton>
      </ButtonWrap>
      <VideoContainer>
        <VideosComponent />
      </VideoContainer>
    </>
  );
}
