import { ProductProps } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { collectionRef } from "./services";

export const fetchProductItem = async (
  productId: string
): Promise<ProductProps | void> => {
  const productDoc = doc(collectionRef, productId);

  const productSnapshot = await getDoc(productDoc);

  if (productSnapshot.exists()) {
    return productSnapshot.data() as ProductProps;
  }
};
