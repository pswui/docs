import { Avatar } from "@pswui/Avatar";

export const Sizes = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        name="Small User"
        size="sm"
      />
      <Avatar
        name="Medium User"
        size="md"
      />
      <Avatar
        name="Large User"
        size="lg"
      />
    </div>
  );
};
