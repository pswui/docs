import { RadioGroup, RadioGroupItem } from "@pswui/RadioGroup";

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-1">
      <RadioGroupItem value="option-1">Option 1</RadioGroupItem>
      <RadioGroupItem value="option-2">Option 2</RadioGroupItem>
      <RadioGroupItem value="option-3">Option 3</RadioGroupItem>
    </RadioGroup>
  );
}

export function Default() {
  return (
    <RadioGroup defaultValue="option-1">
      <RadioGroupItem value="option-1">Option 1</RadioGroupItem>
      <RadioGroupItem value="option-2">Option 2</RadioGroupItem>
      <RadioGroupItem value="option-3">Option 3</RadioGroupItem>
    </RadioGroup>
  );
}

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
