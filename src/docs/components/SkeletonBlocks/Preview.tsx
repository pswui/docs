import { Skeleton } from "@pswui/Skeleton";

/* remove */
export interface SkeletonDemoPlaygroundProps {
  SkeletonProps: {
    shape?: "rectangle" | "circle" | "text";
    size?: "sm" | "md" | "lg" | "icon";
  };
}
/* end */
/* replace */
export function SkeletonDemo({ SkeletonProps }: SkeletonDemoPlaygroundProps) {
  /* with
export function SkeletonDemo() {
  */
  const shape = SkeletonProps.shape ?? "rectangle";
  const className =
    shape === "circle"
      ? undefined
      : shape === "text"
        ? "w-48"
        : "h-24 w-full max-w-sm";

  return (
    <div className="w-full max-w-sm">
      <Skeleton
        shape={SkeletonProps.shape}
        size={SkeletonProps.size}
        className={className}
      />
    </div>
  );
}
