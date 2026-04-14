import { ToggleGroup, ToggleGroupItem } from "@pswui/ToggleGroup";

export const Default = () => {
  return (
    <ToggleGroup
      aria-label="Text alignment"
      defaultValue="center"
    >
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  );
};
