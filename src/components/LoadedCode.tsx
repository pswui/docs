import { Button } from "@pswui/Button";
import { useToast } from "@pswui/Toast";
import { forwardRef, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { twMerge } from "tailwind-merge";

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

export const LoadedCode = ({
  from,
  className,
}: {
  from: string;
  className?: string;
}) => {
  const [state, setState] = useState<string | undefined | null>();
  const { toast } = useToast();

  useEffect(() => {
    (async () => {
      const res = await fetch(from);
      const text = await res.text();
      setState(text);
    })();
  }, [from]);

  return (
    <div className={twMerge("relative", className)}>
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
        style={gruvboxDark}
        className={`w-full h-64 rounded-lg ${!state ? "animate-pulse" : ""} scrollbar-none`}
        customStyle={{ padding: "1rem" }}
      >
        {state ?? ""}
      </SyntaxHighlighter>
    </div>
  );
};

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
        style={gruvboxDark}
        className={"w-full h-auto max-h-64 rounded-lg scrollbar-none"}
        customStyle={{ padding: "1rem" }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
});
