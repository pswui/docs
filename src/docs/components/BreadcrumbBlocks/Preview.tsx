import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@pswui/Breadcrumb";

/* remove */
export interface BreadcrumbDemoPlaygroundProps {
  BreadcrumbSeparatorProps: {
    children?: string;
  };
}
/* end */
/* replace */
export function BreadcrumbDemo({
  BreadcrumbSeparatorProps,
}: BreadcrumbDemoPlaygroundProps) {
  /* with
export function BreadcrumbDemo() {
  */
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          {BreadcrumbSeparatorProps.children}
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
