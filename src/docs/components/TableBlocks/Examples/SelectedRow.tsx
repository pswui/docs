import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@pswui/Table";

const members = [
  { name: "Shinwoo Park", role: "Owner", access: "Full" },
  { name: "Mina Kim", role: "Editor", access: "Limited" },
  { name: "Evan Lee", role: "Viewer", access: "Read only" },
];

export const SelectedRow = () => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableCaption>
          Use the selected state to highlight rows in context.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Access</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow
              key={member.name}
              data-state={member.name === "Mina Kim" ? "selected" : undefined}
            >
              <TableCell className="font-medium">{member.name}</TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>{member.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
