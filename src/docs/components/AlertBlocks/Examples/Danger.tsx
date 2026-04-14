import { Alert, AlertDescription, AlertTitle } from "@pswui/Alert";

export function Danger() {
  return (
    <Alert status="danger">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  );
}
