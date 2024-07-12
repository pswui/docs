import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { CheckboxDemo, type CheckboxDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, CheckboxDemoPlaygroundProps {}

export default function CheckboxPlayground() {
  const [props, control] = usePgProps<TemplateProps>({
    CheckboxProps: {
      size: {
        type: "select",
        options: ["base", "md", "lg"],
        value: "md",
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Checkbox"
      props={props}
      control={control}
    >
      <CheckboxDemo {...props} />
    </PlaygroundLayout>
  );
}
