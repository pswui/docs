import { Separator } from "@pswui/Separator";

export const Default = () => {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Account</h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Manage your profile, security, and notification preferences.
        </p>
      </div>
      <Separator />
      <div className="space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
        <p>Profile</p>
        <p>Billing</p>
        <p>API keys</p>
      </div>
    </div>
  );
};
