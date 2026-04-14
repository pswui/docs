import { FormError, FormHelper, FormItem, FormLabel } from "@pswui/Form";
import { Input } from "@pswui/Input";

export function FormDemo() {
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
