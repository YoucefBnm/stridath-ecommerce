import { SHOP_DATA } from "@/assets/data";
import {
  Hero,
  HeroBg,
  HeroCta,
  HeroDescription,
  HeroHeading,
} from "@/components/Hero";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/constants/heroContent";
import ProductCard from "@/features/product/ProductCard";
// import { useAddProudcts } from "@/hooks/useAddProduts";
import Sports from "@/layouts/Sports";

const Home = () => {
  // useAddProudcts();
  return (
    <>
      <Hero
        heading={heroContent.heading}
        description={heroContent.description}
        heroBg={heroContent.imageUrl}
      >
        <HeroHeading className="md:w-[11ch]" />
        <HeroDescription />
        <HeroCta link="/shop/men" label="shop men">
          <Button
            className="uppercase font-heading font-medium rounded-sm"
            variant="secondary"
            size="lg"
          >
            Shop Women
          </Button>
        </HeroCta>
        <HeroBg className="object-right-bottom" />
      </Hero>
      <Sports />
      <div className="p-12">
        <div className=" w-72">
          <ProductCard product={SHOP_DATA[72]} />
        </div>
        <Spinner />
      </div>
    </>
  );
};

export default Home;
