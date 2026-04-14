import { Badge } from "@pswui/Badge";

export const StatusVariants = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge status="success">Success</Badge>
      <Badge status="warning">Warning</Badge>
      <Badge status="danger">Danger</Badge>
    </div>
  );
};
