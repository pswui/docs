import { Badge } from "@pswui/Badge";

export const Default = () => {
  return <Badge>Default</Badge>;
};

export const StatusVariants = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge status="default">Default</Badge>
      <Badge status="success">Success</Badge>
      <Badge status="warning">Warning</Badge>
      <Badge status="danger">Danger</Badge>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  );
};
