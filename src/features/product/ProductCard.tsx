import { useSetActiveProduct } from "@/hooks/useSetActiveProduct";
import {
  ProductCardColorsProps,
  ProductCardDetailsProps,
  ProductCardImagesProps,
  ProductProps,
} from "@/types";
import { transformVariants } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FC, memo } from "react";
import ProductPrice from "./ProductPrice";

const ProductCardImages: FC<ProductCardImagesProps> = ({
  productImages,
  activeColor,
  activeImage,
  handleMouse,
}) => {
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
                className="absolute inset-0 size-full bg-white pointer-events-none"
                exit="hidden"
              >
                <img
                  alt={``}
                  className="card-image"
                  src={productImage.images[0]}
                />
              </motion.div>
              <motion.div
                key={1}
                variants={transformVariants()}
                className="absolute inset-0 size-full bg-white pointer-events-none"
                animate={
                  activeImage === 1 &&
                  productImage.id === productImages[activeColor].id
                    ? "visible"
                    : "hidden"
                }
                exit="hidden"
              >
                <img
                  alt={``}
                  className="card-image"
                  src={productImage.images[1]}
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ProductCardColors: FC<ProductCardColorsProps> = ({
  productColors,
  activeColor,
  setActiveColor,
  productId,
}) => {
  return (
    <div className="flex gap-2 px-4 my-2">
      {productColors.map((productColor, index) => (
        <button
          key={productColor}
          role="button"
          aria-label="show product color"
          className="appearance-none rounded-full w-4 h-4 border border-neutral-200 relative"
          style={{ backgroundColor: productColor }}
          onMouseEnter={() => setActiveColor(index)}
          title={productColor}
        >
          {index === activeColor && (
            <motion.div
              layoutId={productId}
              className="border-[1px] border-neutral-500 rounded-full w-5 h-5 absolute -top-[3px] -left-[3px]"
              transition={{ type: "spring", stiffness: 500, damping: 50 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

const ProductCardDetails: FC<ProductCardDetailsProps> = ({
  productName,
  productGender,
  productSport,
  productBrand,
}) => {
  return (
    <div className="flex flex-col px-4 gap-0.5 my-4 max-w-full items-start">
      <h4
        title={productName}
        className="font-heading w-full text-left text-sm uppercase text-ellipsis truncate"
      >
        {productName}
      </h4>
      <h5
        className="font-heading text-xs text-gray-600 capitalize text-ellipsis truncate"
        title={`${productGender} ${productSport} ${productBrand}`}
      >
        {productGender} {productSport} {productBrand}
      </h5>
    </div>
  );
};

type ProductCardProps = {
  product: ProductProps;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { activeColor, activeImage, handleColorChange, handleMouse } =
    useSetActiveProduct();

  return (
    <Link
      className="block"
      title={product.name}
      to=""
      aria-label={`navigate to ${product.name} page`}
    >
      <div className="overflow-hidden bg-white w-full aspect-square relative flex flex-col items-start justify-between gap-8">
        <div className="size-full rounded-sm bg-black bg-opacity-5 z-10 absolute inset-0 pointer-events-none" />
        <ProductCardImages
          productImages={product.colors}
          activeColor={activeColor}
          activeImage={activeImage}
          handleMouse={handleMouse}
        />
      </div>
      <ProductCardColors
        productId={product.id}
        productColors={product.availableColors}
        activeColor={activeColor}
        setActiveColor={handleColorChange}
      />
      <ProductCardDetails
        productName={product.name}
        productGender={product.gender}
        productSport={product.sport}
        productBrand={product.brand}
      />
      <ProductPrice
        price={product.price}
        salePrice={product.salePrice}
        isOnSale={product.isOnsale}
      />
    </Link>
  );
};

export default memo(ProductCard);
