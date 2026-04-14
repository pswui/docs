import { Skeleton } from "@pswui/Skeleton";

export function SkeletonDemo() {
  return <Skeleton />;
}

export function Default() {
  return <Skeleton />;
}

export function Shapes() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton shape="rectangle" />
      <Skeleton
        shape="circle"
        size="icon"
      />
      <Skeleton shape="text" />
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton size="sm" />
      <Skeleton size="md" />
      <Skeleton size="lg" />
    </div>
  );
}
