import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@pswui/Accordion";

export const Default = () => {
  return (
    <Accordion className="w-full max-w-xl">
      <AccordionItem value="performance">
        <AccordionTrigger>Is Accordion keyboard accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. Each trigger is a real button with the correct expanded and
          region relationships wired in automatically.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="controlled">
        <AccordionTrigger>Can I control the open item?</AccordionTrigger>
        <AccordionContent>
          Use the <code>value</code> and <code>onValueChange</code> props when
          you need to control the expanded item from state.
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
};
