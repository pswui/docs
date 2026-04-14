import { Select } from "@pswui/Select";

const languageOptions = [
  { label: "English", value: "en" },
  { label: "Korean", value: "ko" },
  { label: "Japanese", value: "ja" },
];

export const WithDefaultValue = () => {
  return (
    <Select
      defaultValue="ko"
      options={languageOptions}
    />
  );
};
