import { Progress } from "@pswui/Progress";

export const Sizes = () => {
  return (
    <div className="w-full max-w-sm space-y-4">
      <Progress
        size="sm"
        value={25}
        aria-label="Small progress"
      />
      <Progress
        size="md"
        value={50}
        aria-label="Medium progress"
      />
      <Progress
        size="lg"
        value={75}
        aria-label="Large progress"
      />
    </div>
  );
};
