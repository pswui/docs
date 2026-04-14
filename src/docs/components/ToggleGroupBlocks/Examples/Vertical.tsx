import { ToggleGroup, ToggleGroupItem } from "@pswui/ToggleGroup";

export function Vertical() {
  return (
    <ToggleGroup orientation="vertical">
      <ToggleGroupItem value="a">Option A</ToggleGroupItem>
      <ToggleGroupItem value="b">Option B</ToggleGroupItem>
      <ToggleGroupItem value="c">Option C</ToggleGroupItem>
    </ToggleGroup>
  );
}
