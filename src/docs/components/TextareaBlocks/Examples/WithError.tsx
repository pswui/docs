import { Textarea } from "@pswui/Textarea";

export const WithError = () => {
  return (
    <Textarea
      aria-label="Project summary"
      className="min-h-28 w-full max-w-sm"
      placeholder="Add a project summary."
      invalid="Please enter at least 20 characters."
    />
  );
};
