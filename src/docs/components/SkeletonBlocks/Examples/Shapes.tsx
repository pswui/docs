import { Skeleton } from "@pswui/Skeleton";

export const Shapes = () => {
  return (
    <div className="w-full max-w-sm space-y-4">
      <Skeleton className="h-24" />
      <Skeleton
        shape="circle"
        size="icon"
      />
      <Skeleton
        shape="text"
        className="w-48"
      />
    </div>
  );
};
