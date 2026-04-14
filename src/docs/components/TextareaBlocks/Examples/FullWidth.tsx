import { Textarea } from "@pswui/Textarea";

export const FullWidth = () => {
  return (
    <div className="w-full">
      <Textarea
        aria-label="Release summary"
        className="min-h-28"
        full
        placeholder="Draft the launch summary for the upcoming release."
      />
    </div>
  );
};
