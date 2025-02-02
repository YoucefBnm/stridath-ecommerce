// import { SHOP_DATA } from "@/assets/data";
import {
  Hero,
  HeroBg,
  HeroCta,
  HeroDescription,
  HeroHeading,
} from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/constants/heroContent";
import { hikingCategoryContent } from "@/constants/hikingSection";
import CategoryWrap from "@/layouts/CategoryWrap";
import Cta from "@/layouts/Cta";
import ProductsCarousel from "@/layouts/ProductsCarousel";
import ShopBy from "@/layouts/ShopBy";
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
        <div className="w-full sm:w-full md:w-2/4  mb-4">
          <HeroHeading />
          <HeroDescription />
        </div>
        <HeroCta link="/shop/men" label="shop men">
          <Button
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

      <ProductsCarousel />

      <CategoryWrap
        title={hikingCategoryContent.title}
        heading={hikingCategoryContent.heading}
        description={hikingCategoryContent.description}
        route="/shop/sport/hiking"
        imageUrl={hikingCategoryContent.image}
      />
      <ShopBy />

      <Cta />
    </>
  );
};

export default Home;
