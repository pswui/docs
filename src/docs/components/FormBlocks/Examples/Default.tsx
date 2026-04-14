import { FormHelper, FormItem, FormLabel } from "@pswui/Form";
import { Input } from "@pswui/Input";

export function Default() {
  return (
    <FormItem invalid={null}>
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        placeholder="you@example.com"
      />
      <FormHelper>Enter your email address.</FormHelper>
    </FormItem>
  );
}
