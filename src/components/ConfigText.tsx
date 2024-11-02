import { UniBandConfig } from "@/config";
import { UniBandText } from "./components";
import React, { ElementType } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact, { Options } from "rehype-react";
import rehypeRaw from "rehype-raw";
import { jsx, Fragment } from "react/jsx-runtime";

function getVariable(key: string): JSX.Element | string | undefined {
  if (key === "email") {
    const email = UniBandConfig.email;
    return <a href={`mailto:${email}`}>{email}</a>;
  }
  const variable = UniBandConfig[key as keyof typeof UniBandConfig];
  return variable && typeof variable === "string" ? variable : undefined;
}

// Parse the Markdown with replacements for custom variables and components
function parseTextToElements(text: string): JSX.Element {
  const modifiedText = text
    .replace(/UniBand/g, "<aside class='uniband'></aside>")
    .replace(/\$\{(\w+)\}/g, (_, key) => {
      const variableValue = getVariable(key);
      return variableValue ? `${variableValue}` : key;
    });

  console.log(modifiedText);

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeReact, {
      createElement: React.createElement,
      Fragment,
      jsx: jsx,
      jsxs: jsx,
      components: {
        aside: ({ className, children }) => {
          if (className === "uniband") {
            console.log("Rendering UniBandText");
            return <UniBandText />;
          }
          return <aside>{children}</aside>;
        },
        a: ({ href, children }) => {
          const isExternal = /^https?:\/\//.test(href || "");
          return (
            <a
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              {children}
            </a>
          );
        },
        span: ({ children, "data-variable": key }) =>
          key ? getVariable(key as string) ?? children : children,
        strong: (props) => <b {...props} />,
      },
    } as Options);

  const parsedContent = processor.processSync(modifiedText)
    .result as JSX.Element;

  console.log(parsedContent.props.children);
  return parsedContent;
}

interface ConfigTextProps {
  text: string | string[];
  wrapper?: ElementType;
}

export function ConfigText({ text, wrapper: Wrapper = "p" }: ConfigTextProps) {
  const isArray = Array.isArray(text);

  const parsedText = isArray
    ? (text as string[]).map((t) => parseTextToElements(t))
    : parseTextToElements(text as string);

  return isArray ? (
    <>
      {(parsedText as JSX.Element[]).map((content, index) => (
        <Wrapper key={index}>{content}</Wrapper>
      ))}
    </>
  ) : (
    <Wrapper>{parsedText}</Wrapper>
  );
}
