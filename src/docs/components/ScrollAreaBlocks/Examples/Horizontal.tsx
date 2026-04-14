import { ScrollArea } from "@pswui/ScrollArea";

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

export const Horizontal = () => {
  return (
    <ScrollArea
      orientation="horizontal"
      className="w-full max-w-md rounded-md border border-neutral-200 p-3 dark:border-neutral-800"
    >
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
    </ScrollArea>
  );
};
