import { IconSearch } from "@/assets";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FC } from "react";

interface SearchFieldProps {
  searchQuery: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SearchField: FC<SearchFieldProps> = ({ searchQuery, handleChange }) => {
  return (
    <div className="relative  ">
      <span className="inline-block absolute top-1/2 -translate-y-1/2 left-2">
        <img width={16} height={16} src={IconSearch} alt="search" />
      </span>
      <Input
        className="pl-8"
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchField;
