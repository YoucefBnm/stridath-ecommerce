import { FC, memo } from "react";
import { useSetSortOption } from "@/hooks/useSetSortOption";
import ShopNavFilter from "./ShopNavFilter";
import { sortOptions } from "@/firebase/products/services";
import { sortOption } from "@/firebase/types";

const ShopNavSort: FC = () => {
  const { getSortParam, setSortOption } = useSetSortOption();
  const currentSortParam = getSortParam;

  return (
    <>
      <h4 className="mb-4 font-heading text-base">Sort by</h4>
      <div className="flex flex-wrap gap-2">
        {Object.keys(sortOptions).map((key) => {
          const typedKey = key as sortOption;
          return (
            <ShopNavFilter
              key={typedKey}
              isChecked={typedKey === currentSortParam}
              type="sort"
              label={typedKey}
              handleChange={() => setSortOption(typedKey)}
            />
          );
        })}
      </div>
    </>
  );
};

export default memo(ShopNavSort);
