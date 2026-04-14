import { Alert, AlertTitle, AlertDescription } from "@pswui/Alert";

export const Default = () => {
  return (
    <Alert>
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>This is a default alert message.</AlertDescription>
    </Alert>
  );
};

export const Success = () => {
  return (
    <Alert status="success">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved successfully.</AlertDescription>
    </Alert>
  );
};

export const Warning = () => {
  return (
    <Alert status="warning">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Please review your input before proceeding.</AlertDescription>
    </Alert>
  );
};

export const Danger = () => {
  return (
    <Alert status="danger">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong. Please try again.</AlertDescription>
    </Alert>
  );
};
