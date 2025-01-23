import { forwardRef, memo, MutableRefObject, PropsWithChildren } from "react";
import { cn } from "@/utils/shadcn";
import Spinner from "./Spinner";
import { ProductProps } from "@/types";

type InfiniteScrollContainerProps = PropsWithChildren<{
  observerRef: MutableRefObject<HTMLDivElement | null>;
  items: ProductProps[] | unknown[];
  isFetching: boolean;
  allLoaded: boolean;
  className?: string;
}>;

const InfiniteScrollContainer = forwardRef<
  HTMLDivElement,
  InfiniteScrollContainerProps
>(({ children, observerRef, items, isFetching, allLoaded, className }, ref) => {
  const hasMore = isFetching && !allLoaded && items.length > 0;

  return (
    <article
      ref={ref}
      className={cn(
        "grid gap-2 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]",
        className
      )}
    >
      {children}
      {hasMore && (
        <div className="block text-center">
          <Spinner />
        </div>
      )}
      <div ref={observerRef} />
    </article>
  );
});

export default memo(InfiniteScrollContainer);
