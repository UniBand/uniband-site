"use client";

import { SpacedTitle } from "@/components/atomic";
import config from "../config/config";
import styled from "styled-components";
import { BodyContent } from "@/components/components";

const ContentContainer = styled(BodyContent)`
  display: grid;
  gap: 2rem;
  grid-template-columns: 3fr 2fr;
`;

const MapFrame = styled.iframe`
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  height: 50vh;
  width: 100%;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
  text-align: left;
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
          <p>
            You can contact us by sending an email to{" "}
            <b>
              <a href="mailto:info@uniband.nz">info@uniband.nz</a>
            </b>
          </p>
          <p>
            You can also find us at the <b>School of Music</b> in the University
            of Auckland (6 Symonds Street, Auckland 1010).
          </p>
        </ContactText>
      </ContentContainer>
    </>
  );
}
