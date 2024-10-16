import {
  CategoryImage,
  CategoryText,
  CategoryTitle,
  CategoryWrap,
} from "@/components/CategoryWrap";
import {
  HeroWrap,
  HeroWrapBg,
  HeroWrapCta,
  HeroWrapDescription,
  HeroWrapHeading,
} from "@/components/HeroWrap";
import ProductsCarousel from "@/components/ProductsCarousel";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import {
  climbingCategoryContent,
  crossTrainingCategoryContent,
  heroContent,
  hikingCategoryContent,
  runningCategoryContent,
} from "@/constants/constants";
import ShopBy from "@/sections/ShopBy";
import Sports from "@/sections/Sports";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateToMenShop = () => navigate("/shop/men");
  const navigateToWomenShop = () => navigate("/shop/women");
  const navigateToRunningShop = () => navigate("/shop/category/running");
  return (
    <>
      <Seo
        title="Actifeet | Premium Athletic, Running, Cross-Training, Climbing & Hiking Shoes"
        description="Explore Actifeet's wide range of premium athletic shoes. Whether you need running, cross-training, climbing, or hiking shoes, Actifeet has the perfect fit for your active lifestyle."
      />
      <HeroWrap heading={heroContent.heading} heroBg={heroContent.heroBg}>
        <HeroWrapBg />
        <HeroWrapHeading className="heading-xl max-w-[9ch]" />
        <HeroWrapCta className="mt-8">
          <Button
            aria-label="navigate to men shop"
            onClick={navigateToMenShop}
            variant={"secondary"}
            size={"lg"}
            className="font-heading font-normal"
          >
            Shop Men
          </Button>
          <Button
            aria-label="navigate to women shop"
            onClick={navigateToWomenShop}
            variant={"secondary"}
            size={"lg"}
            className="font-heading font-normal"
          >
            Shop Women
          </Button>
        </HeroWrapCta>
      </HeroWrap>
      <Sports />
      <ProductsCarousel
        title="favorites"
        route="/shop/badge/best seller"
        params={{ badge: "best seller" }}
      />
      <ShopBy />
      <CategoryWrap
        title={hikingCategoryContent.title}
        imageUrl={hikingCategoryContent.image}
        heading={hikingCategoryContent.heading}
        description={hikingCategoryContent.description}
        route={"/shop/category/hiking"}
      >
        <CategoryTitle />
        <CategoryImage />
        <CategoryText />
      </CategoryWrap>

      <HeroWrap
        heading={runningCategoryContent.heading}
        description={runningCategoryContent.description}
        heroBg={runningCategoryContent.image}
      >
        <HeroWrapBg />
        <HeroWrapHeading className="heading-md" />
        <HeroWrapDescription className="max-w-[42ch]" />
        <HeroWrapCta className="mt-8">
          <Button
            aria-label="navigate to running shop"
            onClick={navigateToRunningShop}
            variant={"secondary"}
            size={"lg"}
            className="font-heading font-normal"
          >
            Shop Collection
          </Button>
        </HeroWrapCta>
      </HeroWrap>

      <CategoryWrap
        title={crossTrainingCategoryContent.title}
        imageUrl={crossTrainingCategoryContent.image}
        heading={crossTrainingCategoryContent.heading}
        description={crossTrainingCategoryContent.description}
        route={"/shop/category/hiking"}
      >
        <CategoryTitle />
        <CategoryImage />
        <CategoryText />
      </CategoryWrap>

      <ProductsCarousel
        title="New Arrivals"
        route="/shop/badge/new"
        params={{ badge: "new" }}
      />
      <CategoryWrap
        title={climbingCategoryContent.title}
        imageUrl={climbingCategoryContent.image}
        heading={climbingCategoryContent.heading}
        description={climbingCategoryContent.description}
        route={"/shop/category/climbing"}
      >
        <CategoryTitle />
        <CategoryImage />
        <CategoryText />
      </CategoryWrap>
      <ProductsCarousel
        title="best deals"
        route="/shop/badge/sale"
        params={{ badge: "sale" }}
      />
    </>
  );
};

export default Home;
