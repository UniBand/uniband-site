"use client";

import styled from "styled-components";

const StyledFooter = styled.footer`
  background: linear-gradient(40deg, #00457d, #0096c5);
  bottom: 0;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 2rem;
  padding-inline: var(--body-margins);
  position: absolute;
  width: 100%;
`;

export default function Footer() {
  return (
    <StyledFooter>
      &copy; {new Date().getFullYear()} UniBand Incorporated. All rights
      reserved.
    </StyledFooter>
  );
}
