"use client";

import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  background: linear-gradient(40deg, #00457d, #0096c5);
  box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding-block: 1.5rem;
  padding-inline: 4rem;
  position: sticky;
  top: 0;
  margin-bottom: 1rem;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const HeaderContent = styled.div`
  inline-size: 100%;
  margin-inline: auto;
  padding-inline: 1rem;
`;

interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Header({ children, ...props }: HeaderProps) {
  return (
    <StyledHeader {...props}>
      <Navbar />
      <HeaderContent>{children}</HeaderContent>
    </StyledHeader>
  );
}
