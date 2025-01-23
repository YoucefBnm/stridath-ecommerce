import {
  and,
  getCountFromServer,
  getDocs,
  limit,
  or,
  query,
  QueryFieldFilterConstraint,
  QueryFilterConstraint,
  startAfter,
} from "firebase/firestore";
import { fetchOptions, fetchSuccessResponse, filtersType } from "../types";
import { collectionRef, filterQueries, sortOptions } from "./services";
import { ProductProps } from "@/types";

export const fetchProducts = async (
  options: fetchOptions
): Promise<fetchSuccessResponse> => {
  const { params, sortOption, limitNumber, filters, lastVisible } = options;

  const sortQuery = sortOption
    ? sortOptions[sortOption]
    : sortOptions["featured"];
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
          ) as QueryFieldFilterConstraint[];
          getFiltersParams.push(...checkedFilters);
        });
      }
    });

  const getParamsQuery = filterQueries(params);
  const paramsQuery = Object.values(getParamsQuery).filter(
    Boolean
  ) as QueryFieldFilterConstraint[];
  const allParms = and(...paramsQuery, or(...getFiltersParams));

  const q = lastVisible
    ? query(
        collectionRef,
        allParms,
        sortQuery,
        startAfter(lastVisible),
        limitQuery
      )
    : query(collectionRef, allParms, sortQuery, limitQuery);

  const documentSnapshot = await getDocs(q);
  const products: ProductProps[] = [];

  documentSnapshot.docs.forEach((doc) => {
    products.push(doc.data() as ProductProps);
  });

  const count = (
    await getCountFromServer(query(collectionRef, allParms, sortQuery))
  ).data().count;

  const lastVisibleIndex = documentSnapshot.docs.length - 1;
  const lastVisibleItem = documentSnapshot.docs[lastVisibleIndex];

  return {
    products,
    count,
    lastVisibleItem,
  };
};
