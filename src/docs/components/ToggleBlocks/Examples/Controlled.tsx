import { Toggle } from "@pswui/Toggle";
import { useState } from "react";

export const Controlled = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Toggle
        pressed={enabled}
        onPressedChange={setEnabled}
      >
        Notifications
      </Toggle>
      <span className="text-sm text-neutral-500 dark:text-neutral-400">
        {enabled ? "Enabled" : "Disabled"}
      </span>
    </div>
  );
};
