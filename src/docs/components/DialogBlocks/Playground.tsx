import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { DialogDemo, type DialogDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, DialogDemoPlaygroundProps {}

export default function DialogPlayground() {
  const [props, control] = usePgProps<TemplateProps>({
    DialogOverlayProps: {
      closeOnClick: {
        type: "boolean",
        value: false,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Dialog"
      control={control}
      props={props}
    >
      <DialogDemo {...props} />
    </PlaygroundLayout>
  );
}
