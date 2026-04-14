import { Toggle } from "@pswui/Toggle";

export const Sizes = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="md">Medium</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  );
};
