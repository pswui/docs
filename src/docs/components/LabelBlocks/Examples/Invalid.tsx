import { Input } from "@pswui/Input";
import { Label } from "@pswui/Label";

export function Invalid() {
  return (
    <Label direction="vertical">
      <span>Email</span>
      <Input
        type="email"
        invalid="Invalid Email"
      />
    </Label>
  );
}
