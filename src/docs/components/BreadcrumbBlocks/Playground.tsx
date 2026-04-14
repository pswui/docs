import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { BreadcrumbDemo, type BreadcrumbDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, BreadcrumbDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    BreadcrumbSeparatorProps: {
      children: {
        type: "string",
        value: ">",
        disabled: true,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Breadcrumb"
      props={props}
      control={control}
    >
      <BreadcrumbDemo {...props} />
    </PlaygroundLayout>
  );
}
