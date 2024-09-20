import { fetchProducts } from "@/firebase/products/fetchProducts";
import { fetchOptionsProps } from "@/firebase/types";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { ProductProps, ProductsCarouselProps } from "@/types";
import { memo, Suspense, useEffect, useState } from "react";
import AnimatedText from "./AnimatedText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";

const ProductsCarousel = memo(
  ({ title, route, params }: ProductsCarouselProps) => {
    const [carouselProducts, setCarouselProducts] = useState<ProductProps[]>(
      []
    );
    const [loading, setLoading] = useState<boolean>(false);

    const { revealRef, isInView } = useRevealAnimation();

    useEffect(() => {
      const fetchCarouselProducts = async () => {
        setLoading(true);
        const options: fetchOptionsProps = {
          params: params,
          sortOption: "suggested",
          limitNumber: 15,
          filters: {},
          lastVisible: undefined,
        };
        const { products } = await fetchProducts(options);

        if (products && isInView) {
          setLoading(false);
          setCarouselProducts(products);
        }
      };
      fetchCarouselProducts();
    }, [isInView, params]);

    const loadCarouselProducts =
      carouselProducts && !loading && carouselProducts.length > 0;

    return (
      <section
        ref={revealRef}
        className="section-container grid-rows-[min-content_1fr] px-default py-12 place-content-center"
      >
        <AnimatedText
          tag="heading4"
          text={title}
          className="heading-title row-span-1 col-start-1 col-span-4 mb-4"
        />

        <Carousel
          opts={{
            align: "start",
            axis: "x",
            skipSnaps: true,
          }}
          className="w-full col-span-12 md:col-span-11  col-start-1 md:col-start-2 row-start-2"
        >
          <div className="flex justify-between items-baseline mb-4">
            <div className="flex relative gap-2">
              <CarouselPrevious className="relative inset-0 transform-none" />
              <CarouselNext className="relative inset-0 transform-none" />
            </div>
            <Button variant={"link"} size={"sm"}>
              <Link to={route}>View all</Link>
            </Button>
          </div>

          {isInView ? (
            <Suspense
              fallback={
                <div className="w-full flex items-start justify-center">
                  <Spinner />
                </div>
              }
            >
              <CarouselContent className="">
                {loadCarouselProducts &&
                  carouselProducts.map((product) => (
                    <CarouselItem
                      key={product.id}
                      className="  sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
                    >
                      <Link
                        title={`visit ${product.name} page`}
                        aria-label={`navigate to ${product.name} page`}
                        className="block"
                        to={`/product/${product.id}`}
                      >
                        <ProductCard product={product} />
                      </Link>
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Suspense>
          ) : (
            <div className="w-full flex items-start justify-center">
              <Spinner />
            </div>
          )}
        </Carousel>
      </section>
    );
  }
);

export default ProductsCarousel;
