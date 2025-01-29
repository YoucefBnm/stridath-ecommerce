import { ProductProps } from "@/types";
import { FC } from "react";
import ProductImageIndic from "./ProductImageIndic";
import { cn } from "@/utils/shadcn";

interface ProductColorsProps {
  colors: ProductProps["images"];
  activeColor: number;
  handleMouseEnter: (index: number) => void;
  className?: string;
}
const ProductColors: FC<ProductColorsProps> = (props) => {
  const { colors, activeColor, handleMouseEnter, className } = props;

  return (
    <div
      id="product-item-colors"
      className={cn("flex flex-wrap gap-2", className)}
    >
      {colors.map((color, index) => (
        <ProductImageIndic
          layoutId="product-item-colors"
          key={color.id}
          imageUrl={color.imagesUrl[0]}
          index={index}
          handleMouseEnter={() => handleMouseEnter(index)}
          activeColor={activeColor}
        />
      ))}
    </div>
  );
};

export default ProductColors;
