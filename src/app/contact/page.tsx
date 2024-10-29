"use client";

import { Title } from "@/components/atomic";
import config from "../config/config";

export default function Contact() {
  return (
    <>
      <Title>Contact Us</Title>
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        title="Google Maps Location"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqQRRxuJHDW0RYUGEgrXeH1E&key=${config.googleMapsApi.key}`}
      />
    </>
  );
}
