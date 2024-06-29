import { Checkbox } from "@pswui/Checkbox";
import { Label } from "@pswui/Label";

export function Disabled() {
  return (
    <Label direction="horizontal">
      <Checkbox
        size="base"
        disabled
      />
      <span>Agree terms and conditions</span>
    </Label>
  );
}
