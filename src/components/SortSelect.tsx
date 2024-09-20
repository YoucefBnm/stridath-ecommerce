import { useSetSortOption } from "@/hooks/useSetSortOption";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { sortOptions } from "@/firebase/products/products.controller";
import { sortOption } from "@/firebase/types";
import { Label } from "./ui/label";

const SortSelect = () => {
  const { getSortParam, setSortOption } = useSetSortOption();

  return (
    <Select>
      <SelectTrigger className="w-full text-neutral-500 font-heading capitalize">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>

      <SelectContent className="p-2">
        <RadioGroup aria-checked="true" defaultChecked={true}>
          {Object.keys(sortOptions).map((key) => {
            const typedKey = key as sortOption;
            return (
              <div key={typedKey} className="flex gap-x-2">
                <RadioGroupItem
                  checked={typedKey === getSortParam}
                  onClick={() => setSortOption(typedKey)}
                  value={key}
                  id={key}
                />

                <Label className="capitalize font-heading" htmlFor={key}>
                  {key}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
