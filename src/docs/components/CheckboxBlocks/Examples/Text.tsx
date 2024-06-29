import { Checkbox } from "@pswui/Checkbox";
import { Label } from "@pswui/Label";

export function Text() {
  return (
    <Label direction="horizontal">
      <Checkbox size="base" />
      <span>Agree terms and conditions</span>
    </Label>
  );
}
