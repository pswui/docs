import { Textarea } from "@pswui/Textarea";

export const Default = () => {
  return <Textarea placeholder="Type your message here." />;
};

export const WithError = () => {
  return <Textarea placeholder="Enter description" invalid="This field is required." />;
};

export const FullWidth = () => {
  return <Textarea full placeholder="Full width textarea" />;
};
