import { ScrollArea } from "@pswui/ScrollArea";

export function Default() {
  return (
    <ScrollArea className="h-40 w-80">
      <div className="p-4">
        <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
          Scroll area content. The area has a custom scrollbar styled to match
          the design system.
        </p>
        <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </div>
    </ScrollArea>
  );
}
