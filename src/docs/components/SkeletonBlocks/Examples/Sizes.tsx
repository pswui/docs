import { Skeleton } from "@pswui/Skeleton";

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton size="sm" />
      <Skeleton size="md" />
      <Skeleton size="lg" />
    </div>
  );
}
