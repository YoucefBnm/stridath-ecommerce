import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProductProps } from "@/types";
import { Slash } from "lucide-react";
import { FC } from "react";

interface ProductBreadcrumbProps {
  gender: ProductProps["gender"];
  sport: ProductProps["sport"];
  brand: ProductProps["brand"];
  featured: ProductProps["featured"];
  sale: ProductProps["sale"];
}
const ProductBreadcrumb: FC<ProductBreadcrumbProps> = ({
  gender,
  sport,
  brand,
  featured,
  sale,
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="!gap-0.5">
        <BreadcrumbItem className=" ">
          <BreadcrumbLink className="capitalize" href={`/shop/${gender}`}>
            {gender}
          </BreadcrumbLink>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="capitalize" href={`/shop/sport/${sport}`}>
            {sport}
          </BreadcrumbLink>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink className="capitalize" href={`/shop/brand/${brand}`}>
            {brand}
          </BreadcrumbLink>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
        </BreadcrumbItem>

        {featured && (
          <BreadcrumbItem>
            <BreadcrumbLink
              className="capitalize"
              href={`/shop/isfeatured/featured`}
            >
              featured
            </BreadcrumbLink>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
          </BreadcrumbItem>
        )}
        {sale && (
          <BreadcrumbItem>
            <BreadcrumbLink className="capitalize" href={`/shop/isonsale/sale`}>
              sale
            </BreadcrumbLink>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ProductBreadcrumb;
