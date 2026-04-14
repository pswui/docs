import { RadioGroup, RadioGroupItem } from "@pswui/RadioGroup";

export function Default() {
  return (
    <RadioGroup defaultValue="option-1">
      <RadioGroupItem value="option-1">Option 1</RadioGroupItem>
      <RadioGroupItem value="option-2">Option 2</RadioGroupItem>
      <RadioGroupItem value="option-3">Option 3</RadioGroupItem>
    </RadioGroup>
  );
}
