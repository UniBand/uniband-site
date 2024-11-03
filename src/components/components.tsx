import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";

const HighlightImageStyle = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  img {
    border-radius: 1rem;
    height: auto;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    width: auto;
  }
`;

const fetchImageDimensions = async (imagePath: string) => {
  try {
    const response = await fetch(
      `/api/getImageDimensions?imagePath=${encodeURIComponent(
        `public/${imagePath}`
      )}`
    );
    if (!response.ok) throw new Error("Failed to fetch image dimensions");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching image dimensions:", error);
    return { width: 0, height: 0 };
  }
};

interface HighlightImageProps {
  src: string;
  alt: string;
}

export function HighlightImage({ src, alt }: HighlightImageProps) {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    fetchImageDimensions(src).then((dims) => setDimensions(dims));
  }, [src]);

  return (
    <HighlightImageStyle>
      {dimensions ? (
        <Image
          src={
            src.startsWith("https://") || src.startsWith("/") ? src : `/${src}`
          }
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
        />
      ) : null}
    </HighlightImageStyle>
  );
}

export const BodyContent = styled.div`
  align-items: start;
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

export function decodeHTMLEntities(text: string): string {
  const parser = new DOMParser();
  const decoded = parser.parseFromString(text, "text/html").documentElement
    .textContent;
  return decoded || "";
}
