import { FormError, FormHelper, FormItem, FormLabel } from "@pswui/Form";
import { Input } from "@pswui/Input";

/* remove */
export interface FormDemoPlaygroundProps {
  FormItemProps: {
    invalid?: string;
  };
  FormHelperProps: {
    hiddenOnInvalid?: boolean;
  };
}
/* end */
/* replace */
export function FormDemo({
  FormItemProps,
  FormHelperProps,
}: FormDemoPlaygroundProps) {
  /* with
export function FormDemo() {
  */
  return (
    <div className="w-full max-w-sm">
      <FormItem invalid={FormItemProps.invalid}>
        <FormLabel>Email</FormLabel>
        <Input
          full
          type="email"
          placeholder="name@example.com"
        />
        <FormHelper hiddenOnInvalid={FormHelperProps.hiddenOnInvalid}>
          Use the email address you check every day.
        </FormHelper>
        <FormError />
      </FormItem>
    </div>
  );
}
