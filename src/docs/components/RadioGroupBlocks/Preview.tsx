import { RadioGroup, RadioGroupItem } from "@pswui/RadioGroup";

/* remove */
export interface RadioGroupDemoPlaygroundProps {
  RadioGroupProps: {
    orientation?: "vertical" | "horizontal";
    disabled?: boolean;
  };
}
/* end */
/* replace */
export function RadioGroupDemo({
  RadioGroupProps,
}: RadioGroupDemoPlaygroundProps) {
  /* with
export function RadioGroupDemo() {
  */
  return (
    <RadioGroup
      defaultValue="starter"
      orientation={RadioGroupProps.orientation}
      disabled={RadioGroupProps.disabled}
    >
      <RadioGroupItem value="starter">Starter plan</RadioGroupItem>
      <RadioGroupItem value="pro">Pro plan</RadioGroupItem>
      <RadioGroupItem value="enterprise">Enterprise plan</RadioGroupItem>
    </RadioGroup>
  );
}
