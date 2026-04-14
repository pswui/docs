import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { BadgeDemo, type BadgeDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, BadgeDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    BadgeProps: {
      size: {
        type: "select",
        options: ["sm", "md"],
        value: "md",
      },
      status: {
        type: "select",
        options: ["default", "success", "warning", "danger"],
        value: "default",
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Badge"
      props={props}
      control={control}
    >
      <BadgeDemo {...props} />
    </PlaygroundLayout>
  );
}
