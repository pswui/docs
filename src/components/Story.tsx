import React from "react";
import { twMerge } from "tailwind-merge";

const layoutClasses = {
  default: "",
  centered: "flex items-center justify-center",
};

const Story = React.forwardRef<
  HTMLDivElement,
  {
    layout?: keyof typeof layoutClasses;
    children: React.ReactNode;
    className?: string;
    id?: string;
  }
>(({ layout = "default", children, className, id }, ref) => {
  return (
    <div
      className={twMerge(
        `bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 rounded-lg w-full p-4 min-h-48 h-auto my-8 not-prose ${layoutClasses[layout]}`,
        className
      )}
      ref={ref}
      id={id}
    >
      {children}
    </div>
  );
});

export { Story };
