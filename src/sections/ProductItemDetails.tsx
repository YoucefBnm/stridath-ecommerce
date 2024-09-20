import ProductImageIndic from "@/components/ProductImageIndic";
import ProductPrice from "@/components/ProductPrice";
import Spinner from "@/components/Spinner";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { setCartItemsStart } from "@/store/cart/cart.action";
import { selectCartItems, selectLoading } from "@/store/cart/cart.selector";
import {
  ProductItemColorsProps,
  ProductItemDescriptionProps,
  ProductItemDetailsProps,
  ProductItemSegmentsProps,
  ProductItemSizesProps,
} from "@/types";
import { motion } from "framer-motion";
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductItemSegments = memo(function ProductItemSegments(
  props: ProductItemSegmentsProps
) {
  const { gender, category, brand, badge } = props;
  return (
    <div>
      <Breadcrumb className="capitalize">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/shop/${gender}`}>{gender}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/shop/category/${category}`}>
              {category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/shop/brand/${brand}`}>
              {brand}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {badge && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/shop/badge/${badge}`}>
                  {badge}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
});

const ProductItemColors = memo(function ProductItemColors(
  props: ProductItemColorsProps
) {
  const { colors, activeColor, handleMouseEnter } = props;

  return (
    <div className="flex flex-wrap gap-1" id="product-item-colors">
      {colors.map((color, index) => (
        <ProductImageIndic
          layoutId="product-item-colors"
          key={color.id}
          imageUrl={color.imagesUrls[0]}
          index={index}
          handleMouseEnter={() => handleMouseEnter(index)}
          activeColor={activeColor}
        />
      ))}
    </div>
  );
});

const ProductItemSizes = memo(function ProductItemSizes(
  props: ProductItemSizesProps
) {
  const { sizes, selectedSize, setSelectedSize } = props;

  return (
    <div className="flex gap-1 flex-wrap" id="product-item-sizes">
      {sizes.map((size) => (
        <button
          key={size}
          role="button"
          aria-label="select size"
          className={`
              ${size === selectedSize ? "text-black" : "text-neutral-500"}
              border border-neutral-500 indic-size text-sm  relative
            `}
          onClick={() => setSelectedSize(size)}
        >
          <span>{size}</span>
          {size === selectedSize && (
            <motion.div
              className="absolute size-full inset-0 border border-black "
              layoutId="product-item-sizes"
            />
          )}
        </button>
      ))}
    </div>
  );
});

const ProdcutItemDescription = memo(function ProdcutItemDescription({
  details,
}: ProductItemDescriptionProps) {
  return (
    <ul className="flex flex-col gap-1 items-start">
      {details.map((detail, index) => (
        <li key={index} className="relative pl-3">
          <span className="absolute left-0 text-xs top-px text-neutral-300">
            &raquo;
          </span>
          <span className="text-sm">{detail}</span>
        </li>
      ))}
    </ul>
  );
});

const ProductItemDetails = (props: ProductItemDetailsProps) => {
  const { product, activeColor, handleColorChange } = props;
  const [selectedSize, setSelectedSize] = useState<number | undefined>();

  const cartItems = useSelector(selectCartItems);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const addItemToCart = () =>
    dispatch(setCartItemsStart(cartItems, product, activeColor, selectedSize));

  return (
    <>
      <div className=" mb-6">
        <ProductItemSegments
          gender={product.gender}
          category={product.category}
          brand={product.brand}
          badge={product.badge}
        />
      </div>

      {/* header */}
      <div className=" mb-2">
        {product.badge && (
          <Badge className="font-heading mb-4 ">{product.badge}</Badge>
        )}

        <div className="flex justify-between gap-4">
          <h3
            title={product.name}
            className="heading-base text-ellipsis truncate capitalize items-start"
          >
            {product.name}
          </h3>
          <ProductPrice price={product.price} discount={product.discount} />
        </div>
      </div>
      <Separator />

      <div className=" mt-8 ">
        <h5 className="font-heading mb-4 uppercase text-neutral-500">
          Select Size
        </h5>

        <ProductItemSizes
          sizes={product.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>

      <div className=" mt-8">
        <h5 className="font-heading mb-4 uppercase text-neutral-500">
          select color
        </h5>
        <ProductItemColors
          colors={product.images}
          activeColor={activeColor}
          handleMouseEnter={handleColorChange}
        />
      </div>
      <Separator className=" mt-8" />
      <div className=" mt-8">
        <h5 className="font-heading mb-4 uppercase text-neutral-500">
          product details
        </h5>
        <ProdcutItemDescription details={product.details} />
      </div>

      <div className="mt-8 self-stretch">
        <Button
          size={"lg"}
          onClick={addItemToCart}
          aria-label="add item to cart"
          className="w-full  font-heading capitalize"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Add to cart"}
        </Button>
      </div>
    </>
  );
};

export default ProductItemDetails;
