import { Skeleton } from "@pswui/Skeleton";

export const Sizes = () => {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Skeleton size="sm" />
      <Skeleton size="md" />
      <Skeleton size="lg" />
      <Skeleton
        shape="circle"
        size="icon"
      />
    </div>
  );
};
