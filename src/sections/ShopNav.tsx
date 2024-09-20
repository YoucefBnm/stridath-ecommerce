import SortSelect from "@/components/SortSelect";
import Spinner from "@/components/Spinner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SHOP_FILTERS } from "@/constants/shopFilters";
import { useFetchShopProducts } from "@/hooks/useFetchShopProducts";
import { useSetFilterParams } from "@/hooks/useSetFiltersParams";
import {
  selectCount,
  selectIsFetching,
} from "@/store/shopCollection/shopCollection.selector";
import { FilterItemProps } from "@/types";
import { SlashIcon } from "@radix-ui/react-icons";
import { memo } from "react";
import { useSelector } from "react-redux";

const ShopNavCheckedFilters = () => {
  const { removeValue, getCheckedFilters } = useSetFilterParams();
  const checkedFilters = getCheckedFilters();
  const isFetching = useSelector(selectIsFetching);

  return (
    <>
      {Object.values(checkedFilters).length > 0 && (
        <div className="flex flex-wrap gap-1">
          {Object.keys(checkedFilters).map((key) =>
            checkedFilters[key]?.map((filter) => (
              <Badge key={filter} className="text-xs font-heading capitalize">
                {filter}
                <button
                  role="button"
                  className="  ml-1"
                  aria-label="remove filter"
                  onClick={() => removeValue(key, filter)}
                  disabled={isFetching}
                >
                  <span className="align-middle">&times;</span>
                </button>
              </Badge>
            ))
          )}
        </div>
      )}
    </>
  );
};

const FilterGroup = memo(function FilterGroup(props: FilterItemProps) {
  const { type, label, isChecked, handleChange } = props;
  const isFetching = useSelector(selectIsFetching);

  return (
    <div className={`filter-group group-${type}`}>
      <Checkbox
        id={label}
        checked={isChecked}
        onCheckedChange={handleChange}
        value={label}
        disabled={isFetching}
        className={`absolute inset-0 size-full input-${type} ${
          isChecked ? "border-2 border-black" : "border-zinc-600"
        }`}
        style={
          type === "colors"
            ? { backgroundColor: label }
            : { backgroundColor: "transparent" }
        }
      />
      <Label
        className={`z-10 capitalize  font-normal ${
          isChecked ? "text-black" : "text-zinc-600"
        }`}
        htmlFor={label}
      >
        {label}
      </Label>
    </div>
  );
});
type FilterKeys =
  | "gender"
  | "category"
  | "brand"
  | "badge"
  | "sizes"
  | "colors";

const ShopNavFiltersWrap = () => {
  const { params } = useFetchShopProducts();
  const filterKey = Object.values(params).join("");

  const { getCheckedFilters, addValue, removeValue } = useSetFilterParams();
  const checkedFilters = getCheckedFilters();

  return (
    <>
      <ShopNavCheckedFilters />

      {filterKey &&
        Object.keys(SHOP_FILTERS[filterKey]).map((key) => {
          const typedKey = key as FilterKeys;
          const filters = SHOP_FILTERS[filterKey][typedKey];
          return (
            <Accordion
              key={key}
              type="single"
              collapsible
              className="flex flex-1 w-full flex-col gap-2"
            >
              {filters && filters.length > 1 && (
                <AccordionItem value={key}>
                  <AccordionTrigger className="font-heading capitalize">
                    {key}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-wrap gap-1.5">
                    {filters.map((filterItem: string) => (
                      <FilterGroup
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
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          );
        })}
    </>
  );
};
const ShopNav = () => {
  const productsCount = useSelector(selectCount);
  const isFetching = useSelector(selectIsFetching);
  const { params } = useFetchShopProducts();

  return (
    <>
      {isFetching && (
        <div className="absolute size-full z-10 inset-0 bg-black bg-opacity-5 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <ScrollArea className="flex flex-col max-h-[500px] w-full items-start py-4 justify-start p-4">
        <div className="group">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <span>Shop</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              {params["gender"] && (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="capitalize"
                      href={`/shop/${params["gender"]}`}
                    >
                      {params["gender"]}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                </>
              )}

              {params["category"] && (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="capitalize"
                      href={`/shop/category/${params["category"]}`}
                    >
                      {params["category"]}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                </>
              )}

              {params["brand"] && (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="capitalize"
                      href={`/shop/brand/${params["brand"]}`}
                    >
                      {params["brand"]}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                </>
              )}

              {params["badge"] && (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="capitalize"
                      href={`/shop/badge/${params["badge"]}`}
                    >
                      {params["badge"]}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="gruop w-full my-5">
          <SortSelect />
        </div>
        <div className="group w-full my-5">
          <h3 className="font-heading  inline-flex gap-1">
            <span className="inline-block align-middle ">{productsCount}</span>
            <span className="inline-block text-sm align-middle text-zinc-500">
              Product(s)
            </span>
          </h3>
        </div>

        <ShopNavFiltersWrap />
      </ScrollArea>
    </>
  );
};

export default ShopNav;
