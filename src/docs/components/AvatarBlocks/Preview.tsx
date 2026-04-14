import { Avatar } from "@pswui/Avatar";

/* remove */
export interface AvatarDemoPlaygroundProps {
  AvatarProps: {
    src?: string;
    size?: "sm" | "md" | "lg";
    shape?: "circle" | "square";
  };
}
/* end */
/* replace */
export function AvatarDemo({ AvatarProps }: AvatarDemoPlaygroundProps) {
  /* with
export function AvatarDemo() {
  */
  return (
    <Avatar
      src={AvatarProps.src}
      alt="The Octocat"
      name="The Octocat"
      size={AvatarProps.size}
      shape={AvatarProps.shape}
    />
  );
}
