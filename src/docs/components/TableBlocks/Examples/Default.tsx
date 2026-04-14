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

const invoices = [
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit card",
    amount: "$250.00",
  },
  {
    invoice: "INV002",
    status: "Pending",
    method: "Bank transfer",
    amount: "$150.00",
  },
  {
    invoice: "INV003",
    status: "Processing",
    method: "PayPal",
    amount: "$350.00",
  },
];

export const Default = () => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableCaption>Recent invoice activity.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
