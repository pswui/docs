import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@pswui/Pagination";

/* remove */
export interface PaginationDemoPlaygroundProps {
  PaginationPreviousProps: {
    disabled?: boolean;
  };
  PaginationLinkProps: {
    active?: boolean;
  };
  PaginationNextProps: {
    disabled?: boolean;
  };
}
/* end */
/* replace */
export function PaginationDemo({
  PaginationPreviousProps,
  PaginationLinkProps,
  PaginationNextProps,
}: PaginationDemoPlaygroundProps) {
  /* with
export function PaginationDemo() {
  */
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#previous"
            disabled={PaginationPreviousProps.disabled}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#page-1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#page-2"
            active={PaginationLinkProps.active}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#page-3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#page-12">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#next"
            disabled={PaginationNextProps.disabled}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
