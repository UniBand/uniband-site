import styled from "styled-components";

export const Title = styled.h1<{
  $fontSize?: string;
  $background?: string;
  $responsiveSize?: string;
}>`
  background: ${({ $background }) => $background || "var(--blue-gradient)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: clamp(
    0vw,
    ${({ $responsiveSize = "20vw" }) => $responsiveSize},
    ${({ $fontSize = "6rem" }) => $fontSize}
  );
  // font-size: ${({ $fontSize = "6rem" }) => $fontSize};
  font-stretch: expanded;
  font-weight: 700;
  text-align: center;
`;

export const SpacedTitle = styled(Title)`
  margin-top: 4rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
`;
