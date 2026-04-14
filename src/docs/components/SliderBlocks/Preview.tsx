import { Slider } from "@pswui/Slider";

export function SliderDemo() {
  return <Slider defaultValue={["50"]} />;
}

export function Default() {
  return <Slider defaultValue={["50"]} />;
}

export function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      <Slider
        size="sm"
        defaultValue={["30"]}
      />
      <Slider
        size="md"
        defaultValue={["50"]}
      />
      <Slider
        size="lg"
        defaultValue={["70"]}
      />
    </div>
  );
}
