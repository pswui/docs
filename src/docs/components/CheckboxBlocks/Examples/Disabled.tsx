import { Label } from "@pswui/Label";
import { Checkbox } from "@pswui/Checkbox";

export function Disabled() {
  return (
    <Label direction="horizontal">
      <Checkbox size="base" disabled />
      <span>Agree terms and conditions</span>
    </Label>
  );
}
