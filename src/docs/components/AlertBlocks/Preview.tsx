import { Alert, AlertDescription, AlertTitle } from "@pswui/Alert";

export function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>Alert description text.</AlertDescription>
    </Alert>
  );
}

export function Default() {
  return (
    <Alert>
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>This is a default alert message.</AlertDescription>
    </Alert>
  );
}

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
