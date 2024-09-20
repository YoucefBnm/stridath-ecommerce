import { ProductPriceProps } from "@/types";
import { formatPrice, setPrice } from "@/utils/price.utils";
import { memo } from "react";
import { Badge } from "./ui/badge";

const ProductPrice = memo(function ProductCardPrice(props: ProductPriceProps) {
  const { price, discount } = props;
  return (
    <div className="flex my-2 px-4 text-base justify-between items-end">
      {discount ? (
        <>
          <div className="flex text-xs md:text-base items-center gap-2 w-full">
            <p>${setPrice(price, discount)}</p>
            <p className="text-neutral-500 line-through">
              ${setPrice(price, null)}
            </p>
            <Badge
              className="rounded-none px-1 py-px text-xs font-heading border-none"
              variant={"destructive"}
            >
              -{discount}%
            </Badge>
          </div>
        </>
      ) : (
        <p>${formatPrice(price)}</p>
      )}
    </div>
  );
});

export default ProductPrice;
