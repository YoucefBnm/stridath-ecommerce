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
// import { useCreateProductsFilters } from "@/hooks/useCreateProductsFilters";
// import { useAddProudcts } from "@/hooks/useAddProduts";
import Sports from "@/layouts/Sports";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // useAddProudcts();
  // useCreateProductsFilters();
  const navigate = useNavigate();
  const navigateToWomenShop = () => navigate("/shop/women");
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
            aria-label="navigate to women page"
            onClick={navigateToWomenShop}
          >
            Shop Women
          </Button>
        </HeroCta>
        <HeroBg className="object-right-bottom" />
      </Hero>
      <Sports />
      <div className="p-12">
        <div className=" w-72">
          <ProductCard product={SHOP_DATA[142]} />
        </div>
        <Spinner />
      </div>
    </>
  );
};

export default Home;
