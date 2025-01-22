import { Badge } from "@/components/ui/badge";
import { ProductPriceProps } from "@/types";
import { formatPrice } from "@/utils/price.utils";

const ProductPrice = (props: ProductPriceProps) => {
  const discount = props.price - props.salePrice;
  const saving = ((discount * 100) / props.price).toFixed(0);

  return (
    <div className="px-4 flex gap-2 items-center text-sm font-normal">
      {props.isOnSale ? (
        <>
          <p>${formatPrice(props.salePrice)}</p>
          <p className="text-gray-500 line-through">
            ${formatPrice(props.price)}
          </p>
          <Badge className="rounded-sm text-xs px-1">{saving}% off</Badge>
        </>
      ) : (
        <p>${formatPrice(props.price)}</p>
      )}
    </div>
  );
};

export default ProductPrice;
