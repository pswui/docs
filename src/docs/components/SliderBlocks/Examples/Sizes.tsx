import { Slider } from "@pswui/Slider";

export const Sizes = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Slider
        size="sm"
        defaultValue={25}
        aria-label="Small slider"
      />
      <Slider
        size="md"
        defaultValue={50}
        aria-label="Medium slider"
      />
      <Slider
        size="lg"
        defaultValue={75}
        aria-label="Large slider"
      />
    </div>
  );
};
