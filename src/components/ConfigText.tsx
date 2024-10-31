import { UniBandConfig } from "@/config";
import { UniBandText } from "./components";

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
    // Handle `**bold**`
    else if (boldText) {
      elements.push(<b key={offset}>{boldText}</b>);
    }
    // Handle `[text](link)`
    else if (linkText && url) {
      const isExternal = !url.startsWith(window.location.origin);
      elements.push(
        <a
          key={offset}
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        >
          {linkText}
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

export function ConfigText({ text }: { text: string | string[] }) {
  if (Array.isArray(text)) {
    text = text.join("\n");
  }

  const parsedText = parseTextToElements(text);

  return <>{parsedText}</>;
}
