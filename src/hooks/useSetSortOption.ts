import { sortOption, SortOptionsTypes } from "@/firebase/types";
import { useSearchParams } from "react-router-dom";

export function useSetSortOption() {
  const [sortParam, setSortParam] = useSearchParams();

  const setSortOption = (selectedOption: sortOption | null) => {
    selectedOption && sortParam.set("sort", selectedOption);
    setSortParam(sortParam);
  };

  const getSortParam = sortParam.get("sort") as keyof SortOptionsTypes;

  return {
    getSortParam,
    setSortOption,
  };
}
