import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@pswui/Accordion";

export function DefaultExpanded() {
  return (
    <Accordion defaultValue="item-2">
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1 (collapsed)</AccordionTrigger>
        <AccordionContent>Content for item 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2 (expanded)</AccordionTrigger>
        <AccordionContent>Content for item 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
