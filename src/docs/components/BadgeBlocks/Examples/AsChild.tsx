import { Badge } from "@pswui/Badge";

export const AsChild = () => {
  return (
    <Badge
      asChild
      status="success"
    >
      <a href="https://github.com/pswui/ui">Open repository</a>
    </Badge>
  );
};
