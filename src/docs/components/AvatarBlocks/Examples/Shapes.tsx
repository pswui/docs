import { Avatar } from "@pswui/Avatar";

export function Shapes() {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        name="Circle"
        shape="circle"
      />
      <Avatar
        name="Square"
        shape="square"
      />
    </div>
  );
}
