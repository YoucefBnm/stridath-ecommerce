import { ProductItemImageIndicProps } from "@/types";
import { motion } from "framer-motion";
import { memo } from "react";

const ProductImageIndic = memo(function ProductImageIndic(
  props: ProductItemImageIndicProps
) {
  const { handleMouseEnter, imageUrl, index, activeColor, layoutId } = props;
  return (
    <button
      aria-label="show color"
      role="button"
      className="relative p-2 flex items-center justify-center indic-size"
      onMouseEnter={() => handleMouseEnter(index)}
    >
      <div className=" bg-black z-10 bg-opacity-5 absolute inset-0 size-full pointer-events-none" />
      <img
        className="object-contain max-h-full"
        alt="athletic shoes"
        width={60}
        height={40}
        src={imageUrl}
      />
      {index === activeColor && (
        <motion.div
          layoutId={layoutId}
          className="absolute z-10 inset-0 size-full border border-black"
        />
      )}
    </button>
  );
});

export default ProductImageIndic;
