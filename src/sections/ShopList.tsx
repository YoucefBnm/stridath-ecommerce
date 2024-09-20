import ProductCard from "@/components/ProductCard";
import Spinner from "@/components/Spinner";
import { Skeleton } from "@/components/ui/skeleton";
import { useLoadProducts } from "@/hooks/useLoadProducts";
import { ProductProps } from "@/types";
import { transformVariants } from "@/utils/motion";
import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";
import { Link } from "react-router-dom";

const CellSkelton = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* card images */}
      <Skeleton className="w-full h-56" />

      {/* card colors */}
      <Skeleton className="px-4 my-4 w-1/3" />

      {/* card details */}
      <Skeleton className="px-4 h-10 w-1/2" />

      {/* card price  */}
      <Skeleton className="my-4 px-4 h-6 w-1/3" />
    </div>
  );
};

const GridCell = memo(function GridCell({
  isFetching,
  product,
}: {
  isFetching: boolean;
  product: ProductProps;
}) {
  const targetRef = useRef(null);

  const isInView = useInView(targetRef, {
    once: true,
    amount: 0.25,
  });
  return (
    <motion.div variants={transformVariants()}>
      {isFetching || !isInView ? (
        <motion.div
          initial={"visible"}
          animate={
            !isInView || isFetching
              ? { opacity: 1, display: "block" }
              : { opacity: 0, display: "none" }
          }
        >
          <CellSkelton />
        </motion.div>
      ) : (
        <motion.div
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
          <Link
            aria-label={`visit ${product.name} page`}
            title={`visit ${product.name} page`}
            to={`/product/${product.id}`}
            className="block"
          >
            <ProductCard product={product} />
          </Link>
        </motion.div>
      )}
      <div className="mt-auto " ref={targetRef} />
    </motion.div>
  );
});

const ShopList = () => {
  const { products, observerRef, allLoaded, isFetching } = useLoadProducts();
  return (
    <article className="min-h-svh grid gap-4 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
      {products &&
        products.map((product: ProductProps) => (
          <GridCell
            product={product}
            key={product.id}
            isFetching={isFetching}
          />
        ))}

      {isFetching && !allLoaded && products.length > 0 && (
        <div className="block text-center">
          <Spinner />
        </div>
      )}
      {products.length > 0 && <div ref={observerRef} />}
    </article>
  );
};

export default ShopList;
