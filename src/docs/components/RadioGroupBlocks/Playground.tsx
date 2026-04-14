import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { RadioGroupDemo, type RadioGroupDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, RadioGroupDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    RadioGroupProps: {
      orientation: {
        type: "select",
        options: ["vertical", "horizontal"],
        value: "vertical",
      },
      disabled: {
        type: "boolean",
        value: false,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="RadioGroup"
      props={props}
      control={control}
    >
      <RadioGroupDemo {...props} />
    </PlaygroundLayout>
  );
}
