import { RadioGroup, RadioGroupItem } from "@pswui/RadioGroup";

export const Disabled = () => {
  return (
    <RadioGroup
      defaultValue="email"
      disabled
    >
      <RadioGroupItem value="email">Email notifications</RadioGroupItem>
      <RadioGroupItem value="sms">SMS notifications</RadioGroupItem>
      <RadioGroupItem value="push">Push notifications</RadioGroupItem>
    </RadioGroup>
  );
};
