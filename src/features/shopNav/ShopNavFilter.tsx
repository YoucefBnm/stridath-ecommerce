import { FC, memo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { selectIsFetching } from "@/store/shopCollection/shopCollection.selector";
import { useSelector } from "react-redux";

export type ShopNavFilterProps = {
  type: string;
  label: string;
  isChecked: boolean;
  handleChange: (checked: boolean) => void;
};

const ShopNavFilter: FC<ShopNavFilterProps> = ({
  type,
  label,
  isChecked,
  handleChange,
}) => {
  const isFetching = useSelector(selectIsFetching);

  return (
    <div className={`filter-group group-${type}`}>
      <Checkbox
        id={label}
        checked={isChecked}
        onCheckedChange={handleChange}
        value={label}
        title={label}
        disabled={isFetching}
        className={`absolute inset-0 size-full hover:border hover:border-gray-900 input-${type} ${
          isChecked ? "!border !border-gray-900" : "border-gray-200"
        }`}
        style={
          type === "colors"
            ? { backgroundColor: label }
            : { backgroundColor: "transparent" }
        }
      />
      <Label
        className={`${
          type === "colors"
            ? "sr-only"
            : "pointer-events-none z-10 capitalize text-gray-900  font-normal"
        }`}
        htmlFor={label}
      >
        {label}
      </Label>
    </div>
  );
};

export default memo(ShopNavFilter);
