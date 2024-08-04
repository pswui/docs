import { Button } from "@pswui/Button";
import { Checkbox } from "@pswui/Checkbox";
import { Input } from "@pswui/Input";
import { Label } from "@pswui/Label";
import { Popover, PopoverContent, PopoverTrigger } from "@pswui/Popover";
import { TabContent, TabList, TabProvider, TabTrigger } from "@pswui/Tabs";
import type { ReactNode } from "react";
import { GITHUB_COMP_PREVIEW, LoadedCode, type TEMPLATE } from "./LoadedCode";
import { Story } from "./Story";

export type Template = Record<
  string,
  Record<
    string,
    | { type: "boolean"; value: boolean; disabled?: boolean }
    | { type: "select"; options: string[]; value: string; disabled?: boolean }
    | { type: "string"; value: string; disabled?: boolean }
  >
>;

export type ControlTemplate = Record<
  string,
  Record<
    string,
    | {
        type: "boolean";
        value: boolean;
        disabled?: boolean;
        onChange: (value: boolean) => void;
        onToggle: (v: boolean) => void;
      }
    | {
        type: "select";
        options: string[];
        value: string;
        disabled?: boolean;
        onChange: (value: string) => void;
        onToggle: (v: boolean) => void;
      }
    | {
        type: "string";
        value: string;
        disabled?: boolean;
        onChange: (value: string) => void;
        onToggle: (v: boolean) => void;
      }
    | {
        type: "number";
        value: number;
        disabled?: boolean;
        onChange: (value: number) => void;
        onToggle: (v: boolean) => void;
      }
  >
>;

export function PlaygroundControl<T extends ControlTemplate>(props: {
  props: T;
}): ReactNode {
  return (
    <>
      <h3>Controls</h3>
      <div
        className={
          "rounded-lg p-4 border border-neutral-300 dark:border-neutral-700 flex flex-col justify-center items-start gap-12"
        }
      >
        {Object.entries(props.props).map(([componentName, propEntries]) => (
          <div
            key={componentName}
            className="w-full flex flex-col justify-center items-start gap-4"
          >
            <span className="font-thin opacity-50 w-full border-b border-b-current pb-2">
              &lt;{componentName.slice(0, componentName.length - 5)}&gt;
            </span>
            {Object.entries(propEntries).map(([propName, propMeta]) => (
              <div
                key={componentName + propName}
                className="flex flex-row justify-between items-center w-full gap-2"
              >
                <Label
                  direction="horizontal"
                  className="flex flex-row items-center gap-2"
                >
                  <Checkbox
                    onChange={(e) => {
                      propMeta.onToggle(!e.currentTarget.checked);
                    }}
                    checked={!propMeta.disabled}
                  />
                  {propMeta.disabled ? (
                    <s className="opacity-50">{propName}</s>
                  ) : (
                    <span>{propName}</span>
                  )}
                </Label>
                {propMeta.type === "boolean" ? (
                  <Checkbox
                    checked={propMeta.value}
                    onChange={(e) => propMeta.onChange(e.currentTarget.checked)}
                  />
                ) : propMeta.type === "string" ? (
                  <Input
                    type="text"
                    value={propMeta.value}
                    onChange={(e) => propMeta.onChange(e.currentTarget.value)}
                  />
                ) : propMeta.type === "select" ? (
                  <Popover>
                    <PopoverTrigger>
                      <Button preset="default">{propMeta.value}</Button>
                    </PopoverTrigger>
                    <PopoverContent className="min-w-36">
                      {propMeta.options.map((value) => (
                        <Button
                          preset="ghost"
                          key={value}
                          onClick={() => propMeta.onChange(value)}
                        >
                          {value}
                        </Button>
                      ))}
                    </PopoverContent>
                  </Popover>
                ) : propMeta.type === "number" ? (
                  <Input
                    type="number"
                    value={propMeta.value}
                    onChange={(e) =>
                      propMeta.onChange(e.currentTarget.valueAsNumber)
                    }
                  />
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export function PlaygroundLayout<T extends ControlTemplate>({
  children,
  compName,
  props,
  control,
}: {
  children: ReactNode;
  compName: string;
  props: TEMPLATE;
  control: T;
}) {
  return (
    <>
      <TabProvider defaultName="preview">
        <TabList>
          <TabTrigger name="preview">Preview</TabTrigger>
          <TabTrigger name="code">Code</TabTrigger>
        </TabList>
        <TabContent name="preview">
          <Story layout="centered">{children}</Story>
        </TabContent>
        <TabContent name="code">
          <LoadedCode
            from={GITHUB_COMP_PREVIEW(compName)}
            template={props}
          />
        </TabContent>
      </TabProvider>
      <PlaygroundControl props={control} />
    </>
  );
}
