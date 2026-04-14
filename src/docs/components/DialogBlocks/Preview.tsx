import { Button } from "@pswui/Button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogRoot,
  DialogSubtitle,
  DialogTitle,
  DialogTrigger,
} from "@pswui/Dialog";
/* remove */
export interface DialogDemoPlaygroundProps {
  DialogOverlayProps: {
    closeOnClick: boolean;
  };
}
/* end */
/* replace */
export function DialogDemo({ DialogOverlayProps }: DialogDemoPlaygroundProps) {
  /* with
export function DialogDemo() {
  */
  return (
    <DialogRoot>
      <DialogTrigger>
        <Button preset="default">Open Dialog</Button>
      </DialogTrigger>
      <DialogOverlay closeOnClick={DialogOverlayProps.closeOnClick}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogSubtitle>Dialog Subtitle</DialogSubtitle>
          </DialogHeader>
          <p>
            Laborum non adipisicing enim enim culpa esse anim esse consequat
            Lorem incididunt. Enim mollit laborum sunt cillum voluptate est
            officia nostrud non consequat adipisicing cupidatat aliquip magna.
            Voluptate nisi cupidatat qui nisi in pariatur. Sint consequat labore
            pariatur mollit sint nostrud tempor commodo pariatur ea laboris.
          </p>
          <DialogFooter>
            <DialogClose>
              <Button preset="default">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </DialogRoot>
  );
}
