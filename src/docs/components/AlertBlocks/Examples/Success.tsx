import { Alert, AlertDescription, AlertTitle } from "@pswui/Alert";

export function Success() {
  return (
    <Alert status="success">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  );
}
