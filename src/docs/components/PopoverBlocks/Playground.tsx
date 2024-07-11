import {
  GITHUB_COMP_PREVIEW,
  LoadedCode,
  type TEMPLATE,
} from "@/components/LoadedCode.tsx";
import { usePgProps } from "@/components/PgHooks.tsx";
import { PlaygroundControl } from "@/components/Playground.tsx";
import { Story } from "@/components/Story";
import { TabContent, TabList, TabProvider, TabTrigger } from "@pswui/Tabs";
import { type ControlledPopoverDemoProps, PopoverDemo } from "./Preview.tsx";

interface TemplateProps extends TEMPLATE, ControlledPopoverDemoProps {}

export default function PopoverPlayground() {
  const [props, control] = usePgProps<TemplateProps>({
    PopoverProps: {
      opened: {
        type: "boolean",
        value: false,
      },
    },
    PopoverContentProps: {
      direction: {
        type: "select",
        options: ["col", "row"],
        value: "col",
      },
      position: {
        type: "select",
        options: ["start", "end"],
        value: "end",
      },
      anchor: {
        type: "select",
        options: ["start", "middle", "end"],
        value: "middle",
      },
      align: {
        type: "select",
        options: ["start", "middle", "end"],
        value: "middle",
      },
      offset: {
        type: "select",
        options: ["sm", "md", "lg"],
        value: "md",
      },
      className: {
        type: "string",
        value: "",
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
            <PopoverDemo {...props} />
          </Story>
        </TabContent>
        <TabContent name="code">
          <LoadedCode
            from={GITHUB_COMP_PREVIEW("Popover")}
            template={props}
          />
        </TabContent>
      </TabProvider>
      <PlaygroundControl props={control} />
    </>
  );
}
