import { Button } from "@pswui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@pswui/Card";

export const Actions = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Leave workspace</CardTitle>
        <CardDescription>
          You will lose access to this project and its settings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Make sure another owner is assigned before removing yourself.
        </p>
      </CardContent>
      <CardFooter>
        <Button preset="ghost">Cancel</Button>
        <Button preset="danger">Leave workspace</Button>
      </CardFooter>
    </Card>
  );
};
