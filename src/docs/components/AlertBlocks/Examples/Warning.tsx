import { Alert, AlertDescription, AlertTitle } from "@pswui/Alert";

export function Warning() {
  return (
    <Alert status="warning">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please review your input before proceeding.
      </AlertDescription>
    </Alert>
  );
}
