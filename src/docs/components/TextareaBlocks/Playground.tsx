import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { TextareaDemo, type TextareaDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, TextareaDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    TextareaProps: {
      full: {
        type: "boolean",
        value: false,
      },
      invalid: {
        type: "string",
        value: "Please enter at least 20 characters.",
        disabled: true,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Textarea"
      props={props}
      control={control}
    >
      <TextareaDemo {...props} />
    </PlaygroundLayout>
  );
}
