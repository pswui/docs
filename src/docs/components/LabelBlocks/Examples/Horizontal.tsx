import { Checkbox } from "@pswui/Checkbox";
import { Label } from "@pswui/Label";

export function Horizontal() {
  return (
    <Label direction="horizontal">
      <Checkbox />
      <span>Checkbox</span>
    </Label>
  );
}
