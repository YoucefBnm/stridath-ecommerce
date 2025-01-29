import { fetchProductItem } from "@/firebase/products/fetchProductItem";
import { ProductProps } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export function useFetchProductItem() {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductProps | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const productItem = productId && (await fetchProductItem(productId));

      if (productItem) setProduct(productItem);
      else {
        toast.error("Product out of stock", {
          action: { label: "return home", onClick: () => navigate("/") },
        });
      }
    };

    fetchProduct();
  }, [productId]);

  return {
    product,
  };
}
