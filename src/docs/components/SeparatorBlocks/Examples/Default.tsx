import { Separator } from "@pswui/Separator";

export function Default() {
  return (
    <div className="flex flex-col gap-4">
      <p>Item one</p>
      <Separator />
      <p>Item two</p>
    </div>
  );
}
