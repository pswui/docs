import { Textarea } from "@pswui/Textarea";

export function WithError() {
  return (
    <Textarea
      placeholder="Enter description"
      invalid="This field is required."
    />
  );
}
