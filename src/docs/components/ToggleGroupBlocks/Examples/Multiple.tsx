import { ToggleGroup, ToggleGroupItem } from "@pswui/ToggleGroup";

export const Multiple = () => {
  return (
    <ToggleGroup
      aria-label="Visible columns"
      type="multiple"
      defaultValue={["bold", "italic"]}
    >
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
  );
};
