import { Input } from "@pswui/Input";
import { Label } from "@pswui/Label";

export function Disabled() {
  return (
    <Label direction="vertical">
      <span>Email</span>
      <Input
        type="email"
        disabled
      />
    </Label>
  );
}
