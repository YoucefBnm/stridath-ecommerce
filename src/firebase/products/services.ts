import {
  collection,
  orderBy,
  QueryConstraint,
  QueryFieldFilterConstraint,
  where,
} from "firebase/firestore";
import { db } from "../services";
import { SortOptionsTypes } from "../types";
import { Params } from "react-router-dom";

export const collectionRef = collection(db, "products");

export const mainCategoryQuery = (
  field: string,
  value: string
): QueryFieldFilterConstraint => where(field, "==", value);

export const subCategoryQuery = (field: string, value: string) =>
  where(field, "array-contains-any", [value]);

export const sortOptions: SortOptionsTypes = {
  featured: orderBy("featured", "desc"),
  new: orderBy("createdAt", "desc"),
  sale: orderBy("isOnsale", "desc"),
  "low to high": orderBy("price", "asc"),
  "high to low": orderBy("price", "desc"),
};

export const filterQueries = (params: Params<string>) => {
  const { gender, sport, brand, availableColors, sizes } = params;

  const filters: (QueryConstraint | undefined)[] = [
    gender ? where("gender", "==", gender) : undefined,
    sport ? where("sport", "==", sport) : undefined,
    brand ? where("brand", "==", brand) : undefined,
    availableColors
      ? where("availableColors", "array-contains-any", availableColors)
      : undefined,
    sizes ? where("sizes", "array-contains-any", sizes) : undefined,
  ];

  return filters.filter(
    (filter): filter is QueryConstraint => filter !== undefined
  );
};
