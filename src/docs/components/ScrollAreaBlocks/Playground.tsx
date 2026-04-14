import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { ScrollAreaDemo, type ScrollAreaDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, ScrollAreaDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    ScrollAreaProps: {
      orientation: {
        type: "select",
        options: ["vertical", "horizontal", "both"],
        value: "vertical",
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="ScrollArea"
      props={props}
      control={control}
    >
      <ScrollAreaDemo {...props} />
    </PlaygroundLayout>
  );
}
