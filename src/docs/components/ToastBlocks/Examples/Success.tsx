import { Button } from "@pswui/Button";
import { Toaster, useToast } from "@pswui/Toast";

function Children() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: "Toast Title",
          description: "Toast Description",
          status: "success",
        })
      }
    >
      Toast
    </Button>
  );
}

export function Success() {
  return (
    <>
      <Toaster />
      <Children />
    </>
  );
}
