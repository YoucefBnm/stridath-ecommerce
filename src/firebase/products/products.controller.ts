import {
  QueryFieldFilterConstraint,
  collection,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../controllers";
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
  suggested: orderBy("id", "desc"),
  "best seller": orderBy("badge", "asc"),
  sale: orderBy("badge", "desc"),
  "low to high": orderBy("price", "asc"),
  "high to low": orderBy("price", "desc"),
};

export const filterQueries = (params: Params) => {
  const { gender, category, brand, badge, sizes, colors } = params;

  return {
    gender: gender ? where("gender", "==", gender) : undefined,
    category: category ? where("category", "==", category) : undefined,
    brand: brand ? where("brand", "==", brand) : undefined,
    badge: badge ? where("badge", "==", badge) : undefined,
    sizes: sizes
      ? where("sizes", "array-contains-any", [parseInt(sizes)])
      : undefined,
    colors: colors
      ? where("colors", "array-contains-any", [colors])
      : undefined,
  };
};
