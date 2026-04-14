import { Separator } from "@pswui/Separator";

export function Vertical() {
  return (
    <div className="flex items-center gap-4">
      <span>Left side</span>
      <Separator orientation="vertical" />
      <span>Right side</span>
    </div>
  );
}
