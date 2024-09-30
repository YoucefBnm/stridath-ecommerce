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
  try {
    const { gender, category, brand, badge, sizes, colors } = params;

    // Create an array of queries, filtering out undefined values
    const queries = [
      gender ? where("gender", "==", gender) : undefined,
      category ? where("category", "==", category) : undefined,
      brand ? where("brand", "==", brand) : undefined,
      badge ? where("badge", "==", badge) : undefined,
      sizes
        ? where("sizes", "array-contains-any", [parseInt(sizes)])
        : undefined,
      colors ? where("colors", "array-contains-any", [colors]) : undefined,
    ].filter(Boolean); // This removes any `undefined` values

    // Return the optimized queries
    return queries;
  } catch (error) {
    console.error("Error building filter queries:", error);
    // Handle error (e.g., return an empty array to avoid issues in the Firestore query)
    return [];
  }
};
