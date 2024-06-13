import { Label } from "@pswui/Label";
import { Input } from "@pswui/Input";

export function LabelDemo() {
  return (
    <Label direction="vertical">
      <span>Email</span>
      <Input type="email" />
    </Label>
  );
}
