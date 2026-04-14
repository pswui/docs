import { Slider } from "@pswui/Slider";

export const Disabled = () => {
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span>Brightness</span>
        <span className="text-neutral-500 dark:text-neutral-400">35%</span>
      </div>
      <Slider
        min={0}
        max={100}
        defaultValue={35}
        disabled
        aria-label="Brightness"
      />
    </div>
  );
};
