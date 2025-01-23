import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useSetFilterParams } from "@/hooks/useSetFiltersParams";
import { selectIsFetching } from "@/store/shopCollection/shopCollection.selector";
import { useSelector } from "react-redux";

const ShopNavCheckedFilters = () => {
  const { removeValue, getCheckedFilters } = useSetFilterParams();
  const checkedFilters = getCheckedFilters();
  const isFetching = useSelector(selectIsFetching);
  return (
    <>
      {Object.keys(checkedFilters).length > 0 &&
        Object.keys(checkedFilters).map((key) =>
          checkedFilters[key]?.map((filter) => (
            <Badge
              key={filter}
              className="rounded-sm last-of-type:m-0 first-of-type:m-0 m-1 pr-5 text-xs capitalize relative"
            >
              {filter}
              <button
                className="inline-block aligh-middle leading-none absolute inset-0 size-full p-0 text-right"
                title="remove filter"
                role="button"
                aria-label="remove filter"
                onClick={() => removeValue(key, filter)}
                disabled={isFetching}
              >
                <span className="inline-block aligh-middle mr-2">&times;</span>
              </button>
            </Badge>
          ))
        )}
      {Object.keys(checkedFilters).length > 0 && <Separator className="my-4" />}
    </>
  );
};

export default ShopNavCheckedFilters;
