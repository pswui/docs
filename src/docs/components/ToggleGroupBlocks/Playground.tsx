import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import {
  ToggleGroupDemo,
  type ToggleGroupDemoPlaygroundProps,
} from "./Preview";

interface TemplateProps extends TEMPLATE, ToggleGroupDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    ToggleGroupProps: {
      type: {
        type: "select",
        options: ["single", "multiple"],
        value: "single",
      },
      orientation: {
        type: "select",
        options: ["horizontal", "vertical"],
        value: "horizontal",
      },
      disabled: {
        type: "boolean",
        value: false,
      },
      size: {
        type: "select",
        options: ["sm", "md", "lg"],
        value: "md",
        disabled: true,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="ToggleGroup"
      props={props}
      control={control}
    >
      <ToggleGroupDemo {...props} />
    </PlaygroundLayout>
  );
}
