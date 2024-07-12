import {
  GITHUB_COMP_PREVIEW,
  LoadedCode,
  type TEMPLATE,
} from "@/components/LoadedCode";
import { usePgProps } from "@/components/PgHooks";
import { PlaygroundControl } from "@/components/Playground";
import { Story } from "@/components/Story";
import { TabContent, TabList, TabProvider, TabTrigger } from "@pswui/Tabs";
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
    <>
      <TabProvider defaultName="preview">
        <TabList>
          <TabTrigger name="preview">Preview</TabTrigger>
          <TabTrigger name="code">Code</TabTrigger>
        </TabList>
        <TabContent name="preview">
          <Story layout="centered">
            <ButtonDemo {...props} />
          </Story>
        </TabContent>
        <TabContent name="code">
          <LoadedCode
            from={GITHUB_COMP_PREVIEW("Button")}
            template={props}
          />
        </TabContent>
      </TabProvider>
      <PlaygroundControl props={control} />
    </>
  );
}
