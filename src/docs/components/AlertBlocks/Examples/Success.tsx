import { Alert, AlertDescription, AlertTitle } from "@pswui/Alert";

export const Success = () => {
  return (
    <Alert
      status="success"
      className="w-full max-w-xl"
    >
      <AlertTitle>Profile updated</AlertTitle>
      <AlertDescription>
        Your account details were saved successfully and are now live.
      </AlertDescription>
    </Alert>
  );
};
