import styled from "styled-components";

interface ButtonProps {
  $background?: string;
  $color?: string;
}

export const Button = styled.button<ButtonProps>`
  background: ${({ $background }) => $background || "var(--background)"};
  border-radius: 0.5rem;
  border: ${({ $color }) => $color || "var(--dark-blue)"} 2px solid;
  color: ${({ $color }) => $color || "var(--dark-blue)"};
  cursor: pointer;
  font-size: 1.25rem;
  font-stretch: expanded;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  transition: background 400ms ease, color 400ms ease;
  width: fit-content;

  &:hover {
    background: ${({ $color }) => $color || "var(--dark-blue)"};
    color: ${({ $background }) => $background || "var(--background)"};
  }
`;
