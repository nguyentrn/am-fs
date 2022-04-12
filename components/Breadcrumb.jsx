import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import categories from "../constant/categories";

const createBreadcrumDepth = (route, query, model) =>
  route.split("/").map((href, id) => {
    if (id === 0) {
      return {
        label: "Trang chủ",
        href: `/${href}`,
      };
    }

    if (id === 1) {
      return {
        label: categories[href].label,
        href: `/${href}`,
      };
    }
    if (href.match(/\[|\]/gi)) {
      return {
        label: model,
        href: `/${route.split("/")[1]}/${query[href.replace(/\[|\]/gi, "")]}`,
      };
    }
  });

const Breadcrumb = (props) => {
  const { route, query, asPath } = useRouter();
  const breadcrumbItems = useMemo(() => {
    return createBreadcrumDepth(route, query, props.model);
  }, [route]);

  return (
    <ChakraBreadcrumb fontSize="sm" zIndex="0" color="white" py="3" {...props}>
      {breadcrumbItems.map((breadcrumbItem) => (
        <BreadcrumbItem
          key={breadcrumbItem.href}
          fontWeight={asPath === breadcrumbItem.href ? "800" : "400"}
          isCurrentPage={asPath === breadcrumbItem.href}
        >
          <Link href={breadcrumbItem.href} passHref>
            <BreadcrumbLink as="a" href={breadcrumbItem.href}>
              {breadcrumbItem.label}
            </BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      ))}
    </ChakraBreadcrumb>
  );
};

export default Breadcrumb;
