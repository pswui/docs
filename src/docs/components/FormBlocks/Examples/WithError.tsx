import { FormError, FormHelper, FormItem, FormLabel } from "@pswui/Form";
import { Input } from "@pswui/Input";

export function WithError() {
  return (
    <FormItem invalid="This field is required.">
      <FormLabel>Username</FormLabel>
      <Input
        type="text"
        placeholder="username"
      />
      <FormError />
      <FormHelper hiddenOnInvalid>Enter a username.</FormHelper>
    </FormItem>
  );
}
