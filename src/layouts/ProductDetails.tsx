import { Button } from "@/components/ui/button";
import ProductAbout from "@/features/product/ProductAbout";
import ProductBreadcrumb from "@/features/product/ProductBreadcrumb";
import ProductColors from "@/features/product/ProductColors";
import ProductFeatures from "@/features/product/ProductFeatures";
import ProductPrice from "@/features/product/ProductPrice";
import ProductReview from "@/features/product/ProductReview";
import ProductSizes from "@/features/product/ProductSizes";
import { ProductProps } from "@/types";
import { getAverageRating } from "@/utils/getAverageRating";
import { FC, useState } from "react";

type ProductDetailsProps = {
  product: ProductProps;
  activeColor: number;
  handleColorChange: (index: number) => void;
};
const ProductDetails: FC<ProductDetailsProps> = (props) => {
  const { product, activeColor, handleColorChange } = props;
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  const averageRating = getAverageRating(product.reviews);

  return (
    <section className="flex flex-col justify-start">
      <div className="mb-4">
        <ProductBreadcrumb
          gender={product.gender}
          sport={product.sport}
          brand={product.brand}
          featured={product.featured}
          sale={product.sale}
        />
      </div>

      <h2 className="heading-base font-medium uppercase">{product.name}</h2>
      <h5
        className="font-heading text-xs text-gray-600 capitalize text-ellipsis truncate"
        title={`${product.gender} ${product.sport} ${product.brand}`}
      >
        {product.gender} {product.sport} {product.brand}
      </h5>

      {product.reviews.length > 0 && (
        <ProductReview
          rating={averageRating}
          maxRating={5}
          reviewsLength={product.reviews.length}
          className="my-2"
        />
      )}

      <ProductPrice
        className="text-lg"
        price={product.price}
        salePrice={product.salePrice}
        isOnSale={product.sale}
      />
      <ProductColors
        className="my-8 -order-1 md:order-none"
        colors={product.images}
        activeColor={activeColor}
        handleMouseEnter={handleColorChange}
      />

      <div>
        <h3 className="font-heading text-lg mb-2">Select size</h3>
        <ProductSizes
          allSizes={product.sizes}
          activeItemSizes={product.images[activeColor].sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-heading mb-1">Details</h3>
        <ProductAbout details={product.details} />
      </div>

      <div className="mt-4 bg-gray-100 rounded-sm p-4">
        <h3 className="text-lg font-heading mb-1">Description</h3>
        <ProductFeatures className="text-sm" features={product.features} />
      </div>

      <div className="mt-4">
        <Button
          variant={"default"}
          className="w-full rounded-sm font-heading capitalize"
          aria-label="add to cart"
          size={"lg"}
        >
          Add to cart
        </Button>
      </div>
    </section>
  );
};

export default ProductDetails;
