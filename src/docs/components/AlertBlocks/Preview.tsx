import { Alert, AlertDescription, AlertTitle } from "@pswui/Alert";

/* remove */
export interface AlertDemoPlaygroundProps {
  AlertProps: {
    status?: "default" | "success" | "warning" | "danger";
  };
}
/* end */
/* replace */
export function AlertDemo({ AlertProps }: AlertDemoPlaygroundProps) {
  /* with
export function AlertDemo() {
  */
  return (
    <Alert
      status={AlertProps.status}
      className="w-full max-w-xl"
    >
      <AlertTitle>Workspace update</AlertTitle>
      <AlertDescription>
        Review the latest changes before publishing them to the team.
      </AlertDescription>
    </Alert>
  );
}
