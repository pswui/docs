import { Label } from "@pswui/Label";
import { Checkbox } from "@pswui/Checkbox";

export function Text() {
  return (
    <Label direction="horizontal">
      <Checkbox size="base" />
      <span>Agree terms and conditions</span>
    </Label>
  );
}
