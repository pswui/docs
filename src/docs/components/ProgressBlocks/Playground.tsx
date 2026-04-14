import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { ProgressDemo, type ProgressDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, ProgressDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    ProgressProps: {
      size: {
        type: "select",
        options: ["sm", "md", "lg"],
        value: "md",
      },
      max: {
        type: "number",
        value: 100,
        disabled: true,
      },
      value: {
        type: "number",
        value: 64,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Progress"
      props={props}
      control={control}
    >
      <ProgressDemo {...props} />
    </PlaygroundLayout>
  );
}
