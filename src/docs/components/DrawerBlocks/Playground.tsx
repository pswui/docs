import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { DrawerDemo, type DrawerDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, DrawerDemoPlaygroundProps {}

export default function DrawerPlayground() {
  const [props, control] = usePgProps<TemplateProps>({
    DrawerRootProps: {
      closeThreshold: {
        type: "number",
        value: 0.3,
      },
    },
    DrawerContentProps: {
      position: {
        type: "select",
        options: ["top", "bottom", "left", "right"],
        value: "left",
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Drawer"
      control={control}
      props={props}
    >
      <DrawerDemo {...props} />
    </PlaygroundLayout>
  );
}
