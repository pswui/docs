import { Alert, AlertDescription, AlertTitle } from "@pswui/Alert";

export const Danger = () => {
  return (
    <Alert
      status="danger"
      className="w-full max-w-xl"
    >
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        The card could not be charged. Try another method and submit again.
      </AlertDescription>
    </Alert>
  );
};
