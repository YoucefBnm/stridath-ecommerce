import { selectLoading } from "@/store/cart/cart.selector";
import { fetchProductsStart } from "@/store/shopCollection/shopCollection.action";
import { selectShopCollectionProducts } from "@/store/shopCollection/shopCollection.selector";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useFetchCarouselProducts() {
  const params = {
    featured: {
      featured: "featured",
      sale: "",
      gender: "",
      sport: "",
      brand: "",
      sizes: "",
      colors: "",
    },
    sale: {
      featured: "",
      sale: "sale",
      gender: "",
      sport: "",
      brand: "",
      sizes: "",
      colors: "",
    },
    new: {
      featured: "",
      sale: "",
      gender: "",
      sport: "",
      brand: "",
      sizes: "",
      colors: "",
    },
  };
  const [activeParam, setActiveParam] = useState<keyof typeof params>("sale");
  const dispatch = useDispatch();
  const carouselProducts = useSelector(selectShopCollectionProducts);
  const loading = useSelector(selectLoading);
  useEffect(() => {
    const fetchCarouselProducts = () =>
      dispatch(fetchProductsStart(params[activeParam], "new", 12, {}));

    fetchCarouselProducts();
  }, [activeParam]);

  return {
    carouselProducts,
    loading,
    activeParam,
    setActiveParam,
  };
}
