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

/* remove */
export interface TableDemoPlaygroundProps {
  TableCaptionProps: {
    children?: string;
  };
  TableFooterProps: {
    hidden?: boolean;
  };
}
/* end */
/* replace */
export function TableDemo({
  TableCaptionProps,
  TableFooterProps,
}: TableDemoPlaygroundProps) {
  /* with
export function TableDemo() {
  */
  return (
    <div className="w-full max-w-2xl overflow-x-auto">
      <Table>
        <TableCaption>{TableCaptionProps.children}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>Bank transfer</TableCell>
            <TableCell className="text-right">$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV003</TableCell>
            <TableCell>Processing</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell className="text-right">$350.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter hidden={TableFooterProps.hidden}>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
