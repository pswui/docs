import { Badge } from "@pswui/Badge";

/* remove */
export interface BadgeDemoPlaygroundProps {
  BadgeProps: {
    size?: "sm" | "md";
    status?: "default" | "success" | "warning" | "danger";
  };
}
/* end */
/* replace */
export function BadgeDemo({ BadgeProps }: BadgeDemoPlaygroundProps) {
  /* with
export function BadgeDemo() {
  */
  return (
    <Badge
      size={BadgeProps.size}
      status={BadgeProps.status}
    >
      Active
    </Badge>
  );
}
