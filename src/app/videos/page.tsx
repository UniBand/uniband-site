"use client";

import { SpacedTitle } from "@/components/atomic";
import VideosComponent from "@/components/Videos";
import styled from "styled-components";

const VideoContainer = styled.div`
  padding-inline: var(--body-margins);
`;

export default function Videos() {
  return (
    <>
      <SpacedTitle>Videos</SpacedTitle>
      <VideoContainer>
        <VideosComponent />
      </VideoContainer>
    </>
  );
}
