import { Button } from "@pswui/Button";
import { Tooltip, TooltipContent } from "@pswui/Tooltip";

export function EarlyDelay() {
  return (
    <Tooltip position="bottom">
      <TooltipContent delay={"early"}>
        <p>Tooltip!</p>
      </TooltipContent>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
