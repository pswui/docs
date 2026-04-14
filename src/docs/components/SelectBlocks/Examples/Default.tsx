import { Select } from "@pswui/Select";

const frameworkOptions = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

export const Default = () => {
  return (
    <Select
      options={frameworkOptions}
      placeholder="Choose a framework"
    />
  );
};
