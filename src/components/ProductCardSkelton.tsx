import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

const ProductCardSkelton: FC = () => {
  return (
    <>
      {/* images */}
      <Skeleton className="w-full aspect-square rounded-sm" />
      {/* colors */}
      <Skeleton className="w-2/3 rounded-sm h-4 my-2" />
      {/* details */}
      <Skeleton className="w-1/2 rounded-sm h-9 my-2" />
      {/* price */}
      <Skeleton className="w-2/3 rounded-sm h-5" />
    </>
  );
};

export default ProductCardSkelton;
