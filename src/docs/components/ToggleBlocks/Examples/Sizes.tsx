import { Toggle } from "@pswui/Toggle";

export function Sizes() {
  return (
    <div className="flex items-center gap-2">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="md">Medium</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  );
}
