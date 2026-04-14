import { Skeleton } from "@pswui/Skeleton";

export const Default = () => {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Skeleton className="h-32" />
      <div className="space-y-2">
        <Skeleton
          size="lg"
          className="w-2/3"
        />
        <Skeleton size="md" />
        <Skeleton
          size="md"
          className="w-5/6"
        />
      </div>
    </div>
  );
};
