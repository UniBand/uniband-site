"use client";

import { Title } from "@/components/atomic";
import VideosComponent from "@/components/Videos";
import styled from "styled-components";

const VideoContainer = styled.div`
  margin-top: 2rem;
  padding-inline: var(--body-margins);
`;

export default function Videos() {
  return (
    <>
      <Title>Videos</Title>
      <VideoContainer>
        <VideosComponent />
      </VideoContainer>
    </>
  );
}
