import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@pswui/Accordion";

export const Collapsible = () => {
  return (
    <Accordion
      collapsible
      defaultValue="delivery"
      className="w-full max-w-xl"
    >
      <AccordionItem value="delivery">
        <AccordionTrigger>Delivery schedule</AccordionTrigger>
        <AccordionContent>
          Orders placed before 2pm ship the same business day. Click the trigger
          again to collapse this item.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
