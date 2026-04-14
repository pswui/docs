import { FormError, FormHelper, FormItem, FormLabel } from "@pswui/Form";
import { Input } from "@pswui/Input";

export const WithError = () => {
  return (
    <div className="w-full max-w-sm">
      <FormItem invalid="Please enter a valid email address.">
        <FormLabel>Email</FormLabel>
        <Input
          full
          type="email"
          placeholder="name@example.com"
        />
        <FormHelper hiddenOnInvalid>
          Use the email address you check every day.
        </FormHelper>
        <FormError />
      </FormItem>
    </div>
  );
};
