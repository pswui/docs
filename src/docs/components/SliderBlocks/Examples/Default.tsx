import { Slider } from "@pswui/Slider";

export const Default = () => {
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span>Volume</span>
        <span className="text-neutral-500 dark:text-neutral-400">60%</span>
      </div>
      <Slider
        min={0}
        max={100}
        defaultValue={60}
        aria-label="Volume"
      />
      <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
};
