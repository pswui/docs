import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@pswui/Pagination";

export const Disabled = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#previous"
            disabled
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#page-1"
            active
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#page-2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#page-3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#next" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
