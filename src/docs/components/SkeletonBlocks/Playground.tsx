import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { SkeletonDemo, type SkeletonDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, SkeletonDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    SkeletonProps: {
      shape: {
        type: "select",
        options: ["rectangle", "circle", "text"],
        value: "rectangle",
      },
      size: {
        type: "select",
        options: ["sm", "md", "lg", "icon"],
        value: "md",
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Skeleton"
      props={props}
      control={control}
    >
      <SkeletonDemo {...props} />
    </PlaygroundLayout>
  );
}
