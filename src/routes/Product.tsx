import Spinner from "@/components/Spinner";
import { useFetchProductItem } from "@/hooks/useFetchProductItem";
import { useSetActiveProduct } from "@/hooks/useSetActiveProduct";
import ProductDetails from "@/layouts/ProductDetails";
import ProductGallery from "@/features/product/ProductGallery";

const Product = () => {
  const { product } = useFetchProductItem();
  const { activeColor, handleColorChange } = useSetActiveProduct();

  return (
    <main>
      {product ? (
        <section className="grid grid-cols-12 gap-6 px-default py-12">
          <div className="col-span-12 md:col-span-8">
            <ProductGallery
              productImages={product.images[activeColor].imagesUrl}
            />
          </div>

          <div className="col-span-12 md:col-span-4 col-end-13">
            <ProductDetails
              activeColor={activeColor}
              handleColorChange={handleColorChange}
              product={product}
            />
          </div>
        </section>
      ) : (
        <div className="w-full h-svh flex-center">
          <Spinner />
        </div>
      )}
    </main>
  );
};

export default Product;
