"use client";

import { Button, SpacedTitle } from "@/components/atomic";
import VideosComponent from "@/components/Videos";
import { UniBandConfig } from "@/config";
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

export default function Videos() {
  return (
    <>
      <SpacedTitle>Videos</SpacedTitle>
      <ButtonWrap>
        <Button>
          <a
            href={`https://www.youtube.com/channel/${UniBandConfig.youTubeChannelId}`}
            target="_blank"
            rel="noreferrer"
          >
            Find us on YouTube
          </a>
        </Button>
      </ButtonWrap>
      <VideoContainer>
        <VideosComponent />
      </VideoContainer>
    </>
  );
}
