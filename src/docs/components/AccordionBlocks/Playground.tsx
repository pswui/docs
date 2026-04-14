import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { AccordionDemo, type AccordionDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, AccordionDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    AccordionProps: {
      collapsible: {
        type: "boolean",
        value: false,
      },
    },
    AccordionItemProps: {
      disabled: {
        type: "boolean",
        value: false,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Accordion"
      props={props}
      control={control}
    >
      <AccordionDemo {...props} />
    </PlaygroundLayout>
  );
}
