import { Separator } from "@pswui/Separator";

export const Default = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Item one</p>
      <Separator />
      <p>Item two</p>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div className="flex items-center gap-4">
      <span>Left side</span>
      <Separator orientation="vertical" />
      <span>Right side</span>
    </div>
  );
};
