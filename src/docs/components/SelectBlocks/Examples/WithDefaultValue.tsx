import { Select } from "@pswui/Select";

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
