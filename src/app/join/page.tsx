"use client";

import { Title } from "@/components/atomic";
import { OpenInNewRounded } from "@mui/icons-material";
import styled from "styled-components";

const BodyContent = styled.div`
  align-items: start;
  display: grid;
  gap: 2rem;
  grid-template-columns: 2fr 3fr;
  margin-top: 2rem;
  padding-inline: var(--body-margins);

  b {
    font-weight: 700;
  }

  a {
    color: var(--hyperlink);
    transition: opacity 200ms ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const JoinText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
  text-align: left;
`;

const FormBlock = styled.div`
  height: 80vh;
  position: relative;
  width: 100%;
`;

const JoinForm = styled.iframe`
  border: none;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
`;

const JoinFormButton = styled.button`
  background-color: var(--background);
  border-radius: 1rem;
  border: none;
  bottom: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
  position: absolute;
  right: 1rem;
  cursor: pointer;
  color: var(--hyperlink);
`;

export default function Join() {
  return (
    <>
      <Title>Join Us</Title>
      <BodyContent>
        <JoinText>
          <p>
            Our band is open to all students studying in the{" "}
            <b>University of Auckland</b> and <b>AUT</b>. No audition required!
          </p>
          <p>
            As a concert band, we are always looking for musicians playing{" "}
            <b>woodwind</b>, <b>brass</b>, and <b>percussion</b> instruments.
          </p>
          <p>
            If you have any questions, feel free to{" "}
            <a href="/contact">contact us</a>!
          </p>
        </JoinText>
        <FormBlock>
          <JoinForm
            src={
              "https://docs.google.com/forms/d/e/1FAIpQLSeUf4YVvyk2cH3Y6nMQVkczT5ERUwSndkvwAW3oLRre_xxsCg/viewform" +
              "?embedded=true"
            }
            title="UniBand Sign-up Form"
          >
            Loading…
          </JoinForm>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUf4YVvyk2cH3Y6nMQVkczT5ERUwSndkvwAW3oLRre_xxsCg/viewform">
            <JoinFormButton>
              <OpenInNewRounded />
            </JoinFormButton>
          </a>
        </FormBlock>
      </BodyContent>
    </>
  );
}
