import { ScrollArea } from "@pswui/ScrollArea";

const updates = [
  "New Accordion docs now include collapsible and disabled item examples.",
  "Select gained keyboard navigation for Home, End, and arrow keys.",
  "Textarea now exposes a matching TextareaFrame wrapper for composed layouts.",
  "Pagination ships dedicated previous, next, and ellipsis helpers.",
  "Table primitives now cover header, body, footer, and caption elements.",
];

export const Default = () => {
  return (
    <ScrollArea className="h-48 w-full max-w-md rounded-md border border-neutral-200 p-4 dark:border-neutral-800">
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
    </ScrollArea>
  );
};
