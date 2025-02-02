import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";
import ProductCardSkelton from "@/components/ProductCardSkelton";
import ProductCard from "@/features/product/ProductCard";
import { useLoadMoreProducts } from "@/hooks/useLoadMoreProducts";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import {
  selectCount,
  selectIsLoadingMore,
} from "@/store/shopCollection/shopCollection.selector";
import { ProductProps } from "@/types";
import { transformVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

interface ListCellProps {
  isFetching: boolean;
  product: ProductProps;
}
export const ListCell = ({ isFetching, product }: ListCellProps) => {
  const { revealRef, isInView } = useRevealAnimation();

  return (
    <motion.div className="block relative" variants={transformVariants()}>
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
      <div className="absolute top-1/2 left-1/2" ref={revealRef} />
    </motion.div>
  );
};

const ShopList = () => {
  const { products, observerRef, allLoaded, isFetching } =
    useLoadMoreProducts();
  const productsCount = useSelector(selectCount);
  const isLoadingMore = useSelector(selectIsLoadingMore);
  return (
    <InfiniteScrollContainer
      observerRef={observerRef}
      items={products}
      isFetching={isLoadingMore}
      allLoaded={allLoaded}
      className="px-default"
      itemsLength={productsCount}
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
