import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { FormDemo, type FormDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, FormDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    FormItemProps: {
      invalid: {
        type: "string",
        value: "Please enter a valid email address.",
        disabled: true,
      },
    },
    FormHelperProps: {
      hiddenOnInvalid: {
        type: "boolean",
        value: true,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Form"
      props={props}
      control={control}
    >
      <FormDemo {...props} />
    </PlaygroundLayout>
  );
}
