import { Toggle } from "@pswui/Toggle";

export const Default = () => {
  return <Toggle>Toggle</Toggle>;
};

export const Sizes = () => {
  return (
    <div className="flex items-center gap-2">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="md">Medium</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  );
};

export const DefaultPressed = () => {
  return <Toggle defaultPressed>Pressed by default</Toggle>;
};
