import { Textarea } from "@pswui/Textarea";

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />;
}

export function Default() {
  return <Textarea placeholder="Type your message here." />;
}

export function WithError() {
  return (
    <Textarea
      placeholder="Enter description"
      invalid="This field is required."
    />
  );
}

export function FullWidth() {
  return (
    <Textarea
      full
      placeholder="Full width textarea"
    />
  );
}
