import { Textarea, TextareaFrame } from "@pswui/Textarea";

export const WithFrame = () => {
  return (
    <TextareaFrame className="w-full max-w-sm">
      <div className="mb-2 text-sm font-medium">Release notes</div>
      <Textarea
        aria-label="Release notes"
        unstyled
        full
        className="min-h-28"
        placeholder="Draft your release announcement."
      />
    </TextareaFrame>
  );
};
