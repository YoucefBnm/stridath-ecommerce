import {
  QueryFieldFilterConstraint,
  QueryFilterConstraint,
  and,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  or,
  query,
  startAfter,
} from "firebase/firestore";
import { FetchOptions, fetchSuccessResponse, filtersType } from "../types";
import {
  collectionRef,
  filterQueries,
  sortOptions,
} from "./products.controller";
import { ProductProps } from "@/types";

export const fetchProducts = async (
  options: FetchOptions
): Promise<fetchSuccessResponse> => {
  const { params, sortOption, limitNumber, filters, lastVisible } = options;

  const sortQuery = sortOption
    ? sortOptions[sortOption]
    : sortOptions["suggested"];
  const limitQuery = limit(limitNumber);

  const getFiltersParams: Array<QueryFilterConstraint> = [];

  filters &&
    Object.keys(filters).forEach((filterKey) => {
      const filterValues = filters[filterKey as keyof filtersType];

      if (filterValues) {
        filterValues.map((filterValue) => {
          const filterItem = { [filterKey]: filterValue };
          const checkedFilters = Object.values(
            filterQueries(filterItem)
          )?.filter(Boolean) as QueryFieldFilterConstraint[];
          getFiltersParams.push(...checkedFilters);
        });
      }
    });

  const getParamsQuery = filterQueries(params);
  const paramsQuery = Object.values(getParamsQuery).filter(
    Boolean
  ) as QueryFieldFilterConstraint[];
  const allParams = and(...paramsQuery, or(...getFiltersParams));

  const q = lastVisible
    ? query(
        collectionRef,
        allParams,
        sortQuery,
        startAfter(lastVisible),
        limitQuery
      )
    : query(collectionRef, allParams, sortQuery, limitQuery);

  const documentSnapshot = await getDocs(q);

  const products: ProductProps[] = [];

  documentSnapshot.docs.forEach((doc) => {
    products.push(doc.data() as ProductProps);
  });

  const count = (
    await getCountFromServer(query(collectionRef, allParams, sortQuery))
  ).data().count;

  const lastVisibleIndex = documentSnapshot.docs.length - 1;
  const lastVisibleItem = documentSnapshot.docs[lastVisibleIndex];

  return {
    products,
    count,
    lastVisibleItem,
  };
};

export const fetchProductItem = async (
  productId: string
): Promise<ProductProps | void> => {
  const productDoc = doc(collectionRef, productId);

  const productSnapshot = await getDoc(productDoc);

  if (productSnapshot.exists()) {
    return productSnapshot.data() as ProductProps;
  }
};
