import { Progress } from "@pswui/Progress";

export const Indeterminate = () => {
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span>Preparing report</span>
        <span className="text-neutral-500 dark:text-neutral-400">Pending</span>
      </div>
      <Progress aria-label="Preparing report" />
    </div>
  );
};
