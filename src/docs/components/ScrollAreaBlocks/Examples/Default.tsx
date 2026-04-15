import { ScrollArea } from "@pswui/ScrollArea";

const activityItems = [
  "Roadmap issue triaged",
  "Design tokens reviewed",
  "Keyboard navigation verified",
  "Playwright harness updated",
  "Component API narrowed",
  "Release notes drafted",
  "Focus ring checked",
  "Build queued for review",
];

export const Default = () => {
  return (
    <ScrollArea
      role="region"
      aria-label="Activity feed"
      className="h-56 w-full max-w-xl rounded-lg border border-neutral-200 p-3 pr-5 dark:border-neutral-800"
    >
      <div className="flex flex-col gap-3 pr-2">
        {activityItems.map((item, index) => (
          <div
            key={item}
            className="rounded-md border border-neutral-200 bg-neutral-50 p-3 text-sm dark:border-neutral-800 dark:bg-neutral-950"
          >
            <p className="font-medium">Entry {index + 1}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{item}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
