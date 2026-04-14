import { Toggle } from "@pswui/Toggle";

/* remove */
export interface ToggleDemoPlaygroundProps {
  ToggleProps: {
    size?: "sm" | "md" | "lg";
    defaultPressed?: boolean;
    disabled?: boolean;
  };
}
/* end */
/* replace */
export function ToggleDemo({ ToggleProps }: ToggleDemoPlaygroundProps) {
  /* with
export function ToggleDemo() {
  */
  return (
    <Toggle
      key={`${ToggleProps.size}-${ToggleProps.defaultPressed}-${ToggleProps.disabled}`}
      size={ToggleProps.size}
      defaultPressed={ToggleProps.defaultPressed}
      disabled={ToggleProps.disabled}
      aria-label="Toggle notifications"
    >
      Notifications
    </Toggle>
  );
}
