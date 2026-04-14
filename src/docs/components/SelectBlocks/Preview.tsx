import { Select } from "@pswui/Select";

export function SelectDemo() {
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
}

export function Default() {
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
}

export function WithDefaultValue() {
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
}

export function FullWidth() {
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
}
