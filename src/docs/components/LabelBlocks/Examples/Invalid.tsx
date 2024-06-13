import { Label } from "@pswui/Label";
import { Input } from "@pswui/Input";

export function Invalid() {
  return (
    <Label direction="vertical">
      <span>Email</span>
      <Input type="email" invalid="Invalid Email" />
    </Label>
  );
}
