import { Button } from "@pswui/Button";
import { Tooltip, TooltipContent } from "@pswui/Tooltip";

export function LateDelay() {
  return (
    <Tooltip position="bottom">
      <TooltipContent delay={"late"}>
        <p>Tooltip!</p>
      </TooltipContent>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
