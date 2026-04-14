import type { TEMPLATE } from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundLayout } from "@/components/Playground";
import { AvatarDemo, type AvatarDemoPlaygroundProps } from "./Preview";

interface TemplateProps extends TEMPLATE, AvatarDemoPlaygroundProps {}

export default function Playground() {
  const [props, control] = usePgProps<TemplateProps>({
    AvatarProps: {
      size: {
        type: "select",
        options: ["sm", "md", "lg"],
        value: "md",
      },
      shape: {
        type: "select",
        options: ["circle", "square"],
        value: "circle",
      },
      src: {
        type: "string",
        value: "https://avatars.githubusercontent.com/u/583231?v=4",
        disabled: true,
      },
    },
  });

  return (
    <PlaygroundLayout
      compName="Avatar"
      props={props}
      control={control}
    >
      <AvatarDemo {...props} />
    </PlaygroundLayout>
  );
}
