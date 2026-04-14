import { Code } from "@/components/LoadedCode";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import DocsLayout from "./DocsLayout";
import DynamicLayout from "./DynamicLayout";
import ErrorBoundary from "./ErrorHandler";
import MainLayout from "./MainLayout";

import { Tooltip, TooltipContent } from "@pswui/Tooltip";
import React, {
  type ForwardedRef,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { HeadingContext } from "./HeadingContext";

function buildThresholdList() {
  const thresholds: number[] = [];
  const numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

type HashedHeaderProps = React.ComponentPropsWithoutRef<"h1">;

function HashedHeaders(Level: `h${1 | 2 | 3 | 4 | 5 | 6}`) {
  return (prop: HashedHeaderProps, ref: ForwardedRef<HTMLHeadingElement>) => {
    const internalRef = useRef<HTMLHeadingElement | null>(null);
    const [_, setActiveHeadings] = useContext(HeadingContext);

    const { children, ...restProp } = prop;

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([{ target, intersectionRatio }]) => {
          if (intersectionRatio > 0.5) {
            setActiveHeadings((prev) => [...prev, target.id]);
          } else {
            setActiveHeadings((prev) => prev.filter((id) => id !== target.id));
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: buildThresholdList(),
        },
      );
      if (internalRef.current) {
        observer.observe(internalRef.current);
      }
      return () => {
        observer.disconnect();
      };
    }, [setActiveHeadings]);

    const [status, setStatus] = useState<"normal" | "error" | "success">(
      "normal",
    );
    const messages = {
      normal: "Click to copy link",
      success: "Copied link!",
      error: "Failed to copy..",
    };

    useEffect(() => {
      if (status !== "normal") {
        const timeout = setTimeout(() => {
          setStatus("normal");
        }, 3000);
        return () => {
          clearTimeout(timeout);
        };
      }
    }, [status]);

    return (
      <Tooltip
        asChild
        position={"right"}
      >
        <Level
          ref={(el) => {
            internalRef.current = el;
            if (typeof ref === "function") {
              ref(el);
            } else if (el && ref) {
              ref.current = el;
            }
          }}
          className={`${prop.className} cursor-pointer select-none`}
          onClick={async (e) => {
            try {
              await navigator.clipboard.writeText(
                `${window.location.href.split("#")[0]}#${e.currentTarget.id}`,
              );
              setStatus("success");
            } catch (e) {
              setStatus("error");
            }
          }}
          {...restProp}
        >
          {children}
          <TooltipContent
            status={status}
            offset={"lg"}
            delay={"early"}
          >
            <p className={"text-base font-normal whitespace-nowrap not-prose"}>
              {messages[status]}
            </p>
          </TooltipContent>
        </Level>
      </Tooltip>
    );
  };
}

const overrideComponents = {
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => {
    if (!React.isValidElement(props.children)) {
      return null;
    }

    const { props: clonedProps } = React.cloneElement(
      React.Children.only(props.children),
    );

    const { children, className } = clonedProps as {
      children: React.ReactNode;
      className?: string;
    };

    let language = "typescript";

    if (className) {
      const detectedLanguage = /language-([a-z]+)/.exec(className);
      if (detectedLanguage) language = detectedLanguage[1];
    }

    return <Code language={language}>{children as string}</Code>;
  },
  code: forwardRef<HTMLElement, { className?: string }>((props, ref) => (
    <code
      ref={ref}
      {...props}
      className={`${props.className} rounded-md bg-neutral-800 text-orange-500 font-light p-1 before:content-none after:content-none`}
    />
  )),
  table: forwardRef<HTMLTableElement, { className?: string }>((props, ref) => (
    <div className="overflow-auto">
      <table
        ref={ref}
        {...props}
        className={`${props.className}`}
      />
    </div>
  )),
  h1: forwardRef<HTMLHeadingElement, HashedHeaderProps>(HashedHeaders("h1")),
  h2: forwardRef<HTMLHeadingElement, HashedHeaderProps>(HashedHeaders("h2")),
  h3: forwardRef<HTMLHeadingElement, HashedHeaderProps>(HashedHeaders("h3")),
  h4: forwardRef<HTMLHeadingElement, HashedHeaderProps>(HashedHeaders("h4")),
  h5: forwardRef<HTMLHeadingElement, HashedHeaderProps>(HashedHeaders("h5")),
  h6: forwardRef<HTMLHeadingElement, HashedHeaderProps>(HashedHeaders("h6")),
};

const docsModules = import.meta.glob("./docs/components/*.mdx");

const routes = Object.keys(docsModules).map((path) => {
  const sfPath = path.split("/").pop()?.replace(".mdx", "");

  return (
    <Route
      key={path}
      path={sfPath}
      lazy={async () => {
        const { default: C, tableOfContents } = await import(
          `./docs/components/${sfPath}.mdx`
        );
        return {
          Component: () => (
            <DynamicLayout toc={tableOfContents}>
              <C components={overrideComponents} />
            </DynamicLayout>
          ),
        };
      }}
    />
  );
});

const REDIRECTED_404 = /^\?(\/([a-zA-Z0-9\-_]+\/?)+)(&.*)*$/;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout />}
      errorElement={<ErrorBoundary />}
    >
      <Route
        index
        lazy={async () => {
          const { default: Component } = await import("./Home");

          return {
            Component,
            loader() {
              return REDIRECTED_404.test(window.location.search)
                ? redirect(
                    REDIRECTED_404.exec(window.location.search)?.[1] ?? "/",
                  )
                : true;
            },
          };
        }}
      />
      <Route
        path="docs"
        element={<DocsLayout />}
      >
        <Route
          index
          loader={() => redirect("/docs/introduction")}
        />
        <Route
          path="introduction"
          lazy={async () => {
            const { default: DocsIntroduction, tableOfContents } = await import(
              "./docs/introduction.mdx"
            );

            return {
              Component: () => (
                <DynamicLayout toc={tableOfContents}>
                  <DocsIntroduction components={overrideComponents} />
                </DynamicLayout>
              ),
            };
          }}
        />
        <Route
          path="installation"
          lazy={async () => {
            const { default: DocsInstallation, tableOfContents } = await import(
              "./docs/installation.mdx"
            );

            return {
              Component: () => (
                <DynamicLayout toc={tableOfContents}>
                  <DocsInstallation components={overrideComponents} />
                </DynamicLayout>
              ),
            };
          }}
        />
        <Route
          path="configuration"
          lazy={async () => {
            const { default: DocsConfiguration, tableOfContents } =
              await import("./docs/configuration.mdx");

            return {
              Component: () => (
                <DynamicLayout toc={tableOfContents}>
                  <DocsConfiguration components={overrideComponents} />
                </DynamicLayout>
              ),
            };
          }}
        />
        <Route path="components">
          <Route
            index
            loader={() =>
              redirect(
                `/docs/components/${Object.keys(docsModules)[0]
                  .split("/")
                  .pop()
                  ?.replace(".mdx", "")}`,
              )
            }
          />
          {routes}
        </Route>
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
