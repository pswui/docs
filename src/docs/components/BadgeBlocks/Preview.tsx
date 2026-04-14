import { Badge } from "@pswui/Badge";

export function BadgeDemo() {
  return <Badge>Badge</Badge>;
}

export function Default() {
  return <Badge>Default</Badge>;
}

export function StatusVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge status="default">Default</Badge>
      <Badge status="success">Success</Badge>
      <Badge status="warning">Warning</Badge>
      <Badge status="danger">Danger</Badge>
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  );
}
