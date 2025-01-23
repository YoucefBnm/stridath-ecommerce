import { useDispatch } from "react-redux";
import { useSetFilterParams } from "./useSetFiltersParams";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSetSortOption } from "./useSetSortOption";
import { fetchProductsStart } from "@/store/shopCollection/shopCollection.action";

export function useFetchShopProducts() {
  const { getCheckedFilters } = useSetFilterParams();
  const { getSortParam } = useSetSortOption();

  const params = useParams();

  const checkedFilters = getCheckedFilters();
  const dispatch = useDispatch();
  const fetchProducts = () =>
    dispatch(fetchProductsStart(params, getSortParam, 12, checkedFilters));

  useEffect(() => {
    fetchProducts();
  }, [params]);

  return {
    params,
    checkedFilters,
  };
}
