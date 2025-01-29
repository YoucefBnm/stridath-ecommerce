import { searchProductsStart } from "@/store/searchProducts/searchProducts.action";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function useSetSearchQuery() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dispatch = useDispatch();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
    // if (e.target.value !== "") {
    dispatch(searchProductsStart(searchQuery, 4));
    // }
  };

  useEffect(() => {
    const id = setTimeout(() => handleSearchChange, 500);
    return () => clearTimeout(id);
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    handleSearchChange,
  };
}
