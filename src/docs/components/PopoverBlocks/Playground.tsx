import { GITHUB_COMP_PREVIEW, LoadedCode } from "@/components/LoadedCode.tsx";
import { Story } from "@/components/Story";
import useMutable from "@/utils/useMutable.ts";
import { Button } from "@pswui/Button.tsx";
import { Checkbox } from "@pswui/Checkbox.tsx";
import { Label } from "@pswui/Label.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "@pswui/Popover.tsx";
import { TabContent, TabList, TabProvider, TabTrigger } from "@pswui/Tabs";
import { type ControlledPopoverDemoProps, PopoverDemo } from "./Preview.tsx";

export default function PopoverPlayground() {
  const [props, mutate] = useMutable<ControlledPopoverDemoProps>({
    PopoverProps: {
      opened: false,
    },
    PopoverContentProps: {
      direction: "col",
      position: "end",
      anchor: "middle",
      align: "middle",
      offset: "md",
      className: "",
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
          <LoadedCode from={GITHUB_COMP_PREVIEW("Popover")} />
        </TabContent>
      </TabProvider>
      <h3>Controls</h3>
      <div
        className={
          "rounded-lg p-4 border border-neutral-300 dark:border-neutral-700 flex flex-col justify-center items-start gap-2"
        }
      >
        <Label direction={"horizontal"}>
          <span>opened </span>
          <Checkbox
            checked={props.PopoverProps.opened}
            onChange={(e) => {
              const v = e.currentTarget.checked;
              mutate((p) => {
                p.PopoverProps.opened = v;
              });
            }}
          />
        </Label>
        <Label direction={"horizontal"}>
          <span>direction = </span>
          <Popover>
            <PopoverTrigger>
              <Button className={"gap-2"}>
                {props.PopoverContentProps.direction}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <title>Expand</title>
                  <path
                    fill="currentColor"
                    d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              anchor={"start"}
              align={"start"}
            >
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.direction = "col";
                  })
                }
              >
                Column
              </Button>
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.direction = "row";
                  })
                }
              >
                Row
              </Button>
            </PopoverContent>
          </Popover>
        </Label>
        <Label direction={"horizontal"}>
          <span>position = </span>
          <Popover>
            <PopoverTrigger>
              <Button className={"gap-2"}>
                {props.PopoverContentProps.position}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <title>Expand</title>
                  <path
                    fill="currentColor"
                    d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              anchor={"start"}
              align={"start"}
            >
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.position = "start";
                  })
                }
              >
                Start
              </Button>
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.position = "end";
                  })
                }
              >
                End
              </Button>
            </PopoverContent>
          </Popover>
        </Label>
        <Label direction={"horizontal"}>
          <span>anchor = </span>
          <Popover>
            <PopoverTrigger>
              <Button className={"gap-2"}>
                {props.PopoverContentProps.anchor}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <title>Expand</title>
                  <path
                    fill="currentColor"
                    d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              anchor={"start"}
              align={"start"}
            >
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.anchor = "start";
                  })
                }
              >
                Start
              </Button>
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.anchor = "middle";
                  })
                }
              >
                Middle
              </Button>
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.anchor = "end";
                  })
                }
              >
                End
              </Button>
            </PopoverContent>
          </Popover>
        </Label>
        <Label direction={"horizontal"}>
          <span>align = </span>
          <Popover>
            <PopoverTrigger>
              <Button className={"gap-2"}>
                {props.PopoverContentProps.align}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <title>Expand</title>
                  <path
                    fill="currentColor"
                    d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              anchor={"start"}
              align={"start"}
            >
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.align = "start";
                  })
                }
              >
                Start
              </Button>
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.align = "middle";
                  })
                }
              >
                Middle
              </Button>
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.align = "end";
                  })
                }
              >
                End
              </Button>
            </PopoverContent>
          </Popover>
        </Label>
        <Label direction={"horizontal"}>
          <span>offset = </span>
          <Popover>
            <PopoverTrigger>
              <Button className={"gap-2"}>
                {props.PopoverContentProps.offset}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <title>Expand</title>
                  <path
                    fill="currentColor"
                    d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              anchor={"start"}
              align={"start"}
            >
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.offset = "sm";
                  })
                }
              >
                Small
              </Button>
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.offset = "md";
                  })
                }
              >
                Middle
              </Button>
              <Button
                preset={"ghost"}
                onClick={() =>
                  mutate((p) => {
                    p.PopoverContentProps.offset = "lg";
                  })
                }
              >
                Large
              </Button>
            </PopoverContent>
          </Popover>
        </Label>
      </div>
    </>
  );
}
