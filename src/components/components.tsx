import styled from "styled-components";

const HighlightImageStyle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    border-radius: 1rem;
    height: auto;
    max-height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;

interface HighlightImageProps {
  src: string;
  alt: string;
}

export function HighlightImage({ src, alt }: HighlightImageProps) {
  return (
    <HighlightImageStyle>
      <img src={src} alt={alt} />
    </HighlightImageStyle>
  );
}

export const BodyContent = styled.div`
  align-items: start;
  margin-top: 2rem;
  padding-inline: var(--body-margins);

  b {
    font-weight: 700;
  }

  a {
    color: var(--hyperlink);
    transition: opacity 200ms ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const HighlightedText = styled.span<{ fontWeight?: number }>`
  font-stretch: expanded;
  ${({ fontWeight }) => `font-weight: ${fontWeight}` || ""};
`;

interface UniBandTextProps {
  fontWeight?: number;
  b?: boolean;
}

export function UniBandText({
  fontWeight = undefined,
  b = undefined,
}: UniBandTextProps) {
  if (b) {
    fontWeight = 700;
  }
  return <HighlightedText fontWeight={fontWeight}>UniBand</HighlightedText>;
}
