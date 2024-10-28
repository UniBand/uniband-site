import styled from "styled-components";

const StyledTitle = styled.h1<{ fontSize: string }>`
  background: linear-gradient(40deg, #00457d, #0096c5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${({ fontSize }) => fontSize};
  font-stretch: expanded;
  font-weight: 700;
  text-align: center;
`;

interface TitleProps {
  children: React.ReactNode;
  fontSize?: string;
}

export default function Title({ children, fontSize = "6rem" }: TitleProps) {
  return <StyledTitle fontSize={fontSize}>{children}</StyledTitle>;
}
