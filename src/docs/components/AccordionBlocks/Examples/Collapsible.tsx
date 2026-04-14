import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@pswui/Accordion";

export function Collapsible() {
  return (
    <Accordion collapsible>
      <AccordionItem value="open">
        <AccordionTrigger>Click to toggle</AccordionTrigger>
        <AccordionContent>
          This content can be collapsed by clicking the trigger again.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
