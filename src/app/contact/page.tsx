"use client";

import { SpacedTitle } from "@/components/atomic";
import config from "../config/config";
import styled from "styled-components";
import { BodyContent } from "@/components/components";
import { ConfigText } from "@/components/ConfigText";
import { UniBandConfig } from "@/config";

const ContentContainer = styled(BodyContent)`
  display: grid;
  gap: 2rem;
  grid-template-columns: 3fr 2fr;

  @media (max-width: 1200px) {
    gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const MapFrame = styled.iframe`
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  height: 50vh;
  width: 100%;

  @media (max-width: 1200px) {
    order: 2;
  }
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
  text-align: left;

  @media (max-width: 1200px) {
    order: 1;
  }
`;

export default function Contact() {
  return (
    <>
      <SpacedTitle>Contact Us</SpacedTitle>
      <ContentContainer>
        <MapFrame
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          title="Google Maps Location"
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqQRRxuJHDW0RYUGEgrXeH1E&key=${config.googleMapsApi.key}`}
        />
        <ContactText>
          <ConfigText text={UniBandConfig.contact.contactText} />
        </ContactText>
      </ContentContainer>
    </>
  );
}
