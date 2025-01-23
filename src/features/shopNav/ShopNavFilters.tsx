import { FilterKeys, SHOP_FILTERS } from "@/constants/shopFilters";
import ShopNavFilter from "./ShopNavFilter";
import { useSetFilterParams } from "@/hooks/useSetFiltersParams";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const ShopNavFilters = () => {
  const params = useParams();
  const filterKey = Object.values(params).join("");
  const { addValue, removeValue, getCheckedFilters } = useSetFilterParams();
  const checkedFilters = getCheckedFilters();

  return (
    <>
      {filterKey &&
        Object.keys(SHOP_FILTERS[filterKey]).map((key) => {
          const typedKey = key as FilterKeys;
          const filters = SHOP_FILTERS[filterKey][typedKey];

          return (
            <Fragment key={key}>
              {filters && filters.length > 1 && (
                <>
                  <h4 className="mb-4 capitalize font-heading text-base">
                    {key}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {filters.map((filterItem) => (
                      <ShopNavFilter
                        key={filterItem}
                        label={filterItem}
                        type={key}
                        isChecked={
                          checkedFilters[key]
                            ? checkedFilters[key]?.includes(filterItem) ?? false
                            : false
                        }
                        handleChange={(checked) => {
                          if (checked) {
                            addValue(typedKey, filterItem);
                          }
                          if (!checked) {
                            removeValue(key, filterItem);
                          }
                        }}
                      />
                    ))}
                  </div>
                  <Separator className="my-4" />
                </>
              )}
            </Fragment>
          );
        })}
    </>
  );
};

export default ShopNavFilters;
