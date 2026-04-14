import { ScrollArea } from "@pswui/ScrollArea";

export const Default = () => {
  return (
    <ScrollArea className="h-40 w-80">
      <div className="p-4">
        <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
          Scroll area content. The area has a custom scrollbar styled to match
          the design system. Try scrolling to see the scrollbar appear.
        </p>
        <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </ScrollArea>
  );
};
