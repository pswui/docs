import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@pswui/Accordion";

export const DisabledItem = () => {
  return (
    <Accordion
      defaultValue="active"
      className="w-full max-w-xl"
    >
      <AccordionItem value="active">
        <AccordionTrigger>Available section</AccordionTrigger>
        <AccordionContent>
          This item can be expanded and collapsed normally.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="disabled"
        disabled
      >
        <AccordionTrigger>Locked section</AccordionTrigger>
        <AccordionContent>
          Disabled items keep their content hidden and ignore interaction.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
