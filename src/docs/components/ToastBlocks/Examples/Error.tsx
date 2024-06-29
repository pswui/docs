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
          status: "error",
        })
      }
    >
      Toast
    </Button>
  );
}

/* not shadowing global Error (lol) */
export function _Error() {
  return (
    <>
      <Toaster />
      <Children />
    </>
  );
}
