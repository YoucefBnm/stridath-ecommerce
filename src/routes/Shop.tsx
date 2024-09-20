// import { useAddProudcts } from "@/hooks/useAddProducts";
import {
  useWindowHeight,
  useWindowWidth,
} from "@react-hook/window-size/throttled";

import ShopList from "@/sections/ShopList";
import ShopNav from "@/sections/ShopNav";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FilterIcon } from "@/assets";
import Seo from "@/components/Seo";
import { useFetchShopProducts } from "@/hooks/useFetchShopProducts";

const Shop = () => {
  const windowHeight = useWindowHeight();
  const windowWidth = useWindowWidth();

  const { params } = useFetchShopProducts();
  const { category, brand } = params;

  return (
    <>
      <Seo
        title={`Actifeet | Shop ${Object.values(params).join(" ")} Shoes`}
        description={`Explore ${category ? category : "all"} shoes from ${
          brand ? brand : "top brands"
        } at Actifeet. Find the perfect footwear for your active lifestyle.`}
        url="https://actifeet.netlify.app/shop/"
      />
      <main className="relative py-12">
        <section className="px-default section-container">
          {windowWidth > 900 ? (
            <aside
              style={{ height: windowHeight - 60 }}
              className="sticky top-16 left-0 w-full col-span-3"
            >
              <ShopNav />
            </aside>
          ) : (
            <div className="sticky top-20 z-10 right-0 w-full flex justify-end  col-start-12 col-span-1">
              <Drawer direction="right">
                <DrawerTrigger
                  title="shop filters"
                  aria-label="shop filters trigger"
                  className=" size-8 bg-zinc-50 border border-zinc-100 flex-center  rounded-full"
                >
                  <img width={16} height={16} src={FilterIcon} aria-hidden />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="justify-end">
                    <DrawerClose>
                      <span className="text-2xl text-zinc-500">&times;</span>
                    </DrawerClose>
                  </DrawerHeader>
                  <ShopNav />
                </DrawerContent>
              </Drawer>
            </div>
          )}
          <div
            className={`${
              windowWidth > 900
                ? "col-span-8 col-start-5"
                : "col-span-11 col-start-1"
            } relative`}
          >
            <ShopList />
          </div>
        </section>
      </main>
    </>
  );
};

export default Shop;
