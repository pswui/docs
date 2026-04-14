import { Slider } from "@pswui/Slider";

export const Default = () => {
  return <Slider defaultValue={["50"]} />;
};

export const Sizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <Slider size="sm" defaultValue={["30"]} />
      <Slider size="md" defaultValue={["50"]} />
      <Slider size="lg" defaultValue={["70"]} />
    </div>
  );
};
