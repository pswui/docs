import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { ButtonDemo, type ControlledButtonDemoProps } from "./Preview";

interface TemplateProps extends TEMPLATE, ControlledButtonDemoProps {}

export default function ButtonPlayground() {
  const [props, control] = usePgProps<TemplateProps>({
    ButtonProps: {
      preset: {
        type: "select",
        options: ["default", "ghost", "link", "success", "warning", "danger"],
        value: "default",
      },
      size: {
        type: "select",
        options: ["link", "sm", "md", "lg", "icon"],
        value: "md",
        disabled: true,
      },
      border: {
        type: "select",
        options: ["none", "solid", "success", "warning", "danger"],
        value: "solid",
        disabled: true,
      },
      background: {
        type: "select",
        options: [
          "default",
          "ghost",
          "success",
          "warning",
          "danger",
          "transparent",
        ],
        value: "default",
        disabled: true,
      },
      decoration: {
        type: "select",
        options: ["none", "link"],
        value: "none",
        disabled: true,
      },
      disabled: {
        type: "boolean",
        value: false,
        disabled: true,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Button"
      props={props}
      control={control}
    >
      <ButtonDemo {...props} />
    </PlaygroundLayout>
  );
}
