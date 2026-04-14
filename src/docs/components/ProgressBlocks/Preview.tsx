import { Progress } from "@pswui/Progress";

/* remove */
export interface ProgressDemoPlaygroundProps {
  ProgressProps: {
    size?: "sm" | "md" | "lg";
    max?: number;
    value?: number;
  };
}
/* end */
/* replace */
export function ProgressDemo({ ProgressProps }: ProgressDemoPlaygroundProps) {
  /* with
export function ProgressDemo() {
  */
  const max = ProgressProps.max ?? 100;
  const value = ProgressProps.value;
  const label =
    typeof value === "number"
      ? `${Math.round((value / max) * 100)}%`
      : "Pending";

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span>Uploading assets</span>
        <span className="text-neutral-500 dark:text-neutral-400">{label}</span>
      </div>
      <Progress
        size={ProgressProps.size}
        max={ProgressProps.max}
        value={ProgressProps.value}
        aria-label="Upload progress"
      />
    </div>
  );
}
