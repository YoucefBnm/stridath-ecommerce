import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchShopProducts } from "./useFetchShopProducts";
import { useSetSortOption } from "./useSetSortOption";
import { useSetFilterParams } from "./useSetFiltersParams";
import {
  selectCount,
  selectIsFetching,
  selectLastVisible,
  selectShopCollectionProducts,
} from "@/store/shopCollection/shopCollection.selector";
import { loadMoreStart } from "@/store/shopCollection/shopCollection.action";

export function useLoadProducts() {
  const observerRef = useRef(null);

  const products = useSelector(selectShopCollectionProducts);
  const productsCount = useSelector(selectCount);
  const allLoaded = products.length === productsCount;

  const dispatch = useDispatch();
  const { params } = useFetchShopProducts();
  const { getSortParam } = useSetSortOption();
  const { getCheckedFilters } = useSetFilterParams();
  const checkedFilters = getCheckedFilters();
  const lastVisible = useSelector(selectLastVisible);
  const isFetching = useSelector(selectIsFetching);

  const loadProducts = () =>
    dispatch(
      loadMoreStart(params, getSortParam, 12, checkedFilters, lastVisible)
    );

  useEffect(() => {
    const { current } = observerRef;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !allLoaded && products.length > 0) {
          loadProducts();
        }
      },
      { threshold: 1 }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  });

  return {
    observerRef,
    allLoaded,
    isFetching,
    products,
  };
}
