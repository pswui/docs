import { Button } from "@pswui/Button";
import { Tooltip, TooltipContent } from "@pswui/Tooltip";
import { useState } from "react";

export function Controlled() {
  const [opened, setOpened] = useState(false);

  return (
    <Tooltip position="top" controlled opened={opened}>
      <TooltipContent delay={"early"}>
        <p>Tooltip!</p>
      </TooltipContent>
      <Button onClick={() => setOpened((p) => !p)}>Open hover</Button>
    </Tooltip>
  );
}
