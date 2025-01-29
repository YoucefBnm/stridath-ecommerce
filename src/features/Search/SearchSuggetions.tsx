import { Badge } from "@/components/ui/badge";
import { SEARCH_SUGGESTIONS_NAMES } from "@/constants/searchSuggetionsNames";
import { searchProductsStart } from "@/store/searchProducts/searchProducts.action";
import { selectSearchProductsLoading } from "@/store/searchProducts/searchProducts.selector";
import { cn } from "@/utils/shadcn";
import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

type SearchSuggetionsProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};
const SearchSuggetions: FC<SearchSuggetionsProps> = ({
  setSearchQuery,
  ...props
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectSearchProductsLoading);

  return (
    <div {...props} className={cn("flex gap-2 flex-wrap", props.className)}>
      {SEARCH_SUGGESTIONS_NAMES.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          role="button"
          aria-label="search suggestion"
          className="appearance-none"
          disabled={isLoading}
          onClick={() => {
            setSearchQuery(suggestion);
            dispatch(searchProductsStart(suggestion, 4));
          }}
        >
          <Badge
            variant={"outline"}
            className="font-heading font-normal capitalize bg-gray-200/80"
          >
            {suggestion}
          </Badge>
        </button>
      ))}
    </div>
  );
};

export default SearchSuggetions;
