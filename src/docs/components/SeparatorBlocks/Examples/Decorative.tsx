import { Separator } from "@pswui/Separator";

export const Decorative = () => {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="text-sm font-medium">Account summary</div>
      <Separator decorative />
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Use a decorative separator when the divider is purely visual and does
        not add meaning to the content.
      </p>
    </div>
  );
};
