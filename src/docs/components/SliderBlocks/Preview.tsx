import { Slider } from "@pswui/Slider";
import { useState } from "react";

/* remove */
export interface SliderDemoPlaygroundProps {
  SliderProps: {
    size?: "sm" | "md" | "lg";
    step?: number;
    disabled?: boolean;
  };
}
/* end */
/* replace */
export function SliderDemo({ SliderProps }: SliderDemoPlaygroundProps) {
  /* with
export function SliderDemo() {
  */
  const [value, setValue] = useState(60);

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span>Volume</span>
        <span className="text-neutral-500 dark:text-neutral-400">{value}%</span>
      </div>
      <Slider
        size={SliderProps.size}
        step={SliderProps.step}
        disabled={SliderProps.disabled}
        min={0}
        max={100}
        defaultValue={60}
        aria-label="Volume"
        onChange={(event) => {
          setValue(Number(event.currentTarget.value));
        }}
      />
      <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
}
