import { Alert, AlertDescription, AlertTitle } from "@pswui/Alert";

export const Default = () => {
  return (
    <Alert className="w-full max-w-xl">
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        Alerts are useful for short messages that need to stand out from the
        surrounding content.
      </AlertDescription>
    </Alert>
  );
};
