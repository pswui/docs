import { RadioGroup, RadioGroupItem } from "@pswui/RadioGroup";

export const Default = () => {
  return (
    <RadioGroup defaultValue="starter">
      <RadioGroupItem value="starter">Starter plan</RadioGroupItem>
      <RadioGroupItem value="pro">Pro plan</RadioGroupItem>
      <RadioGroupItem value="enterprise">Enterprise plan</RadioGroupItem>
    </RadioGroup>
  );
};
