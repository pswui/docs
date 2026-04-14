import { Separator } from "@pswui/Separator";

/* remove */
export interface SeparatorDemoPlaygroundProps {
  SeparatorProps: {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
  };
}
/* end */
/* replace */
export function SeparatorDemo({
  SeparatorProps,
}: SeparatorDemoPlaygroundProps) {
  /* with
export function SeparatorDemo() {
  */
  const orientation = SeparatorProps.orientation ?? "horizontal";

  return orientation === "vertical" ? (
    <div className="flex h-14 items-center gap-4 text-sm">
      <span>Overview</span>
      <Separator
        orientation={SeparatorProps.orientation}
        decorative={SeparatorProps.decorative}
      />
      <span>Analytics</span>
      <span>Settings</span>
    </div>
  ) : (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Account</h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Manage your profile, security, and notification preferences.
        </p>
      </div>
      <Separator
        orientation={SeparatorProps.orientation}
        decorative={SeparatorProps.decorative}
      />
      <div className="space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
        <p>Profile</p>
        <p>Billing</p>
        <p>API keys</p>
      </div>
    </div>
  );
}
