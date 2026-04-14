import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@pswui/Card";

export const AccountSummary = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Usage this month</CardTitle>
        <CardDescription>Storage and bandwidth overview</CardDescription>
      </CardHeader>
      <CardContent className="gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            Storage
          </span>
          <span className="font-medium">42 GB</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            Bandwidth
          </span>
          <span className="font-medium">138 GB</span>
        </div>
      </CardContent>
    </Card>
  );
};
