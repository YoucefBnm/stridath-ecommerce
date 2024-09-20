import Seo from "@/components/Seo";
import Spinner from "@/components/Spinner";
import { useFetchProductItem } from "@/hooks/useFetchProductItem";
import { useSetActiveProduct } from "@/hooks/useSetActiveProduct";
import ProductItemDetails from "@/sections/ProductItemDetails";
import ProductItemGallery from "@/sections/ProductItemGallery";

const Product = () => {
  const { product } = useFetchProductItem();
  const { activeColor, handleColorChange } = useSetActiveProduct();

  return (
    <>
      <Seo
        title={`Actifeet | ${product?.brand} ${
          product?.name ?? "Athletic Shoes"
        }`}
        description={`${product?.name} ${activeColor}`}
        thumbImage={product?.images[activeColor].imagesUrls[0]}
      />
      <main>
        {product ? (
          <div className="section-container grid-rows-[max-content_max-content] md:grid-rows-1 px-default py-12">
            <div className="section-col-xl">
              <ProductItemGallery
                productImages={product.images[activeColor].imagesUrls}
              />
            </div>
            <div className="section-col-md">
              <ProductItemDetails
                product={product}
                activeColor={activeColor}
                handleColorChange={handleColorChange}
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-svh flex-center">
            <Spinner />
          </div>
        )}
      </main>
    </>
  );
};

export default Product;
