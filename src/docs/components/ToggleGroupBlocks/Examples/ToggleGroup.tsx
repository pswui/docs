import { ToggleGroup, ToggleGroupItem } from "@pswui/ToggleGroup";

export const Default = () => {
  return (
    <ToggleGroup>
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
  );
};

export const Multiple = () => {
  return (
    <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
  );
};

export const Vertical = () => {
  return (
    <ToggleGroup orientation="vertical">
      <ToggleGroupItem value="a">Option A</ToggleGroupItem>
      <ToggleGroupItem value="b">Option B</ToggleGroupItem>
      <ToggleGroupItem value="c">Option C</ToggleGroupItem>
    </ToggleGroup>
  );
};
