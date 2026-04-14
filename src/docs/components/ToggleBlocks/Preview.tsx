import { Toggle } from "@pswui/Toggle";

export function ToggleDemo() {
  return <Toggle>Toggle</Toggle>;
}

export function Default() {
  return <Toggle>Toggle</Toggle>;
}

export function Sizes() {
  return (
    <div className="flex items-center gap-2">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="md">Medium</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  );
}

export function DefaultPressed() {
  return <Toggle defaultPressed>Pressed by default</Toggle>;
}
