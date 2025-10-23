"use client";

import { Button, SpacedTitle } from "@/components/atomic";
import { BodyContent } from "@/components/components";
import { ConfigText } from "@/components/ConfigText";
import { UniBandConfig } from "@/config";
import { OpenInNewRounded } from "@mui/icons-material";
import styled from "styled-components";

const ContentContainer = styled(BodyContent)`
  display: grid;
  gap: 2rem;
  grid-template-columns: 2fr 3fr;

  @media (max-width: 1200px) {
    gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
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

  @media (max-width: 1200px) {
    display: none;
  }
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

const MobileFormButton = styled(Button)`
  display: none;
  width: 100%;
  font-size: 1.5rem;
  border-radius: 1rem;
  padding: 0.5rem;

  a {
    color: inherit !important;
  }

  @media (max-width: 1200px) {
    display: block;
  }
`;

export default function Join() {
  return (
    <>
      <SpacedTitle>Join Us</SpacedTitle>
      <ContentContainer>
        <JoinText>
          <ConfigText text={UniBandConfig.join.joinText} />
        </JoinText>
        {UniBandConfig.signUpForm && UniBandConfig.signUpForm != "" ? (
          <>
            <FormBlock>
              <JoinForm
                src={`${UniBandConfig.signUpForm}?embedded=true`}
                title="UniBand Sign-up Form"
              >
                Loading…
              </JoinForm>
              <a
                href={UniBandConfig.signUpForm}
                target="_blank"
                rel="noreferrer"
              >
                <JoinFormButton>
                  <OpenInNewRounded />
                </JoinFormButton>
              </a>
            </FormBlock>
            <MobileFormButton>
              <a
                href={UniBandConfig.signUpForm}
                target="_blank"
                rel="noreferrer"
              >
                Sign up here!
              </a>
            </MobileFormButton>
          </>
        ) : (
          <p>
            The sign-up form is currently not available. Please contact us for
            more information.
          </p>
        )}
      </ContentContainer>
    </>
  );
}
