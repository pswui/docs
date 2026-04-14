import { Select } from "@pswui/Select";

export const Default = () => {
  return (
    <Select
      placeholder="Select an option"
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
      ]}
    />
  );
};

export const WithDefaultValue = () => {
  return (
    <Select
      defaultValue="2"
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
      ]}
    />
  );
};

export const FullWidth = () => {
  return (
    <Select
      full
      placeholder="Full width select"
      options={[
        { label: "Long option label 1", value: "1" },
        { label: "Long option label 2", value: "2" },
      ]}
    />
  );
};
