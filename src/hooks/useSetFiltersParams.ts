import { useSearchParams } from "react-router-dom";

type filtersKeyType =
  | "gender"
  | "category"
  | "brand"
  | "size"
  | "color"
  | undefined
  | string;

type CheckedFiltersType<T extends string> = {
  [Key in T]?: string[] | undefined;
};

export function useSetFilterParams() {
  const [filtersParams, setFiltersParams] = useSearchParams();

  const addValue = (key: string, value: string) => {
    const currentKeyValue = filtersParams.get(key);
    filtersParams.append(key, value);

    const newKeyValue = currentKeyValue ? `${currentKeyValue}_${value}` : value;

    filtersParams.set(key, newKeyValue);
    setFiltersParams(filtersParams);
  };

  const removeValue = (key: filtersKeyType, value: string) => {
    const currentKeyValue = key && filtersParams.get(key);

    if (currentKeyValue) {
      const values = currentKeyValue.split("_");
      const updateValue = values.filter((val) => val !== value);

      if (updateValue.length > 0) {
        filtersParams.set(key, updateValue.join("_"));
      } else {
        filtersParams.delete(key);
      }
    }

    setFiltersParams(filtersParams);
  };

  const getCheckedFilters = () => {
    const entries = filtersParams.entries();
    const checkedFilters: CheckedFiltersType<
      "gender" | "category" | "brand" | "badge" | "size" | "color" | string
    > = {};

    for (const entry of entries) {
      const [key, value] = entry;

      if (key !== "sort") {
        const values = value.split("_");
        checkedFilters[key] = values;
      }
    }

    return checkedFilters;
  };

  return {
    filtersParams,
    addValue,
    removeValue,
    getCheckedFilters,
  };
}
