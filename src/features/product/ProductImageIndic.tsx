import { motion } from "framer-motion";
import { FC } from "react";

interface ProductItemImageIndicProps {
  layoutId: string;
  imageUrl: string;
  index: number;
  activeColor: number;
  handleMouseEnter: (index: number) => void;
}
const ProductImageIndic: FC<ProductItemImageIndicProps> = (props) => {
  const { handleMouseEnter, imageUrl, index, activeColor, layoutId } = props;
  return (
    <button
      aria-label="show color"
      role="button"
      className="relative p-2 flex items-center justify-center indic-size"
      onMouseEnter={() => handleMouseEnter(index)}
    >
      <div className="bg-gray-500 z-10 bg-opacity-5 absolute inset-0 size-full pointer-events-none" />
      <img
        className="object-contain max-h-full"
        alt="athletic shoes"
        src={imageUrl}
      />
      {index === activeColor && (
        <motion.div
          layoutId={layoutId}
          className="absolute z-10 inset-0 size-full border border-gray-500"
        />
      )}
    </button>
  );
};

export default ProductImageIndic;
