import { FormError, FormHelper, FormItem, FormLabel } from "@pswui/Form";
import { Input } from "@pswui/Input";

export const Default = () => {
  return (
    <div className="w-full max-w-sm">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <Input
          full
          type="email"
          placeholder="name@example.com"
        />
        <FormHelper>
          We'll use this address for important account updates.
        </FormHelper>
        <FormError />
      </FormItem>
    </div>
  );
};
