import ProductImageIndic from "@/features/product/ProductImageIndic";
import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

type ProductGalleryProps = {
  productImages: string[];
};
const ProductGallery = ({ productImages }: ProductGalleryProps) => {
  const [previewImage, setPreviewImage] = useState<number>(0);
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const handleMouseEnter = () => setIsMouseIn(true);
  const handleMouseLeave = () => setIsMouseIn(false);

  return (
    <div className="flex items-start gap-4">
      <div
        className="flex gap-2 flex-col items-start"
        id="product-gallery-indics"
      >
        {productImages.map((imageUrl, index) => (
          <ProductImageIndic
            imageUrl={imageUrl}
            index={index}
            handleMouseEnter={() => setPreviewImage(index)}
            layoutId="product-gallery-indics"
            activeColor={previewImage}
            key={index}
          />
        ))}
      </div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-[450px] flex-1 flex-center w-full"
      >
        <div className="absolute z-40 size-full inset-0 bg-gray-500 rounded-sm bg-opacity-5 pointer-events-none" />
        {isMouseIn ? (
          <InnerImageZoom
            src={productImages[previewImage]}
            className="size-full bg-white max-h-full object-contain"
            zoomType="hover"
            fullscreenOnMobile={true}
          />
        ) : (
          <img
            src={productImages[previewImage]}
            className="h-auto max-h-full max-w-[90%]  object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
