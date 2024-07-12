import { Button } from "@pswui/Button";
import { Checkbox } from "@pswui/Checkbox";
import { Input } from "@pswui/Input";
import { Label } from "@pswui/Label";
import { Popover, PopoverContent, PopoverTrigger } from "@pswui/Popover";
import type { ReactNode } from "react";

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
            <b>&lt;{componentName.slice(0, componentName.length - 5)}&gt;</b>
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
                      propMeta.onToggle(e.currentTarget.checked);
                    }}
                    checked={propMeta.disabled}
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
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
