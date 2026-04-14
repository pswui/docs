import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { ToggleDemo, type ToggleDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, ToggleDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    ToggleProps: {
      size: {
        type: "select",
        options: ["sm", "md", "lg"],
        value: "md",
      },
      defaultPressed: {
        type: "boolean",
        value: false,
      },
      disabled: {
        type: "boolean",
        value: false,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Toggle"
      props={props}
      control={control}
    >
      <ToggleDemo {...props} />
    </PlaygroundLayout>
  );
}
