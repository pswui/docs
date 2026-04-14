import { Checkbox } from "@pswui/Checkbox";
import { Label } from "@pswui/Label";
/* remove */
export interface CheckboxDemoPlaygroundProps {
  CheckboxProps: {
    size: "base" | "md" | "lg";
  };
}

/* replace */
export function CheckboxDemo({ CheckboxProps }: CheckboxDemoPlaygroundProps) {
  /* with
export function CheckboxDemo() {
  */
  return (
    <Label direction="horizontal">
      <Checkbox size={CheckboxProps.size} />
      <span>Checkbox</span>
    </Label>
  );
}
