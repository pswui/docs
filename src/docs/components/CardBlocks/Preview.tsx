import { Button } from "@pswui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@pswui/Card";

/* remove */
export interface CardDemoPlaygroundProps {
  CardDescriptionProps: {
    children?: string;
  };
  ButtonProps: {
    preset?: "default" | "ghost" | "link" | "success" | "warning" | "danger";
  };
}
/* end */
/* replace */
export function CardDemo({
  CardDescriptionProps,
  ButtonProps,
}: CardDemoPlaygroundProps) {
  /* with
export function CardDemo() {
  */
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Starter plan</CardTitle>
        <CardDescription>{CardDescriptionProps.children}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Includes 3 projects, analytics, and team collaboration.</p>
      </CardContent>
      <CardFooter>
        <Button preset={ButtonProps.preset}>Choose plan</Button>
      </CardFooter>
    </Card>
  );
}
