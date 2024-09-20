import { IconSearch } from "@/assets";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { ScrollArea } from "./ui/scroll-area";
import { ChangeEvent, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchProductsCount,
  selectSearchProductsLastItem,
  selectSearchProductsLoading,
  selectSearchProductsResults,
} from "@/store/searchProducts/searchProducts.selector";
import {
  searchMoreProductsStart,
  searchProductsStart,
} from "@/store/searchProducts/searchProducts.action";
import { Input } from "./ui/input";
import { searchSuggetions } from "@/constants/searchSuggetions";
import { Badge } from "./ui/badge";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { useWindowHeight } from "@react-hook/window-size/throttled";
import { useNavigate } from "react-router-dom";

interface SearchFieldProps {
  searchQuery: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = memo(function SearchField({
  searchQuery,
  handleChange,
}: SearchFieldProps) {
  return (
    <div className="w-full">
      <Input
        value={searchQuery}
        placeholder="Search for shoes"
        onChange={handleChange}
      />
    </div>
  );
});

const SearchSuggestions = ({
  setSearchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectSearchProductsLoading);
  return (
    <div className="flex flex-wrap gap-2">
      {searchSuggetions.map((suggestion) => (
        <button
          type="button"
          role="button"
          onClick={() => {
            setSearchQuery(suggestion);
            dispatch(searchProductsStart(suggestion, 4));
          }}
          key={suggestion}
          disabled={isLoading}
        >
          <Badge
            variant={"outline"}
            className="capitalize font-heading text-black"
          >
            {suggestion}
          </Badge>
        </button>
      ))}
    </div>
  );
};

const SearchResults = ({ searchQuery }: { searchQuery: string }) => {
  const searchResults = useSelector(selectSearchProductsResults);
  const resultsCount = useSelector(selectSearchProductsCount);
  const isLoading = useSelector(selectSearchProductsLoading);
  const allLoaded = searchResults.length === resultsCount;
  const lastVisible = useSelector(selectSearchProductsLastItem);

  const dispatch = useDispatch();
  const loadMore = () =>
    dispatch(searchMoreProductsStart(searchQuery, 4, lastVisible));

  const navigate = useNavigate();

  return (
    <div className="relative">
      <h3 className="font-heading capitalize mb-2 text-neutral-500">
        {searchResults.length > 0 &&
          searchQuery !== "" &&
          !isLoading &&
          `(${resultsCount}) Shoes for "${searchQuery}"`}
      </h3>

      {isLoading ? (
        <div className="absolute h-20 inset-0 size-full  flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {searchResults.length > 0 &&
            searchQuery !== "" &&
            searchResults.map((result) => (
              <DrawerClose
                key={result.id}
                onClick={() => navigate(`/product/${result.id}`)}
                aria-label={`navigate to ${result.name} page`}
                className="block"
              >
                <ProductCard product={result} />
              </DrawerClose>
            ))}
          {!allLoaded && searchResults.length !== 0 && searchQuery !== "" && (
            <>
              <br />
              <Button
                className="font-heading text-sm col-span-2"
                onClick={loadMore}
              >
                Load more
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const NavSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const windowHeight = useWindowHeight();

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
    if (e.target.value !== "") {
      dispatch(searchProductsStart(searchQuery, 4));
    }
  };

  const resetSearch = () => setSearchQuery("");
  return (
    <Drawer onClose={resetSearch} direction={"right"}>
      <DrawerTrigger
        asChild
        aria-label="search field trigger"
        className="cursor-pointer py-2 mx-2"
      >
        <img width={23} height={23} src={IconSearch} aria-hidden />
      </DrawerTrigger>

      <DrawerContent className="top-0 w-11/12 md:w-3/5 xl:w-2/4 border-none outline-none">
        <DrawerHeader className=" justify-end h-16">
          <DrawerClose>
            <span className="text-2xl text-neutral-500">&times;</span>
          </DrawerClose>
        </DrawerHeader>
        <div className="flex items-center h-16 px-6">
          <SearchField searchQuery={searchQuery} handleChange={handleChange} />
        </div>
        <div className="px-6 mb-4">
          <h4 className="font-heading mb-2 text-neutral-500">Search for</h4>
          <SearchSuggestions setSearchQuery={setSearchQuery} />
        </div>

        <ScrollArea style={{ height: windowHeight - 220 }} className="w-full">
          <div className="relative px-6 py-4">
            <SearchResults searchQuery={searchQuery} />
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default NavSearch;
