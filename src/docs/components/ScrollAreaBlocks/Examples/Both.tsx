import { ScrollArea } from "@pswui/ScrollArea";

const boardColumns = ["Intake", "Spec", "Build", "Verify", "Ship"];

export const Both = () => {
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
};
