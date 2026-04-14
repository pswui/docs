import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { PaginationDemo, type PaginationDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, PaginationDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    PaginationPreviousProps: {
      disabled: {
        type: "boolean",
        value: false,
      },
    },
    PaginationLinkProps: {
      active: {
        type: "boolean",
        value: true,
      },
    },
    PaginationNextProps: {
      disabled: {
        type: "boolean",
        value: false,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Pagination"
      props={props}
      control={control}
    >
      <PaginationDemo {...props} />
    </PlaygroundLayout>
  );
}
