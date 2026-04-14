import { Separator } from "@pswui/Separator";

export const Vertical = () => {
  return (
    <div className="flex h-14 items-center gap-4 text-sm">
      <span>Overview</span>
      <Separator orientation="vertical" />
      <span>Analytics</span>
      <Separator orientation="vertical" />
      <span>Settings</span>
    </div>
  );
};
