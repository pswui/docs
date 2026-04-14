import { ToggleGroup, ToggleGroupItem } from "@pswui/ToggleGroup";

export const Vertical = () => {
  return (
    <ToggleGroup
      aria-label="Size"
      orientation="vertical"
      defaultValue="medium"
      size="sm"
    >
      <ToggleGroupItem value="small">Small</ToggleGroupItem>
      <ToggleGroupItem value="medium">Medium</ToggleGroupItem>
      <ToggleGroupItem value="large">Large</ToggleGroupItem>
    </ToggleGroup>
  );
};
