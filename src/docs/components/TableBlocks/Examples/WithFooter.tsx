import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@pswui/Table";

export const WithFooter = () => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plan</TableHead>
            <TableHead>Seats</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Starter</TableCell>
            <TableCell>3</TableCell>
            <TableCell className="text-right">$19</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pro</TableCell>
            <TableCell>10</TableCell>
            <TableCell className="text-right">$79</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>13</TableCell>
            <TableCell className="text-right">$98</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
