import { Textarea } from "@pswui/Textarea";

/* remove */
export interface TextareaDemoPlaygroundProps {
  TextareaProps: {
    full?: boolean;
    invalid?: string;
  };
}
/* end */
/* replace */
export function TextareaDemo({ TextareaProps }: TextareaDemoPlaygroundProps) {
  /* with
export function TextareaDemo() {
  */
  return (
    <div className="w-full max-w-sm">
      <Textarea
        full={TextareaProps.full}
        invalid={TextareaProps.invalid}
        aria-label="Message"
        className="min-h-28 w-full"
        placeholder="Write a short note for the team."
      />
    </div>
  );
}
