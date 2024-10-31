import { UniBandConfig } from "@/config";
import { UniBandText } from "./components";
import { ElementType } from "react";

function getVariable(key: string): JSX.Element | string | undefined {
  if (key === "email") {
    const email = UniBandConfig.email;
    return <a href={`mailto:${email}`}>email</a>;
  }
  const variable = UniBandConfig[key as keyof typeof UniBandConfig];
  if (variable && typeof variable === "string") {
    return variable;
  }
  return undefined;
}

function parseTextToElements(text: string): (string | JSX.Element)[] {
  const elements: (string | JSX.Element)[] = [];

  // Regex for matching `${variable}`, bold `**text**`, `[text](link)`, and "UniBand"
  const regex =
    /\$\{(\w+)\}|\*\*(.+?)\*\*|\[(.+?)\]\((https?:\/\/[^\)]+)\)|UniBand/g;
  let lastIndex = 0;

  text.replace(regex, (match, variableKey, boldText, linkText, url, offset) => {
    // Add any text before this match as a string
    if (lastIndex < offset) {
      elements.push(text.slice(lastIndex, offset));
    }

    // Handle `${variable}`
    if (variableKey) {
      const variableElement = getVariable(variableKey);
      elements.push(variableElement ?? `${variableKey}`);
    }
    // Handle `**bold**`, parse its content for nested patterns
    else if (boldText) {
      const nestedElements = parseTextToElements(boldText); // Recursively parse bold text
      elements.push(<b key={offset}>{nestedElements}</b>);
    }
    // Handle `[text](link)`, parse link text for nested patterns
    else if (linkText && url) {
      const isExternal = !url.startsWith(window.location.origin);
      const nestedLinkText = parseTextToElements(linkText); // Recursively parse link text
      elements.push(
        <a
          key={offset}
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        >
          {nestedLinkText}
        </a>
      );
    }
    // Handle "UniBand" replacement
    else if (match === "UniBand") {
      elements.push(<UniBandText key={offset} />);
    }

    // Update last index to end of the current match
    lastIndex = offset + match.length;
    return ""; // `replace` expects a return value
  });

  // Add any remaining text after the last match
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
