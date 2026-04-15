import { ScrollArea } from "@pswui/ScrollArea";

const timelineLanes = [
  "Backlog",
  "Planning",
  "Design",
  "Implementation",
  "Review",
  "QA",
  "Release",
];

export const Horizontal = () => {
  return (
    <ScrollArea
      orientation="horizontal"
      role="region"
      aria-label="Timeline lanes"
      className="w-full max-w-xl rounded-lg border border-neutral-200 p-3 pb-5 dark:border-neutral-800"
    >
      <div className="flex min-w-max gap-3 pb-2">
        {timelineLanes.map((lane, index) => (
          <div
            key={lane}
            className="flex h-28 w-40 shrink-0 flex-col justify-between rounded-md border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <p className="font-medium">{lane}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Step {index + 1}
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
