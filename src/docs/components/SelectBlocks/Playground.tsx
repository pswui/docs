import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { SelectDemo, type SelectDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, SelectDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    SelectProps: {
      full: {
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
      compName="Select"
      props={props}
      control={control}
    >
      <SelectDemo {...props} />
    </PlaygroundLayout>
  );
}
