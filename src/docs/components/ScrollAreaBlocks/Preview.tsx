import { ScrollArea } from "@pswui/ScrollArea";

const updates = [
  "New Accordion docs now include collapsible and disabled item examples.",
  "Select gained keyboard navigation for Home, End, and arrow keys.",
  "Textarea now exposes a matching TextareaFrame wrapper for composed layouts.",
  "Pagination ships dedicated previous, next, and ellipsis helpers.",
  "Table primitives now cover header, body, footer, and caption elements.",
];

const tags = [
  "react",
  "typescript",
  "tailwind",
  "accessibility",
  "routing",
  "mdx",
  "forms",
  "composition",
];

/* remove */
export interface ScrollAreaDemoPlaygroundProps {
  ScrollAreaProps: {
    orientation?: "vertical" | "horizontal" | "both";
  };
}
/* end */
/* replace */
export function ScrollAreaDemo({
  ScrollAreaProps,
}: ScrollAreaDemoPlaygroundProps) {
  /* with
export function ScrollAreaDemo() {
  */
  const orientation = ScrollAreaProps.orientation ?? "vertical";

  return (
    <ScrollArea
      orientation={ScrollAreaProps.orientation}
      className="h-48 w-full max-w-md rounded-md border border-neutral-200 p-4 dark:border-neutral-800"
    >
      {orientation === "horizontal" ? (
        <div className="flex w-max gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-neutral-100 px-3 py-2 text-sm dark:bg-neutral-900"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : orientation === "both" ? (
        <div className="grid w-max min-w-[32rem] gap-4 md:grid-cols-2">
          {updates.map((update) => (
            <p
              key={update}
              className="text-sm text-neutral-600 dark:text-neutral-300"
            >
              {update}
            </p>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <h4 className="text-sm font-semibold">Release notes</h4>
          {updates.map((update) => (
            <p
              key={update}
              className="text-sm text-neutral-600 dark:text-neutral-300"
            >
              {update}
            </p>
          ))}
        </div>
      )}
    </ScrollArea>
  );
}
