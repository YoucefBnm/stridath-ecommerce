import ShopList from "@/layouts/ShopList";
import ShopNav from "@/features/shopNav/ShopNav";

const Shop = () => {
  return (
    <main className="relative py-8">
      <section>
        <ShopNav />
        <ShopList />
      </section>
    </main>
  );
};

export default Shop;
