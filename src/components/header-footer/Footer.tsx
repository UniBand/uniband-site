"use client";

import styled from "styled-components";
import LinkIcons from "../LinkIcons";

const FooterContainer = styled.footer`
  margin-top: auto;
`;

const StyledFooter = styled.footer`
  background: var(--blue-gradient);
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
  padding-block: 2rem;
  padding-inline: var(--body-margins);
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <StyledFooter>
        &copy; {new Date().getFullYear()} UniBand Incorporated. All rights
        reserved.
        <LinkIcons />
      </StyledFooter>
    </FooterContainer>
  );
}
