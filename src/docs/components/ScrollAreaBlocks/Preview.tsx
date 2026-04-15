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

const timelineLanes = [
  "Backlog",
  "Planning",
  "Design",
  "Implementation",
  "Review",
  "QA",
  "Release",
];

const boardColumns = ["Intake", "Spec", "Build", "Verify", "Ship"];

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

  if (orientation === "horizontal") {
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
  }

  if (orientation === "both") {
    return (
      <ScrollArea
        orientation="both"
        role="region"
        aria-label="Delivery board"
        className="h-72 w-full max-w-xl rounded-lg border border-neutral-200 p-3 pr-5 pb-5 dark:border-neutral-800"
      >
        <div className="grid min-w-max grid-cols-5 gap-3">
          {boardColumns.map((column, columnIndex) => (
            <div
              key={column}
              className="w-56 rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-950"
            >
              <p className="mb-3 text-sm font-medium">{column}</p>
              <div className="grid gap-3">
                {Array.from({ length: 4 }, (_, rowIndex) => {
                  const cardIndex = columnIndex * 4 + rowIndex + 1;

                  return (
                    <div
                      key={`${column}-${cardIndex}`}
                      className="flex h-24 items-end rounded-md border border-neutral-200 bg-white p-3 text-sm dark:border-neutral-800 dark:bg-black"
                    >
                      Card {cardIndex}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    );
  }

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
}
