import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { AlertDemo, type AlertDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, AlertDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    AlertProps: {
      status: {
        type: "select",
        options: ["default", "success", "warning", "danger"],
        value: "default",
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Alert"
      props={props}
      control={control}
    >
      <AlertDemo {...props} />
    </PlaygroundLayout>
  );
}
