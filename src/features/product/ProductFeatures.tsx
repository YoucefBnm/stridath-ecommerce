import { Button } from "@/components/ui/button";
import { ProductProps } from "@/types";
import { cn } from "@/utils/shadcn";
import { FC, useState } from "react";

type ProductFeaturesProps = {
  features: ProductProps["features"];
  className?: string;
};

const ProductFeatures: FC<ProductFeaturesProps> = ({ features, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={cn(className)}>
      <div
        className={cn("overflow-hidden flex flex-col gap-2", {
          "max-h-20": !isExpanded,
        })}
      >
        {features.map((feature) => (
          <p key={feature}>{feature}</p>
        ))}
      </div>
      <Button
        onClick={toggleExpand}
        variant={"link"}
        className="self-start font-heading text-xs p-1 text-blue-900"
      >
        {isExpanded ? "see less" : "see more"}
      </Button>
    </div>
  );
};

export default ProductFeatures;
