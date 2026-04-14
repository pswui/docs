import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@pswui/Card";
import { Button } from "@pswui/Button";

export const Default = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content paragraph.</p>
      </CardContent>
      <CardFooter>
        <Button preset="default">Action</Button>
      </CardFooter>
    </Card>
  );
};
