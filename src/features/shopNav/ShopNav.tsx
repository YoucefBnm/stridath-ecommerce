import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ShopNavSort from "./ShopNavSort";
import ShopNavCheckedFilters from "./ShopNavCheckedFilters";
import ShopNavFilters from "./ShopNavFilters";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FC, memo } from "react";

const ShopNav: FC = () => {
  return (
    <div className="px-default py-4 bg-white bg-opacity-50 top-16 flex items-center sticky w-full left-0 z-10 align-baseline col-span-12">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"default"} className="rounded-sm" size={"sm"}>
            Sort & Filter
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="heading-base">Sort & Filter</SheetTitle>
          </SheetHeader>
          <Separator className="my-4" />

          <ScrollArea className="w-full h-full pb-12">
            <ShopNavSort />

            <Separator className="my-4" />
            <ShopNavCheckedFilters />

            <ShopNavFilters />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default memo(ShopNav);
