import SearchField from "./SearchField";
import { useSetSearchQuery } from "@/hooks/useSetSearchQuery";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { IconSearch } from "@/assets";
import SearchSuggetions from "./SearchSuggetions";
import SearchResults from "./SearchResults";

const Search = () => {
  const { searchQuery, setSearchQuery, handleSearchChange } =
    useSetSearchQuery();
  const resetSearch = () => setSearchQuery("");

  return (
    <Sheet onOpenChange={(open) => !open && resetSearch()}>
      <SheetTrigger
        className={`${navigationMenuTriggerStyle()} cursor-pointer`}
        asChild
      >
        <img alt="search products" src={IconSearch} width={24} height={24} />
      </SheetTrigger>
      <SheetContent className="!max-w-screen-md w-3/4 md:w-2/4">
        <SheetHeader className="mt-4">
          <SearchField
            searchQuery={searchQuery}
            handleChange={handleSearchChange}
          />
        </SheetHeader>

        <SearchSuggetions className="my-4" setSearchQuery={setSearchQuery} />

        <SearchResults searchQuery={searchQuery} />
      </SheetContent>
    </Sheet>
  );
};

export default Search;
