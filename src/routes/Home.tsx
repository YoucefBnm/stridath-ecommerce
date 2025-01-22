import { SHOP_DATA } from "@/assets/data";
import {
  Hero,
  HeroBg,
  HeroCta,
  HeroDescription,
  HeroHeading,
} from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/constants/heroContent";
import ProductCard from "@/features/product/ProductCard";
import Sports from "@/layouts/Sports";

const Home = () => {
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
          <Button variant="secondary" size="lg">
            Shop Women
          </Button>
        </HeroCta>
        <HeroBg className="object-right-bottom" />
      </Hero>
      <Sports />
      <div className="p-12">
        <div className=" w-72">
          <ProductCard product={SHOP_DATA[1]} />
        </div>
      </div>
    </>
  );
};

export default Home;
