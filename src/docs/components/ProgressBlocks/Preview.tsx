import { Progress } from "@pswui/Progress";

export function ProgressDemo() {
  return <Progress value={50} />;
}

export function Default() {
  return <Progress value={50} />;
}

export function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      <Progress
        size="sm"
        value={70}
      />
      <Progress
        size="md"
        value={50}
      />
      <Progress
        size="lg"
        value={30}
      />
    </div>
  );
}
