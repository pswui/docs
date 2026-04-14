import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { CardDemo, type CardDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, CardDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    CardDescriptionProps: {
      children: {
        type: "string",
        value: "A compact card layout for simple promotional content.",
      },
    },
    ButtonProps: {
      preset: {
        type: "select",
        options: ["default", "ghost", "link", "success", "warning", "danger"],
        value: "default",
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Card"
      props={props}
      control={control}
    >
      <CardDemo {...props} />
    </PlaygroundLayout>
  );
}
