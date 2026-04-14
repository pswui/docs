import type { TEMPLATE } from "@/components/LoadedCode.tsx";
import { usePgProps } from "@/components/PgHooks.tsx";
import { PlaygroundLayout } from "@/components/Playground.tsx";
import { type ControlledPopoverDemoProps, PopoverDemo } from "./Preview.tsx";

interface TemplateProps extends TEMPLATE, ControlledPopoverDemoProps {}

export default function PopoverPlayground() {
  const [props, control] = usePgProps<TemplateProps>({
    PopoverProps: {
      opened: {
        type: "boolean",
        value: false,
      },
    },
    PopoverContentProps: {
      direction: {
        type: "select",
        options: ["col", "row"],
        value: "col",
      },
      position: {
        type: "select",
        options: ["start", "end"],
        value: "end",
      },
      anchor: {
        type: "select",
        options: ["start", "middle", "end"],
        value: "middle",
      },
      align: {
        type: "select",
        options: ["start", "middle", "end"],
        value: "middle",
      },
      offset: {
        type: "select",
        options: ["sm", "md", "lg"],
        value: "md",
      },
      className: {
        type: "string",
        value: "",
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Popover"
      props={props}
      control={control}
    >
      <PopoverDemo {...props} />
    </PlaygroundLayout>
  );
}
