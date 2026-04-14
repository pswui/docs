import { ToggleGroup, ToggleGroupItem } from "@pswui/ToggleGroup";

export function Multiple() {
  return (
    <ToggleGroup
      type="multiple"
      defaultValue={["bold", "italic"]}
    >
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
  );
}
