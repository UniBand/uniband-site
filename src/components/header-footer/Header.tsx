"use client";

import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  background: linear-gradient(40deg, #00457d, #0096c5);
  display: flex;
  flex-direction: column;
  padding-block: 2rem;
  padding-inline: 5rem;
  box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.2);

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
