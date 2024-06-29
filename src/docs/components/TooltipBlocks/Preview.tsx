import { Button } from "@pswui/Button";
import { Tooltip, TooltipContent } from "@pswui/Tooltip";

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipContent>
        <p>Tooltip!</p>
      </TooltipContent>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
