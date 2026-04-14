import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@pswui/Table";

export const Default = () => {
  return (
    <Table>
      <TableCaption>Users table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Shinwoo Park</TableCell>
          <TableCell>shinwoo@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Doe</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell colSpan={2}>2 users</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
