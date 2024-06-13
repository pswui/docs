import { Label } from "@pswui/Label";
import { Checkbox } from "@pswui/Checkbox";

export function Horizontal() {
  return (
    <Label direction="horizontal">
      <Checkbox />
      <span>Checkbox</span>
    </Label>
  );
}
