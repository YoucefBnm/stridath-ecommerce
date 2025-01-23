import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";
import ProductCardSkelton from "@/components/ProductCardSkelton";
import ProductCard from "@/features/product/ProductCard";
import { useLoadProducts } from "@/hooks/useLoadProducts";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { ProductProps } from "@/types";
import { transformVariants } from "@/utils/motion";
import { motion } from "framer-motion";

interface ListCellProps {
  isFetching: boolean;
  product: ProductProps;
}
const ListCell = ({ isFetching, product }: ListCellProps) => {
  const { revealRef, isInView } = useRevealAnimation();

  return (
    <motion.div variants={transformVariants()}>
      {isFetching || !isInView ? (
        <motion.div
          initial="visible"
          animate={
            !isInView || isFetching
              ? { opacity: 1, display: "block" }
              : { opacity: 0, display: "none" }
          }
        >
          <ProductCardSkelton />
        </motion.div>
      ) : (
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <ProductCard product={product} />
        </motion.div>
      )}
      <div className="mt-auto" ref={revealRef} />
    </motion.div>
  );
};

const ShopList = () => {
  const { products, observerRef, allLoaded, isFetching } = useLoadProducts();

  return (
    <InfiniteScrollContainer
      observerRef={observerRef}
      items={products}
      isFetching={isFetching}
      allLoaded={allLoaded}
      className="px-default"
    >
      {products &&
        products.map((product) => (
          <ListCell
            isFetching={isFetching}
            key={product.id}
            product={product}
          />
        ))}
    </InfiniteScrollContainer>
  );
};

export default ShopList;
