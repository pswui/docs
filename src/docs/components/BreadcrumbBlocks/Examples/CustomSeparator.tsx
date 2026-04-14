import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@pswui/Breadcrumb";

export const CustomSeparator = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Account</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>{">"}</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>{">"}</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Notifications</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
