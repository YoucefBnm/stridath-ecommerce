import Spinner from "@/components/Spinner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetClose } from "@/components/ui/sheet";
import { useObserver } from "@/hooks/useObserver";
import { ListCell } from "@/layouts/ShopList";
import { searchMoreProductsStart } from "@/store/searchProducts/searchProducts.action";
import {
  selectSearchProductsCount,
  selectSearchProductsLastItem,
  selectSearchProductsLoading,
  selectSearchProductsResults,
} from "@/store/searchProducts/searchProducts.selector";
import { cn } from "@/utils/shadcn";
import { useWindowHeight } from "@react-hook/window-size/throttled";
import { FC, HTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";

type SearchResultsProps = HTMLAttributes<HTMLDivElement> & {
  searchQuery: string;
  className?: string;
};
const SearchResults: FC<SearchResultsProps> = ({
  searchQuery,
  className,
  ...props
}) => {
  const searchResults = useSelector(selectSearchProductsResults);
  const resultsCount = useSelector(selectSearchProductsCount);
  const isLoading = useSelector(selectSearchProductsLoading);
  const allLoaded = searchResults.length === resultsCount;
  const lastVisible = useSelector(selectSearchProductsLastItem);
  const searchCount = useSelector(selectSearchProductsCount);

  const dispatch = useDispatch();
  const loadMore = () =>
    dispatch(searchMoreProductsStart(searchQuery, 4, lastVisible));

  const observerRef = useObserver(allLoaded, loadMore, searchResults.length);
  const windowHeight = useWindowHeight();
  const scrollHeight = windowHeight - 200;

  return (
    <div className={cn("relative", className)} {...props}>
      {resultsCount && resultsCount > 0 && searchQuery !== "" && !isLoading && (
        <h3 className="font-heading capitalize font-normal text-gray-800">
          {resultsCount} Shoes for {searchQuery}
        </h3>
      )}

      {isLoading ? (
        <div className="absolute h-20 inset-0 size-full flex-center">
          <Spinner />
        </div>
      ) : (
        <ScrollArea style={{ height: scrollHeight }} className="w-full">
          <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
            {searchResults.length > 0 &&
              searchQuery !== "" &&
              searchResults.map((result) => (
                <SheetClose className="block" key={result.id}>
                  <ListCell isFetching={isLoading} product={result} />
                </SheetClose>
              ))}
            {searchResults.length > 0 &&
              searchCount &&
              searchResults.length < searchCount && (
                <div className=" mt-auto" ref={observerRef} />
              )}
            {searchCount === 0 && (
              <div className="w-full text-center mt-4">No results found.</div>
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default SearchResults;
