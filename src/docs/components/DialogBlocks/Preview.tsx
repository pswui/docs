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

export function DialogDemo() {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Button preset="default">Open Dialog</Button>
      </DialogTrigger>
      <DialogOverlay>
        <DialogContent size={"fullMd"}>
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
