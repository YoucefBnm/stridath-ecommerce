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
import { motion } from "framer-motion";
import { useToggleNav } from "@/hooks/useToggleNav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCount } from "@/store/shopCollection/shopCollection.selector";

const ShopBreadcrumb: FC = () => {
  const params = useParams();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <span>Shop</span>
        </BreadcrumbItem>

        {params["gender"] && (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                href={`/shop/${params["gender"]}`}
              >
                {params["gender"]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {params["sport"] && (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                href={`/shop/sport/${params["sport"]}`}
              >
                {params["sport"]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {params["brand"] && (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                href={`/shop/brand/${params["brand"]}`}
              >
                {params["brand"]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {params["featured"] && (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                href={`/shop/isfeatured${params["featured"]}`}
              >
                {params["featured"]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {params["sale"] && (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                href={`/shop/isonsale/${params["sale"]}`}
              >
                {params["sale"]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
const ShopNav: FC = () => {
  const { isHidden, showHeader } = useToggleNav();
  const productsCount = useSelector(selectCount);
  return (
    <motion.div
      className="flex gap-8 items-center px-default py-4 bg-white bg-opacity-50 top-16  sticky w-full left-0 z-10 col-span-12"
      animate={isHidden ? { y: "-100%" } : { y: "0%" }}
      onFocusCapture={showHeader}
      transition={{ duration: 0.2 }}
      whileHover={{ y: "0%" }}
    >
      <div>
        <span>{productsCount} Product(s)</span>
      </div>
      <ShopBreadcrumb />
      <Sheet>
        <SheetTrigger className="ml-auto" asChild>
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
    </motion.div>
  );
};

export default memo(ShopNav);
