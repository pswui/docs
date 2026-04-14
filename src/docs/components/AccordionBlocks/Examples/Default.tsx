import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@pswui/Accordion";

export function Default() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content for item 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content for item 2.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>Content for item 3.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
