import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@pswui/Accordion";

export const Default = () => {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Content for item 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          Content for item 2.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>
          Content for item 3.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const Collapsible = () => {
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
};

export const DefaultExpanded = () => {
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
};
