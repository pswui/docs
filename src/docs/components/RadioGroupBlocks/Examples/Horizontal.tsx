import { RadioGroup, RadioGroupItem } from "@pswui/RadioGroup";

export const Horizontal = () => {
  return (
    <RadioGroup
      orientation="horizontal"
      defaultValue="weekly"
    >
      <RadioGroupItem value="daily">Daily</RadioGroupItem>
      <RadioGroupItem value="weekly">Weekly</RadioGroupItem>
      <RadioGroupItem value="monthly">Monthly</RadioGroupItem>
    </RadioGroup>
  );
};
