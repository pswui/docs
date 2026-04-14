import { Textarea } from "@pswui/Textarea";

export const Default = () => {
  return (
    <Textarea
      aria-label="Message"
      className="min-h-28 w-full max-w-sm"
      placeholder="Write a short note for the team."
    />
  );
};
