import { Button } from "@pswui/Button";
import {
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerRoot,
  DrawerTrigger,
} from "@pswui/Drawer";
/* remove */
export interface DrawerDemoPlaygroundProps {
  DrawerRootProps: {
    closeThreshold: number;
  };
  DrawerContentProps: {
    position: "top" | "bottom" | "left" | "right";
  };
}
/* end */
/* replace */
export function DrawerDemo({
  DrawerRootProps,
  DrawerContentProps,
}: DrawerDemoPlaygroundProps) {
  /* with
export function DrawerDemo() {
  */
  return (
    <DrawerRoot closeThreshold={DrawerRootProps.closeThreshold}>
      <DrawerTrigger>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerOverlay className="z-[99]">
        <DrawerContent
          className="max-w-[320px]"
          position={DrawerContentProps.position}
        >
          <DrawerHeader>
            <h1 className="text-2xl font-bold">Drawer</h1>
          </DrawerHeader>
          <DrawerBody>
            <p>
              Drawers are a type of overlay that slides in from the edge of the
              screen. They are typically used for navigation or additional
              content.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose>
              <Button>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </DrawerRoot>
  );
}
