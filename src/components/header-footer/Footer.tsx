"use client";

import styled from "styled-components";

const FooterWrapper = styled.div`
  margin-top: auto;
`;

const StyledFooter = styled.footer`
  background: linear-gradient(40deg, #00457d, #0096c5);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  padding-block: 2rem;
  padding-inline: var(--body-margins);
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <StyledFooter>
        &copy; {new Date().getFullYear()} UniBand Incorporated. All rights
        reserved.
      </StyledFooter>
    </FooterWrapper>
  );
}
