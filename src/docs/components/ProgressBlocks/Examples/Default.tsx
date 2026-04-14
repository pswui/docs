import { Progress } from "@pswui/Progress";

export const Default = () => {
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span>Uploading assets</span>
        <span className="text-neutral-500 dark:text-neutral-400">64%</span>
      </div>
      <Progress
        value={64}
        aria-label="Upload progress"
      />
    </div>
  );
};
