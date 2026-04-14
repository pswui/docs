import { Select } from "@pswui/Select";

const frameworkOptions = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];

/* remove */
export interface SelectDemoPlaygroundProps {
  SelectProps: {
    full?: boolean;
    disabled?: boolean;
  };
}
/* end */
/* replace */
export function SelectDemo({ SelectProps }: SelectDemoPlaygroundProps) {
  /* with
export function SelectDemo() {
  */
  return (
    <div className="w-full max-w-sm">
      <Select
        full={SelectProps.full}
        disabled={SelectProps.disabled}
        options={frameworkOptions}
        placeholder="Choose a framework"
      />
    </div>
  );
}
