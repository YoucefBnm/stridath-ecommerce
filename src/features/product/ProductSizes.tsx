import { ProductColorsProps, ProductProps } from "@/types";
import { cn } from "@/utils/shadcn";
import { motion } from "framer-motion";
import { FC } from "react";

type ProductSizesProps = {
  allSizes: ProductProps["sizes"];
  activeItemSizes: ProductColorsProps["sizes"];
  selectedSize: string | undefined;
  setSelectedSize: (size: string) => void;
  className?: string;
};
const ProductSizes: FC<ProductSizesProps> = (props) => {
  const {
    allSizes,
    activeItemSizes,
    selectedSize,
    setSelectedSize,
    className,
  } = props;
  const getActiveItemSizes = activeItemSizes.map((item) => item.size);

  const availableSizes = allSizes.map((size) => ({
    value: size,
    status: getActiveItemSizes.includes(size) ? "active" : "disabled",
  }));
  return (
    <div
      className={cn("flex gap-2 flex-wrap", className)}
      id="product-item-sizes"
    >
      {availableSizes.map((item) => (
        <button
          key={item.value}
          role="button"
          disabled={item.status === "disabled"}
          aria-label="select size"
          className={`
                ${
                  item.value === selectedSize
                    ? "text-gray-800"
                    : "text-gray-500"
                }
                ${
                  item.status === "disabled"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
                bg-gray-200 indic-size text-sm  relative
              `}
          title={`${item.status === "disabled" ? "not aivalable" : "enabled"} ${
            item.value
          }`}
          onClick={() => setSelectedSize(item.value)}
        >
          <span>{item.value}</span>
          {item.value === selectedSize && item.status === "active" && (
            <motion.div
              className="absolute size-full inset-0 border border-black "
              layoutId="product-item-sizes"
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProductSizes;
