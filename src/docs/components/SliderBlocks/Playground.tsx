import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { SliderDemo, type SliderDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, SliderDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    SliderProps: {
      size: {
        type: "select",
        options: ["sm", "md", "lg"],
        value: "md",
      },
      step: {
        type: "number",
        value: 5,
      },
      disabled: {
        type: "boolean",
        value: false,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Slider"
      props={props}
      control={control}
    >
      <SliderDemo {...props} />
    </PlaygroundLayout>
  );
}
