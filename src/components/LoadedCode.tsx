import { Button } from "@pswui/Button";
import { useToast } from "@pswui/Toast";
import {
  type Component,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  PrismLight,
  type SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { duotoneSpace } from "react-syntax-highlighter/dist/cjs/styles/prism";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import ts from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import { twMerge } from "tailwind-merge";

const SyntaxHighlighter =
  PrismLight as unknown as typeof Component<SyntaxHighlighterProps> & {
    registerLanguage<T>(name: string, func: T): void;
    alias(name: string, alias: string | string[]): void;
    alias(aliases: Record<string, string | string[]>): void;
  };

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("markup", markup);
SyntaxHighlighter.registerLanguage("css", css);

export const GITHUB_UI = "https://raw.githubusercontent.com/pswui/ui/main";
export const GITHUB_DOCS = "https://raw.githubusercontent.com/pswui/docs/main";
export const GITHUB_COMP = (componentName: string) =>
  `${GITHUB_UI}/packages/react/components/${componentName}.tsx`;
export const GITHUB_DIR_COMP = (componentName: string, source: string) =>
  `${GITHUB_UI}/packages/react/components/${componentName}/${source}`;
export const GITHUB_COMP_PREVIEW = (componentName: string) =>
  `${GITHUB_DOCS}/src/docs/components/${componentName}Blocks/Preview.tsx`;
export const GITHUB_STORY = (componentName: string, storyName: string) =>
  `${GITHUB_DOCS}/src/docs/components/${componentName}Blocks/Examples/${storyName}.tsx`;

export type TEMPLATE = Record<
  string,
  Record<string, string | boolean | number | undefined>
>;

const TEMPLATE_REMOVE_REGEX = /\/\*\s*remove\s*\*\/(.|\n)*?\/\*\s*end\s*\*\//g;
const TEMPLATE_REPLACE_REGEX =
  /\/\*\s*replace\s*\*\/(.|\n)*?\/\*\s*with\s*\n((.|\n)+)\n\s*\*\//g;

export const LoadedCode = forwardRef<
  HTMLDivElement,
  { from: string; className?: string; template?: TEMPLATE }
>(({ from, className, template }, ref) => {
  const [state, setState] = useState<string | undefined | null>();
  const { toast } = useToast();

  useEffect(() => {
    (async () => {
      const res = await fetch(from);
      const text = await res.text();
      setState(text);
    })();
  }, [from]);

  const postProcessedCode = useMemo(() => {
    if (!state) return "";
    if (!template) return state;

    let templatedCode = state;

    templatedCode = templatedCode
      .replaceAll(TEMPLATE_REMOVE_REGEX, "")
      .replaceAll(TEMPLATE_REPLACE_REGEX, "$2");

    for (const [componentName, componentTemplateProps] of Object.entries(
      template,
    )) {
      for (const [propName, propValue] of Object.entries(
        componentTemplateProps,
      )) {
        const regex = new RegExp(
          `(<${componentName.slice(0, componentName.length - 5)}\\b[^>]*?)(\n?\\s+)${propName}={${componentName}.${propName}}`,
        );
        templatedCode = templatedCode.replace(
          regex,
          typeof propValue === "undefined"
            ? "$1"
            : typeof propValue === "string"
              ? `\$1$2 ${propName}="${propValue}"`
              : `$1$2 ${propName}={${propValue}}`,
        );
      }
    }

    return templatedCode;
  }, [state, template]);

  return (
    <div
      className={twMerge("relative", className)}
      ref={ref}
    >
      <Button
        preset="default"
        size="icon"
        className="absolute top-4 right-4 text-black dark:text-white z-10"
        onClick={() => {
          if (state && state.length > 0) {
            void navigator.clipboard.writeText(state ?? "");
            toast({
              title: "Copied",
              description: "The code has been copied to your clipboard.",
              status: "success",
            });
          } else {
            toast({
              title: "Error",
              description: "It seems like code is not loaded yet.",
              status: "error",
            });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <title>Copy</title>
          <path
            fill="currentColor"
            d="M4 7v14h14v2H4c-1.1 0-2-.9-2-2V7zm16-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h3.18C11.6 1.84 12.7 1 14 1s2.4.84 2.82 2zm-6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-4 4V5H8v12h12V5h-2v2z"
          />
        </svg>
      </Button>
      <SyntaxHighlighter
        language="typescript"
        style={duotoneSpace}
        className={`w-full h-64 rounded-lg ${!state ? "animate-pulse" : ""} scrollbar-none resize-y`}
        customStyle={{ padding: "1rem" }}
      >
        {postProcessedCode}
      </SyntaxHighlighter>
    </div>
  );
});
LoadedCode.displayName = "LoadedCode";

export const Code = forwardRef<
  HTMLDivElement,
  { children: string; className?: string; language: string }
>(({ children, className, language }, ref) => {
  const { toast } = useToast();

  return (
    <div
      className={twMerge("relative", className)}
      ref={ref}
    >
      <Button
        preset="default"
        size="icon"
        className="absolute top-4 right-4 text-black dark:text-white z-10"
        onClick={() => {
          void navigator.clipboard.writeText(children ?? "");
          toast({
            title: "Copied",
            description: "The code has been copied to your clipboard.",
            status: "success",
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <title>Copy</title>
          <path
            fill="currentColor"
            d="M4 7v14h14v2H4c-1.1 0-2-.9-2-2V7zm16-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h3.18C11.6 1.84 12.7 1 14 1s2.4.84 2.82 2zm-6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-4 4V5H8v12h12V5h-2v2z"
          />
        </svg>
      </Button>
      <SyntaxHighlighter
        language={language}
        style={duotoneSpace}
        className={"w-full h-auto max-h-64 rounded-lg scrollbar-none"}
        customStyle={{ padding: "1rem" }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
});
