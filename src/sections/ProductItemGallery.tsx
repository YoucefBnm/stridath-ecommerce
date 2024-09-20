import ProductImageIndic from "@/components/ProductImageIndic";
import { memo, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const ProductItemGallery = memo(function ProductItemGallery({
  productImages,
}: {
  productImages: string[];
}) {
  const [previewImage, setPreviewImage] = useState<number>(0);

  return (
    <section>
      <div className="flex items-start gap-4">
        <div
          className="flex gap-2 flex-col items-start"
          id="product-gallery-indics"
        >
          {productImages.map((image, index) => (
            <ProductImageIndic
              imageUrl={image}
              index={index}
              handleMouseEnter={() => setPreviewImage(index)}
              layoutId="product-gallery-indics"
              activeColor={previewImage}
              key={index}
            />
          ))}
        </div>

        <div className="relative h-[450px] flex-1 flex p-4 w-full justify-center">
          {/* <div className="absolute size-full inset-0 bg-black bg-opacity-5 pointer-events-none" /> */}
          <InnerImageZoom
            src={productImages[previewImage]}
            className="size-full bg-white max-h-full object-contain"
            zoomType="hover"
            fullscreenOnMobile={true}
          />
        </div>
      </div>
    </section>
  );
});

export default ProductItemGallery;
