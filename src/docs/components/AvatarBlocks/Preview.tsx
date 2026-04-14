import { Avatar } from "@pswui/Avatar";

export function AvatarDemo() {
  return <Avatar name="Shinwoo Park" />;
}

export function Default() {
  return <Avatar name="Shinwoo Park" />;
}

export function WithImage() {
  return (
    <Avatar
      src="https://avatars.githubusercontent.com/u/12345"
      name="Shinwoo Park"
      alt="Shinwoo Park's avatar"
    />
  );
}

export function Sizes() {
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
}

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
