import { Select } from "@pswui/Select";

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
