import { RadioGroup, RadioGroupItem } from "@pswui/RadioGroup";

export function Horizontal() {
  return (
    <RadioGroup
      orientation="horizontal"
      defaultValue="a"
    >
      <RadioGroupItem value="a">A</RadioGroupItem>
      <RadioGroupItem value="b">B</RadioGroupItem>
      <RadioGroupItem value="c">C</RadioGroupItem>
    </RadioGroup>
  );
}
