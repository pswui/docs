import { Button } from "@pswui/Button";
import { Tooltip, TooltipContent } from "@pswui/Tooltip";

export function Left() {
  return (
    <Tooltip position="left">
      <TooltipContent>
        <p>Tooltip!</p>
      </TooltipContent>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
