import { Skeleton } from "@pswui/Skeleton";

export const Default = () => {
  return <Skeleton />;
};

export const Shapes = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton shape="rectangle" />
      <Skeleton shape="circle" size="icon" />
      <Skeleton shape="text" />
    </div>
  );
};

export const Sizes = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton size="sm" />
      <Skeleton size="md" />
      <Skeleton size="lg" />
    </div>
  );
};
