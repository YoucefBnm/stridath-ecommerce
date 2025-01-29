import {
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  where,
  startAfter,
} from "firebase/firestore";
import { collectionRef } from "./services";
import { ProductProps } from "@/types";
import { SearchProductsOptions, SearchProductsResponse } from "../types";

export const searchProducts = async (
  options: SearchProductsOptions
): Promise<SearchProductsResponse> => {
  const { searchQuery, limitNumber, lastVisible } = options;

  const q = lastVisible
    ? query(
        collectionRef,
        orderBy("name"),
        where("name", ">=", searchQuery),
        where("name", "<=", searchQuery + "\uf8ff"),
        startAfter(lastVisible),
        limit(limitNumber)
      )
    : query(
        collectionRef,
        orderBy("name"),
        where("name", ">=", searchQuery),
        where("name", "<=", searchQuery + "\uf8ff"),
        limit(limitNumber)
      );

  const documentSnapshot = await getDocs(q);
  const { count } = (
    await getCountFromServer(
      query(
        collectionRef,
        orderBy("name"),
        where("name", ">=", searchQuery),
        where("name", "<=", searchQuery + "\uf8ff")
      )
    )
  ).data();

  const products = documentSnapshot.docs.map((doc) => {
    return doc.data() as ProductProps;
  });
  const lastVisibleIndex = documentSnapshot.docs.length - 1;
  const lastVisibleItem = documentSnapshot.docs[lastVisibleIndex];

  return {
    products,
    count,
    lastVisibleItem,
  };
};
