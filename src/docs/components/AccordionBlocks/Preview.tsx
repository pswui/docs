import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@pswui/Accordion";

/* remove */
export interface AccordionDemoPlaygroundProps {
  AccordionProps: {
    collapsible?: boolean;
  };
  AccordionItemProps: {
    disabled?: boolean;
  };
}
/* end */
/* replace */
export function AccordionDemo({
  AccordionProps,
  AccordionItemProps,
}: AccordionDemoPlaygroundProps) {
  /* with
export function AccordionDemo() {
  */
  return (
    <Accordion
      collapsible={AccordionProps.collapsible}
      className="w-full max-w-xl"
    >
      <AccordionItem value="performance">
        <AccordionTrigger>Is Accordion keyboard accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. Each trigger is a real button with the correct expanded and
          region relationships wired in automatically.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="disabled"
        disabled={AccordionItemProps.disabled}
      >
        <AccordionTrigger>Can I disable a section?</AccordionTrigger>
        <AccordionContent>
          Disabled items keep their content hidden and ignore user interaction.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="styling">
        <AccordionTrigger>Does it work with custom styling?</AccordionTrigger>
        <AccordionContent>
          The root and each subcomponent accept standard HTML props, so you can
          extend the layout with your own classes when needed.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
