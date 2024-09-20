import { useSetActiveProduct } from "@/hooks/useSetActiveProduct";
import { transformVariants } from "@/utils/motion";

import {
  ProductCardProps,
  ProductColorsProps,
  ProductDetailsProps,
  ProductImagesProps,
} from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";
import { Badge } from "./ui/badge";
import ProductPrice from "./ProductPrice";

const ProductCardImages = memo(function (props: ProductImagesProps) {
  const { productImages, activeColor, activeImage, handleMouse } = props;

  const handleMouseEnter = () => handleMouse("enter");
  const handleMouseLeave = () => handleMouse("leave");

  return (
    <div className="size-full flex flex-1 justify-center items-start relative overflow-hidden">
      {productImages.map((productImage, index) => (
        <motion.div
          key={productImage.id}
          variants={transformVariants()}
          animate={index === activeColor ? "visible" : "hidden"}
          className="absolute inset-0 overflow-hidden"
          exit={"hidden"}
        >
          <div
            className="relative size-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence>
              <motion.div
                key={0}
                variants={transformVariants()}
                className="absolute inset-0 size-full bg-white bg-origin-content origin-bottom pointer-events-none"
                exit="hidden"
              >
                <img
                  width={500}
                  height={320}
                  loading="lazy"
                  alt="sport shoes"
                  className="card-image pointer-events-none"
                  src={productImage.imagesUrls[0]}
                />
              </motion.div>
              <motion.div
                key={1}
                variants={transformVariants()}
                animate={
                  activeImage === 1 &&
                  productImage.id === productImages[activeColor].id
                    ? "visible"
                    : "hidden"
                }
                // transition={{ ease: easeTransition, duration: 0.5 }}
                className="absolute inset-0 size-full bg-white pointer-events-none"
                exit="hidden"
              >
                <img
                  width={500}
                  height={320}
                  key={1}
                  loading="lazy"
                  alt="sport shoes"
                  className="card-image pointer-events-none"
                  src={productImage.imagesUrls[1]}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
});

const ProductCardColors = memo(function ProductCardColors(
  props: ProductColorsProps
) {
  const { productId, productColors, activeColor, setActiveColor } = props;

  return (
    <div className="flex gap-2 px-4 my-4">
      {productColors.map((productColor, index) => (
        <span
          key={productColor}
          role="button"
          aria-label="show product color"
          className=" appearance-none rounded-full w-3.5 h-3.5 border border-neutral-200 relative"
          style={{ backgroundColor: productColor }}
          onMouseEnter={() => setActiveColor(index)}
        >
          {index === activeColor && (
            <motion.div
              layoutId={productId}
              className="border-[1.5px] border-black rounded-full w-5 h-5 absolute -top-1 -left-1"
              transition={{ type: "spring", stiffness: 500, damping: 50 }}
            />
          )}
        </span>
      ))}
    </div>
  );
});

const ProductCardDetails = memo(function ProductCardDetails(
  props: ProductDetailsProps
) {
  const { productName, productGender, productCategory, productBrand } = props;

  return (
    <div
      className="flex flex-col px-4 gap-1 max-w-full items-start"
      aria-label={`navigate to ${productName} page`}
    >
      <h4
        className="font-heading w-full text-left text-sm uppercase text-ellipsis truncate"
        title={productName}
      >
        {productName}
      </h4>
      <h5
        className="text-xs text-neutral-500 capitalize text-ellipsis truncate"
        title={`${productGender} ${productCategory} ${productBrand}`}
      >
        {productGender} {productCategory} {productBrand}
      </h5>
    </div>
  );
});

const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const { activeColor, activeImage, handleColorChange, handleMouse } =
    useSetActiveProduct();

  return (
    <div
      title={product.name}
      className="flex rounded-md overflow-hidden flex-col relative"
    >
      <div className="overflow-hidden bg-white w-full aspect-[16/9] md:aspect-[16/12] relative flex flex-col items-start justify-between gap-8">
        <div className=" size-full bg-neutral-500 z-10 bg-opacity-5 absolute inset-0 pointer-events-none" />
        <div className="flex items-center h-5 ">
          {product.badge && (
            <Badge className="rounded-none py-px text-xs font-normal border-none">
              {product.badge}
            </Badge>
          )}
        </div>
        <ProductCardImages
          productImages={product.images}
          activeColor={activeColor}
          activeImage={activeImage}
          handleMouse={handleMouse}
        />
      </div>
      <div className="bg-neutral-500 pb-4 bg-opacity-5">
        <ProductCardColors
          productId={product.id}
          productColors={product.colors}
          activeColor={activeColor}
          setActiveColor={handleColorChange}
        />
        <ProductPrice price={product.price} discount={product.discount} />

        <ProductCardDetails
          productName={product.name}
          productGender={product.gender}
          productCategory={product.category}
          productBrand={product.brand}
        />
      </div>
    </div>
  );
});

export default ProductCard;
