import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useFetchCarouselProducts } from "@/hooks/useFetchCarouselProducts";
import { ListCell } from "./ShopList";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";
import { motion } from "framer-motion";

const ProductsCarousel = () => {
  const { carouselProducts, loading, activeParam, setActiveParam } =
    useFetchCarouselProducts();

  const setFeaturedActive = () => setActiveParam("featured");
  const setSaleActive = () => setActiveParam("sale");
  const setNewActive = () => setActiveParam("new");

  const carouselProductsParams = ["featured", "sale", "new"];
  const buttonStyle = (param: (typeof carouselProductsParams)[number]) =>
    `rounded-none transition-colors duration-200 hover:border-gray-800 ${
      activeParam === param ? "border-gray-900" : " border-inherit"
    }`;

  return (
    <section className="px-default py-12">
      <Carousel
        opts={{
          align: "start",
          axis: "x",
          skipSnaps: true,
        }}
        className="w-full col-span-12"
      >
        <div className="flex justify-between items-baseline mb-4">
          <div className="flex overflow-hidden rounded-sm">
            <Button
              size={"sm"}
              className={buttonStyle("featured")}
              onClick={setFeaturedActive}
              variant={"outline"}
            >
              Featured
            </Button>
            <Button
              variant={"outline"}
              size={"sm"}
              className={buttonStyle("sale")}
              onClick={setSaleActive}
            >
              Sale
            </Button>
            <Button
              variant={"outline"}
              size={"sm"}
              className={buttonStyle("new")}
              onClick={setNewActive}
            >
              New
            </Button>
          </div>
          <div className="flex relative gap-2">
            <CarouselPrevious className="relative inset-0 transform-none" />
            <CarouselNext className="relative inset-0 transform-none" />
          </div>
        </div>
        <CarouselContent className="relative">
          {carouselProducts
            ? carouselProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="max-[480px]:basis-full basis-1/2 md:basis-1/3 xl:basis-1/4"
                >
                  <ListCell isFetching={loading} product={product} />
                </CarouselItem>
              ))
            : loading && (
                <motion.div
                  key="spinner"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute min-h-96 z-10 bg-white inset-0 size-full flex-center"
                >
                  <Spinner />
                </motion.div>
              )}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProductsCarousel;
