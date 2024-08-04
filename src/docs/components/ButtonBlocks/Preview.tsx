import { Button } from "@pswui/Button";
/* remove */
export interface ControlledButtonDemoProps {
  ButtonProps: {
    preset?: "default" | "ghost" | "link" | "success" | "warning" | "danger";
    size?: "link" | "sm" | "md" | "lg" | "icon";
    border?: "none" | "solid" | "success" | "warning" | "danger";
    background?:
      | "default"
      | "ghost"
      | "success"
      | "warning"
      | "danger"
      | "transparent";
    decoration?: "none" | "link";
    disabled?: boolean;
  };
}
/* end */
/* replace */
export function ButtonDemo({ ButtonProps }: ControlledButtonDemoProps) {
  /* with
export function ButtonDemo() {
  */
  return (
    <Button
      preset={ButtonProps.preset}
      size={ButtonProps.size}
      border={ButtonProps.border}
      background={ButtonProps.background}
      decoration={ButtonProps.decoration}
      disabled={ButtonProps.disabled}
    >
      Button
    </Button>
  );
}
