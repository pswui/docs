import { Select } from "@pswui/Select";

const roleOptions = [
  { label: "Viewer", value: "viewer" },
  { label: "Editor", value: "editor" },
  { label: "Administrator", value: "admin" },
];

export const FullWidth = () => {
  return (
    <div className="w-full max-w-sm">
      <Select
        full
        options={roleOptions}
        placeholder="Assign a role"
      />
    </div>
  );
};
