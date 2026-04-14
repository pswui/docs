import { Button } from "@pswui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@pswui/Card";

export const Default = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Starter plan</CardTitle>
        <CardDescription>
          A compact card layout for simple promotional content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Includes 3 projects, analytics, and team collaboration.</p>
      </CardContent>
      <CardFooter>
        <Button preset="default">Choose plan</Button>
      </CardFooter>
    </Card>
  );
};
