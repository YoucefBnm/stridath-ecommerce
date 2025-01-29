import { ProductProps } from "@/types";
import { cn } from "@/utils/shadcn";
import { FC } from "react";

type ProductAboutProps = {
  details: ProductProps["details"];
  className?: string;
};
const ProductAbout: FC<ProductAboutProps> = ({ details, className }) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {details.map((detail) => (
        <p key={detail}>{detail}</p>
      ))}
    </div>
  );
};

export default ProductAbout;
