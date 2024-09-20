import { ProductProps } from "@/types";
import { doc, writeBatch } from "firebase/firestore";
import { db } from "../controllers";
import { collectionRef } from "./products.controller";

export const addProducts = async (
  productsToAdd: ProductProps[]
): Promise<void> => {
  const batch = writeBatch(db);

  productsToAdd.forEach(async (product: ProductProps) => {
    const docRef = doc(collectionRef, product.id);

    batch.set(docRef, product);
  });

  await batch.commit();
  console.log("done");
};
