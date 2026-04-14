import { Alert, AlertDescription, AlertTitle } from "@pswui/Alert";

export const Warning = () => {
  return (
    <Alert
      status="warning"
      className="w-full max-w-xl"
    >
      <AlertTitle>Review required</AlertTitle>
      <AlertDescription>
        Double-check your billing address before submitting the order.
      </AlertDescription>
    </Alert>
  );
};
