import styled from "styled-components";

const StyledTitle = styled.h1<{ fontSize: string; background?: string }>`
  background: ${({ background }) => background || "var(--blue-gradient)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${({ fontSize }) => fontSize};
  font-stretch: expanded;
  font-weight: 700;
  text-align: center;
`;

const StyledSpacedTitle = styled(StyledTitle)`
  margin-top: 4rem;
  margin-bottom: 5rem;
`;

interface TitleProps {
  children: React.ReactNode;
  fontSize?: string;
  background?: string;
}

export function Title({ children, fontSize = "6rem", background }: TitleProps) {
  return (
    <StyledTitle fontSize={fontSize} background={background}>
      {children}
    </StyledTitle>
  );
}

export function SpacedTitle({
  children,
  fontSize = "6rem",
  background,
}: TitleProps) {
  return (
    <StyledSpacedTitle fontSize={fontSize} background={background}>
      {children}
    </StyledSpacedTitle>
  );
}
