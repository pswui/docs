import { ToggleGroup, ToggleGroupItem } from "@pswui/ToggleGroup";

/* remove */
export interface ToggleGroupDemoPlaygroundProps {
  ToggleGroupProps: {
    type?: "single" | "multiple";
    orientation?: "horizontal" | "vertical";
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
  };
}
/* end */
/* replace */
export function ToggleGroupDemo({
  ToggleGroupProps,
}: ToggleGroupDemoPlaygroundProps) {
  /* with
export function ToggleGroupDemo() {
  */
  const type = ToggleGroupProps.type ?? "single";
  const commonProps = {
    "aria-label": "Text alignment",
    disabled: ToggleGroupProps.disabled,
    orientation: ToggleGroupProps.orientation,
    size: ToggleGroupProps.size,
  };

  return type === "multiple" ? (
    <ToggleGroup
      key={`${type}-${ToggleGroupProps.orientation}-${ToggleGroupProps.disabled}-${ToggleGroupProps.size}`}
      type="multiple"
      defaultValue={["center"]}
      {...commonProps}
    >
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  ) : (
    <ToggleGroup
      key={`${type}-${ToggleGroupProps.orientation}-${ToggleGroupProps.disabled}-${ToggleGroupProps.size}`}
      type="single"
      defaultValue="center"
      {...commonProps}
    >
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  );
}
