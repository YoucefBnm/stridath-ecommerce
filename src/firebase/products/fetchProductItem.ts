import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../controllers";
import { ProductProps } from "@/types";

export const fetchProductItem = async (productId: string) => {
  const collectionRef = collection(db, "products");

  const productDoc = doc(collectionRef, productId);

  const productSnapshot = await getDoc(productDoc);

  if (productSnapshot.exists()) {
    return productSnapshot.data() as ProductProps;
  }
};
