import { Select } from "@pswui/Select";

const timezoneOptions = [
  { label: "Pacific Time", value: "pt" },
  { label: "Eastern Time", value: "et" },
  { label: "UTC (coming soon)", value: "utc", disabled: true },
];

export const DisabledOptions = () => {
  return (
    <Select
      defaultValue="et"
      options={timezoneOptions}
      placeholder="Choose a timezone"
    />
  );
};
