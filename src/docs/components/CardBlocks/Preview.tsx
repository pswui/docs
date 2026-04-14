import { Button } from "@pswui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@pswui/Card";

export function CardDemo() {
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
}

export function Default() {
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
}
