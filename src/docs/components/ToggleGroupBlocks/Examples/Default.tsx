import { ToggleGroup, ToggleGroupItem } from "@pswui/ToggleGroup";

export function Default() {
  return (
    <ToggleGroup>
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
  );
}
