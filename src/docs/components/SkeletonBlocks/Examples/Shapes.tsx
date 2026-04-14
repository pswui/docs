import { Skeleton } from "@pswui/Skeleton";

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
