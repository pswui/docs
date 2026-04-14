import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { TableDemo, type TableDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, TableDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    TableCaptionProps: {
      children: {
        type: "string",
        value: "Recent invoice activity.",
      },
    },
    TableFooterProps: {
      hidden: {
        type: "boolean",
        value: false,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Table"
      props={props}
      control={control}
    >
      <TableDemo {...props} />
    </PlaygroundLayout>
  );
}
