import { Avatar } from "@pswui/Avatar";

export const CustomFallback = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        fallback="UI"
        shape="square"
      />
      <Avatar
        fallback="42"
        shape="square"
        size="lg"
      />
    </div>
  );
};
