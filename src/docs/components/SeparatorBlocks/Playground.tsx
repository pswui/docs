import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { SeparatorDemo, type SeparatorDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, SeparatorDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    SeparatorProps: {
      orientation: {
        type: "select",
        options: ["horizontal", "vertical"],
        value: "horizontal",
      },
      decorative: {
        type: "boolean",
        value: false,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Separator"
      props={props}
      control={control}
    >
      <SeparatorDemo {...props} />
    </PlaygroundLayout>
  );
}
