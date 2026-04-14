import { Select } from "@pswui/Select";

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
