import { UniBandConfig } from "@/config";
import { UniBandText } from "./components";
import { ElementType } from "react";

function getVariable(key: string): JSX.Element | string | undefined {
  if (key === "email") {
    const email = UniBandConfig.email;
    return <a href={`mailto:${email}`}>{email}</a>;
  }
  const variable = UniBandConfig[key as keyof typeof UniBandConfig];
  if (variable && typeof variable === "string") {
    return variable;
  }
  return undefined;
}

function parseTextToElements(text: string): (string | JSX.Element)[] {
  const elements: (string | JSX.Element)[] = [];
  const regex =
    /\$\{(\w+)\}|\*\*(.+?)\*\*|\[(.+?)\]\((\/[^\)]+|https?:\/\/[^\)]+)\)|UniBand/g;
  let lastIndex = 0;

  const addTextSegment = (start: number, end: number) => {
    if (lastIndex < start) {
      elements.push(text.slice(lastIndex, start));
    }
    lastIndex = end;
  };

  text.replace(regex, (match, variableKey, boldText, linkText, url, offset) => {
    addTextSegment(offset, offset + match.length);

    if (variableKey) {
      const variableElement = getVariable(variableKey);
      elements.push(variableElement ?? variableKey);
    } else if (boldText) {
      elements.push(<b key={offset}>{parseTextToElements(boldText)}</b>);
    } else if (linkText && url) {
      const isExternal = /^https?:\/\//.test(url);
      elements.push(
        <a
          key={offset}
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        >
          {parseTextToElements(linkText)}
        </a>
      );
    } else if (match === "UniBand") {
      elements.push(<UniBandText key={offset} />);
    }

    return ""; // `replace` expects a return value
  });

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements;
}

interface ConfigTextProps {
  text: string | string[];
  wrapper?: ElementType;
}

export function ConfigText({ text, wrapper: Wrapper = "p" }: ConfigTextProps) {
  // Ensure text is a single string if it's an array
  const isArray = Array.isArray(text);

  // Parse text based on whether it's an array or single string
  const parsedText = isArray
    ? (text as string[]).map((t) => parseTextToElements(t))
    : parseTextToElements(text as string);

  // Render based on if `text` is an array
  if (isArray) {
    return (
      <>
        {(parsedText as (string | JSX.Element)[][]).map((content, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: doesn't matter for this
          <Wrapper key={index}>{content}</Wrapper>
        ))}
      </>
    );
  }
  return <Wrapper>{parsedText}</Wrapper>;
}
